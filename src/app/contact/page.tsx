// src/app/contact/page.tsx

import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-24 px-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-12 text-purple-700">Contact Me</h1>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-6xl mx-auto">
        {/* Aerial Classes */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex-1 text-center border border-gray-200 hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">Aerial Classes</h2>
          <p className="text-gray-700">
            I take private, semi-private, and group classes in aerial arts. Whether you're a beginner or
            looking to refine your technique, feel free to reach out to join a session!
          </p>
        </div>

        {/* App & Dev Support */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex-1 text-center border border-gray-200 hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">App & Development Support</h2>
          <p className="text-gray-700">
            Need help building or designing an app? I offer full-stack development and UI/UX services. Let’s
            collaborate on your project!
          </p>
        </div>

        {/* ML & AI Consulting */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex-1 text-center border border-gray-200 hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">ML & AI Consulting</h2>
          <p className="text-gray-700">
            I'm currently working as a Machine Learning and AI programmer. I take on consulting roles for
            innovative projects involving AI, data science, and automation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;


