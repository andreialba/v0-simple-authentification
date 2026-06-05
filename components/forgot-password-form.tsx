"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail } from "lucide-react"

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    console.log("Password reset requested for:", email)
  }

  if (submitted) {
    return (
      <div className="w-full max-w-md space-y-6 rounded-xl border border-border bg-card p-8 shadow-sm">
        <div className="flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900">
            <Mail className="h-6 w-6 text-white" />
          </div>
        </div>

        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-card-foreground">
            Check your email
          </h1>
          <p className="text-sm text-muted-foreground">
            We sent a password reset link to{" "}
            <span className="font-medium text-card-foreground">{email}</span>
          </p>
        </div>

        <Button
          className="w-full cursor-pointer py-6 text-base font-medium"
          onClick={() => setSubmitted(false)}
        >
          Resend email
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          <Link
            href="/"
            className="inline-flex items-center gap-1 font-medium text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to login
          </Link>
        </p>
      </div>
    )
  }

  return (
    <div className="w-full max-w-md space-y-6 rounded-xl border border-border bg-card p-8 shadow-sm">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-card-foreground">
          Forgot your password?
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email address and we&apos;ll send you a link to reset your
          password
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-card-foreground"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="m@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
          />
        </div>

        <Button type="submit" className="w-full cursor-pointer py-6 text-base font-medium">
          Send reset link
        </Button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        <Link
          href="/"
          className="inline-flex items-center gap-1 font-medium text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to login
        </Link>
      </p>
    </div>
  )
}
