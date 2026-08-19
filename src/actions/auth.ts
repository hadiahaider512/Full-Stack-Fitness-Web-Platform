"use server";

import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { signIn } from "@/lib/auth";

export async function registerAction(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      return { error: "Email and password are required" };
    }

    if (!process.env.DATABASE_URL) {
      console.error("DATABASE_URL environment variable is missing.");
      return { error: "Database configuration error. Please check server environment variables." };
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { error: "User already exists with this email" };
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return { success: "Account created successfully" };
  } catch (error: any) {
    console.error("Registration error:", error);
    return {
      error: error?.message || "Failed to create account. Please check your database connection or try again.",
    };
  }
}

export async function loginAction(email: string, password: string) {
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/profile",
    });
  } catch (error: any) {
    // Re-throw redirect errors so Next.js can perform the navigation
    if (error?.message?.includes("NEXT_REDIRECT") || error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }
    if (error?.type === "CredentialsSignin" || error?.name === "CredentialsSignin") {
      throw new Error("Invalid email or password");
    }
    throw error;
  }
}

export async function forgotPasswordAction(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return { error: "No account found with this email" };
    }

    // TODO: Generate reset token, save to DB, and send email
    return { success: "If an account exists, a reset link has been sent" };
  } catch (error: any) {
    console.error("Forgot password error:", error);
    return { error: "Failed to process forgot password request." };
  }
}

export async function resetPasswordAction(token: string, password: string) {
  try {
    // TODO: Verify token against DB, update password, invalidate token
    return { success: "Password has been reset" };
  } catch (error: any) {
    console.error("Reset password error:", error);
    return { error: "Failed to reset password." };
  }
}
