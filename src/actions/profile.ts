"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { CalculatorType } from "@prisma/client";

export async function getUserProfileData() {
  try {
    const session = await auth();
    if (!session?.user?.id && !session?.user?.email) {
      return { error: "Not authenticated" };
    }

    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { id: session.user.id || undefined },
          { email: session.user.email || undefined },
        ],
      },
      include: {
        calculatorResults: {
          orderBy: { createdAt: "desc" },
          take: 20,
        },
        exercises: {
          include: {
            exercise: true,
          },
          orderBy: { createdAt: "desc" },
          take: 20,
        },
      },
    });

    if (!user) {
      return { error: "User not found" };
    }

    return {
      user: {
        id: user.id,
        name: user.name || "",
        email: user.email,
        avatar: user.avatar || "",
        role: user.role,
        createdAt: user.createdAt.toISOString(),
      },
      calculatorResults: user.calculatorResults.map((r) => ({
        id: r.id,
        type: r.type,
        inputs: typeof r.inputs === "string" ? r.inputs : JSON.stringify(r.inputs),
        result: typeof r.result === "string" ? r.result : JSON.stringify(r.result),
        date: r.createdAt.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
      })),
      userProgress: user.exercises.map((p) => ({
        id: p.id,
        exercise: p.exercise?.name || "Workout",
        sets: p.sets ?? 0,
        reps: p.reps ?? 0,
        weight: p.weight ? `${p.weight} kg` : "Bodyweight",
        date: (p.date || p.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
      })),
    };
  } catch (error: any) {
    console.error("Error fetching user profile data:", error);
    return { error: error?.message || "Failed to fetch profile data" };
  }
}

export async function updateProfileInfo(data: {
  name: string;
  email: string;
  avatar?: string;
}) {
  try {
    const session = await auth();
    if (!session?.user?.id && !session?.user?.email) {
      return { error: "You must be signed in to update your profile." };
    }

    const { name, email, avatar } = data;

    if (!name.trim() || !email.trim()) {
      return { error: "Name and email cannot be empty." };
    }

    const currentUser = await prisma.user.findFirst({
      where: {
        OR: [
          { id: session.user.id || undefined },
          { email: session.user.email || undefined },
        ],
      },
    });

    if (!currentUser) {
      return { error: "User record not found." };
    }

    // Check if new email is already taken by another user
    if (email !== currentUser.email) {
      const emailExists = await prisma.user.findUnique({
        where: { email },
      });
      if (emailExists && emailExists.id !== currentUser.id) {
        return { error: "This email is already in use by another account." };
      }
    }

    const updatedUser = await prisma.user.update({
      where: { id: currentUser.id },
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        avatar: avatar ? avatar.trim() : null,
      },
    });

    return {
      success: "Profile updated successfully!",
      user: {
        id: updatedUser.id,
        name: updatedUser.name || "",
        email: updatedUser.email,
        avatar: updatedUser.avatar || "",
      },
    };
  } catch (error: any) {
    console.error("Error updating profile:", error);
    return { error: error?.message || "Failed to update profile." };
  }
}

export async function changeUserPassword(currentPassword: string, newPassword: string) {
  try {
    const session = await auth();
    if (!session?.user?.id && !session?.user?.email) {
      return { error: "You must be signed in to change your password." };
    }

    if (!currentPassword || !newPassword) {
      return { error: "Both current and new passwords are required." };
    }

    if (newPassword.length < 6) {
      return { error: "New password must be at least 6 characters." };
    }

    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { id: session.user.id || undefined },
          { email: session.user.email || undefined },
        ],
      },
    });

    if (!user || !user.password) {
      return { error: "User not found or password not set." };
    }

    const isValid = await bcrypt.compare(currentPassword, user.password);
    if (!isValid) {
      return { error: "Incorrect current password." };
    }

    const hashedPassword = await bcrypt.hash(newPassword, 12);

    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    });

    return { success: "Password changed successfully!" };
  } catch (error: any) {
    console.error("Error changing password:", error);
    return { error: error?.message || "Failed to change password." };
  }
}

export async function logUserProgress(data: {
  exerciseName: string;
  sets: number;
  reps: number;
  weight?: number;
  notes?: string;
}) {
  try {
    const session = await auth();
    if (!session?.user?.id && !session?.user?.email) {
      return { error: "You must be signed in to log workouts." };
    }

    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { id: session.user.id || undefined },
          { email: session.user.email || undefined },
        ],
      },
    });

    if (!user) {
      return { error: "User not found." };
    }

    // Find or create the exercise
    let exercise = await prisma.exercise.findFirst({
      where: { name: { equals: data.exerciseName.trim(), mode: "insensitive" } },
    });

    if (!exercise) {
      exercise = await prisma.exercise.create({
        data: {
          name: data.exerciseName.trim(),
          description: `User-logged workout: ${data.exerciseName.trim()}`,
          muscleGroup: "Full Body",
          equipment: "Various",
          difficulty: "INTERMEDIATE",
          instructions: "Custom user exercise",
        },
      });
    }

    const progress = await prisma.userProgress.create({
      data: {
        userId: user.id,
        exerciseId: exercise.id,
        sets: Number(data.sets) || 1,
        reps: Number(data.reps) || 1,
        weight: data.weight !== undefined ? Number(data.weight) : null,
        notes: data.notes || null,
      },
      include: {
        exercise: true,
      },
    });

    return {
      success: "Workout logged successfully!",
      progress: {
        id: progress.id,
        exercise: progress.exercise.name,
        sets: progress.sets,
        reps: progress.reps,
        weight: progress.weight ? `${progress.weight} kg` : "Bodyweight",
        date: progress.createdAt.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
      },
    };
  } catch (error: any) {
    console.error("Error logging workout progress:", error);
    return { error: error?.message || "Failed to log workout." };
  }
}
