"use client";

import type { FormEvent } from "react";
import { transformations } from "@/content/transformations";
import { Arrow, buttonClasses } from "./Button";

const fieldClass =
  "mt-2 w-full rounded-lg border border-rose bg-ivory px-4 py-3 text-charcoal transition-colors placeholder:text-charcoal/60 focus:border-magenta focus:outline-none focus-visible:ring-2 focus-visible:ring-gold";
const labelClass = "text-sm font-semibold text-plum";

export function ContactForm({ email }: { email: string }) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const body = [
      `Name: ${name}`,
      `Email: ${data.get("email") ?? ""}`,
      `Focus: ${data.get("focus") ?? ""}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    const subject = `Discovery call enquiry from ${name}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className={labelClass}>
          Your name
          <input name="name" required autoComplete="name" className={fieldClass} />
        </label>
        <label className={labelClass}>
          Email
          <input name="email" type="email" required autoComplete="email" className={fieldClass} />
        </label>
      </div>
      <label className={labelClass}>
        What would you like support with?
        <select name="focus" defaultValue="Not sure yet" className={fieldClass}>
          {transformations.map((item) => (
            <option key={item.title}>{item.title}</option>
          ))}
          <option>Not sure yet</option>
        </select>
      </label>
      <label className={labelClass}>
        Message
        <textarea
          name="message"
          rows={5}
          placeholder="Share as much or as little as you like."
          className={fieldClass}
        />
      </label>
      <div>
        <button type="submit" className={buttonClasses("accent")}>
          Send message
          <Arrow />
        </button>
        <p className="mt-3 text-xs text-charcoal/70">This opens your email app with your message ready to send.</p>
      </div>
    </form>
  );
}
