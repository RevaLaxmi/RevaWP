'use client';

import { useState } from 'react';

export default function TerminalContact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can integrate EmailJS, Formspree, or your API route
    setSubmitted(true);
  };

  return (
    <div className="terminal-container">
      <pre>$ whoami</pre>
      <pre>Reva Chauhan</pre>

      <pre>$ contact --email</pre>
      <pre>reva.chauhan1@gmail.com</pre>

      <pre>$ send-message</pre>
      <form onSubmit={handleSubmit}>
        <label>
          [Name] &gt; <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          [Email] &gt; <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>
          [Message] &gt; <textarea name="message" rows={4} value={form.message} onChange={handleChange} required />
        </label>
        <button type="submit">$ submit</button>
      </form>

      {submitted && <pre>✔ Message sent!</pre>}
    </div>
  );
}
