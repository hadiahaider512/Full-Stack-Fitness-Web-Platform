"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { Menu, X, Dumbbell, User, LogOut, LogIn } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/exercise", label: "Exercises" },
  { href: "/calculators", label: "Calculators" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { data: session, status } = useSession();

  const isAuthenticated = status === "authenticated" && !!session?.user;

  return (
    <nav className="sticky top-0 z-50 bg-secondary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-white font-heading font-bold text-xl">
            <Dumbbell className="h-6 w-6 text-primary" />
            FitLife
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-primary text-white"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}

            {isAuthenticated ? (
              <div className="flex items-center gap-2 ml-3 pl-3 border-l border-white/10">
                <Link
                  href="/profile"
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors",
                    pathname === "/profile"
                      ? "bg-primary text-white"
                      : "text-slate-200 hover:text-white hover:bg-white/10"
                  )}
                >
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                    {session.user.name ? session.user.name.charAt(0).toUpperCase() : <User className="h-3.5 w-3.5" />}
                  </div>
                  <span>{session.user.name?.split(" ")[0] || "Profile"}</span>
                </Link>

                <button
                  onClick={() => signOut({ callbackUrl: "/login" })}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium text-slate-300 hover:text-red-400 hover:bg-white/10 transition-colors cursor-pointer"
                  title="Logout"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 ml-2">
                <Link
                  href="/login"
                  className={cn(
                    "flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold transition-colors",
                    pathname === "/login"
                      ? "bg-primary text-white"
                      : "bg-primary text-white hover:bg-primary-dark"
                  )}
                >
                  <LogIn className="h-4 w-4" />
                  Login
                </Link>
                <Link
                  href="/register"
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium border border-white/20 text-slate-200 hover:text-white hover:bg-white/10 transition-colors",
                    pathname === "/register" && "bg-white/10 text-white"
                  )}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-primary text-white"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}

            {isAuthenticated ? (
              <div className="pt-2 mt-2 border-t border-white/10 space-y-1">
                <Link
                  href="/profile"
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    pathname === "/profile"
                      ? "bg-primary text-white"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  )}
                >
                  <User className="h-4 w-4 text-primary" />
                  <span>My Profile ({session.user.name || session.user.email})</span>
                </Link>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    signOut({ callbackUrl: "/login" });
                  }}
                  className="flex items-center gap-2 w-full text-left px-4 py-2 rounded-lg text-sm font-medium text-red-400 hover:bg-white/10 transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="pt-2 mt-2 border-t border-white/10 space-y-2">
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="block mx-4 px-5 py-2 rounded-full text-sm font-semibold bg-primary text-white text-center hover:bg-primary-dark"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMobileOpen(false)}
                  className="block mx-4 px-5 py-2 rounded-full text-sm font-semibold border border-white/20 text-slate-200 text-center hover:bg-white/10"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
