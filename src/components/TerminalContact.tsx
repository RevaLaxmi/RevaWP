"use client";
import { useState } from "react";

export default function ArcadeContact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: any) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    setSubmitted(true);
    // fake send delay
    setTimeout(() => {
      alert("LEVEL COMPLETE 🕹️\nMessage sent!");
    }, 800);
  }

  return (
    <div className="arcade-container">
      <h1 className="arcade-title">CONTACT PLAYER 1</h1>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="arcade-form">
          <label>
            NAME:
            <input name="name" value={form.name} onChange={handleChange} />
          </label>
          <label>
            EMAIL:
            <input name="email" value={form.email} onChange={handleChange} />
          </label>
          <label>
            MESSAGE:
            <textarea name="message" value={form.message} onChange={handleChange} />
          </label>

          <button type="submit" className="arcade-button">
            PRESS START TO SEND
          </button>
        </form>
      ) : (
        <p className="arcade-complete">🕹️ LEVEL COMPLETE 🕹️</p>
      )}
    </div>
  );
}
