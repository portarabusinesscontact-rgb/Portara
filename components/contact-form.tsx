"use client";
import { useState } from "react";
import styles from "./contact-form.module.css";

const reasons = [
  "General question",
  "Sponsorship",
  "Bulk order",
  "Partnership",
  "Support",
];

export default function ContactForm() {
  const [state, setState] = useState<{ loading: boolean; msg: string | null; ok?: boolean }>({
    loading: false,
    msg: null,
  });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const payload = {
      name: (f.elements.namedItem("name") as HTMLInputElement).value,
      email: (f.elements.namedItem("email") as HTMLInputElement).value,
      reason: (f.elements.namedItem("reason") as HTMLSelectElement).value,
      message: (f.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    setState({ loading: true, msg: null });
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const json = await res.json();
    setState({
      loading: false,
      msg: json.ok ? "Message sent ✅" : json.error || "Failed to send ❌",
      ok: !!json.ok,
    });
    if (json.ok) f.reset();
  }

  return (
    <form onSubmit={onSubmit} className={styles.form} aria-label="Contact form">
      <header className={styles.head}>
        <h2 className={styles.title}>Get in touch</h2>
        <p className={styles.subtitle}>
          Have questions about sponsoring, bulk orders, or partnerships? We’d love to hear from you.
        </p>
      </header>

      <div className={styles.grid}>
        <label className={styles.field}>
          <span>Name *</span>
          <input name="name" placeholder="Your name" required className={styles.input} />
        </label>

        <label className={styles.field}>
          <span>Email *</span>
          <input name="email" type="email" placeholder="you@example.com" required className={styles.input} />
        </label>
      </div>

      <label className={styles.field}>
        <span>Reason for Contact *</span>
        <select name="reason" required className={styles.select} defaultValue="">
          <option value="" disabled>
            Select a reason
          </option>
          {reasons.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        <span>Message *</span>
        <textarea
          name="message"
          placeholder="Tell us how we can help…"
          required
          className={styles.textarea}
        />
      </label>

      <button className={styles.button} disabled={state.loading}>
        {state.loading ? "Sending…" : "Send Message"}
      </button>

      {state.msg && (
        <p className={styles.status} role="status" aria-live="polite">
          {state.msg}
        </p>
      )}
    </form>
  );
}
