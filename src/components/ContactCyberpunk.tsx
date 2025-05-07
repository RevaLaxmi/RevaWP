'use client';
import { useState } from 'react';

export default function ContactCyberpunk() {
  const [form, setForm] = useState({ id: '', code: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="cyber-container">
      {/* Wireframe grid background */}
      <div className="cyber-grid"></div> 

      <div className="cyber-glass">
        <h2 className="cyber-title">TRANSMISSION PANEL</h2>

        <label className="cyber-label">IDENTIFIER</label>
        <input
          type="text"
          name="id"
          className="cyber-input"
          placeholder="e.g. Reva-01"
          value={form.id}
          onChange={handleChange}
        />

        <label className="cyber-label">TRANSMISSION CODE</label>
        <input
          type="text"
          name="code"
          className="cyber-input"
          placeholder="e.g. 7X-99-PULSE"
          value={form.code}
          onChange={handleChange}
        />

        <label className="cyber-label">MESSAGE</label>
        <textarea
          name="message"
          className="cyber-input"
          placeholder="Initiate contact sequence..."
          value={form.message}
          onChange={handleChange}
        />

        <button className="cyber-button">INITIATE TRANSMISSION</button>
      </div>
    </div>
  );
}
