"use client";

import { useState } from "react";
import '../../common.css';
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("Thank you! We’ll get back to you soon.");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong.");
      }
    } catch {
      setStatus("Error submitting form.");
    }
  };

  return (
    <>
    <Navbar />
      <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="border rounded p-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="border rounded p-2"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="border rounded p-2"
          required
        />
        <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">
          Submit
        </button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </main>
    </>
    
  );
}
