"use client";
import { useState } from "react";

const field =
  "w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500";

export default function EnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    type: "Website",
    budget: "Let's discuss",
    timeline: "Flexible",
    details: "",
  });

  const set = (k: string, v: string) => setForm({ ...form, [k]: v });

  function send(e: React.FormEvent) {
    e.preventDefault();
    const msg =
      `Hi Olakunle, I'd like to start a project.\n\n` +
      `Name: ${form.name}\n` +
      `Project type: ${form.type}\n` +
      `Budget: ${form.budget}\n` +
      `Timeline: ${form.timeline}\n` +
      `Details: ${form.details}`;
    window.open(
      `https://wa.me/2347049075581?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  }

  return (
    <form onSubmit={send} className="mt-8 grid gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <input required placeholder="Your name" value={form.name}
        onChange={(e) => set("name", e.target.value)} className={field} />

      <select value={form.type} onChange={(e) => set("type", e.target.value)} className={field}>
        <option>Website</option>
        <option>Online store</option>
        <option>Web app</option>
        <option>Mobile app or game</option>
        <option>Redesign</option>
        <option>Other</option>
      </select>

      <select value={form.budget} onChange={(e) => set("budget", e.target.value)} className={field}>
        <option>Under ₦100,000</option>
        <option>₦100,000 – ₦300,000</option>
        <option>₦300,000 – ₦700,000</option>
        <option>₦700,000 – ₦1,500,000</option>
        <option>Above ₦1,500,000</option>
        <option>Let's discuss</option>
      </select>

      <select value={form.timeline} onChange={(e) => set("timeline", e.target.value)} className={field}>
        <option>ASAP</option>
        <option>Within 2 weeks</option>
        <option>1 month</option>
        <option>2–3 months</option>
        <option>Flexible</option>
      </select>

      <textarea required rows={4} placeholder="Tell me about your project"
        value={form.details} onChange={(e) => set("details", e.target.value)} className={field} />

      <button type="submit"
        className="rounded-full bg-emerald-400 px-6 py-3 font-semibold text-black">
        Send on WhatsApp
      </button>
    </form>
  );
}