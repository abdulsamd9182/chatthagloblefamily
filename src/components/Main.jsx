// src/components/Main.jsx
import React from "react";

export default function Main() {
  return (
    <section
      data-aos="fade-up"
      className="relative bg-cover bg-center bg-no-repeat py-40 sm:py-52 px-4 text-center"
      style={{ backgroundImage: "url('/image/banner.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 hover:text-[#e5ca61] transition-colors">
          United for a Better Future
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Bringing together the Chattha Family to support, empower, and grow together.
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-sm sm:text-base">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/923074718026"
            className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 sm:px-6 sm:py-3 rounded transition"
          >
            Contact on WhatsApp
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/chatthaglobalfamily"
            className="bg-purple-700 hover:bg-purple-900 text-white px-4 py-2 sm:px-6 sm:py-3 rounded transition"
          >
            Visit Instagram
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/profile.php?id=61578603322966"
            className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 sm:px-6 sm:py-3 rounded transition"
          >
            Visit Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
