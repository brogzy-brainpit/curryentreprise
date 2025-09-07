"use client";
import { useState, useEffect } from "react";

export default function NewsletterModal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 5000); // show after 5s
    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("✅ You’re subscribed!");
        setEmail("");
        setTimeout(() => setOpen(false), 2000);
      } else {
        setMessage(`⚠️ ${data.error}`);
      }
    } catch (err) {
      setMessage("⚠️ Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full relative">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-gray-500"
        >
          ✕
        </button>
        <h2 className="text-xl font-semibold">Join our Newsletter</h2>
        <p className="text-sm text-gray-600 mt-2">
          Get updates and exclusive content.
        </p>

        <form onSubmit={handleSubmit} className="mt-4 flex flex-col space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="border rounded p-2"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

        {message && <p className="mt-3 text-sm">{message}</p>}
      </div>
    </div>
  );
}
