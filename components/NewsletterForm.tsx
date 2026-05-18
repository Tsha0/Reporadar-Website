"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function NewsletterForm({ variant = "stacked" }: { variant?: "stacked" | "inline" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const body = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!res.ok || !body.ok) {
        setStatus("error");
        setMessage(body.error ?? "Something went wrong. Try again in a moment.");
        return;
      }

      setStatus("success");
      setMessage("You're on the list. Watch your inbox.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error — please try again.");
    }
  }

  const isInline = variant === "inline";

  return (
    <form
      onSubmit={onSubmit}
      className={
        isInline
          ? "flex w-full max-w-xl flex-col gap-3 sm:flex-row"
          : "flex w-full flex-col gap-3"
      }
      noValidate
    >
      <label htmlFor={`newsletter-email-${variant}`} className="sr-only">
        Email address
      </label>
      <input
        id={`newsletter-email-${variant}`}
        type="email"
        required
        autoComplete="email"
        placeholder="you@yourdomain.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "loading" || status === "success"}
        className="h-12 flex-1 rounded-full border border-navy-100 bg-white px-5 text-base text-navy-800 placeholder:text-navy-400 shadow-sm outline-none transition focus:border-coral-300 focus:shadow-glow disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="inline-flex h-12 items-center justify-center rounded-full bg-navy-800 px-7 text-sm font-semibold tracking-wide text-cream-50 transition hover:bg-navy-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 disabled:opacity-60"
      >
        {status === "loading"
          ? "Subscribing…"
          : status === "success"
            ? "Subscribed"
            : "Get the radar"}
      </button>

      {message ? (
        <p
          role={status === "error" ? "alert" : "status"}
          className={
            "text-sm " +
            (status === "error" ? "text-coral-700" : "text-navy-600")
          }
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
