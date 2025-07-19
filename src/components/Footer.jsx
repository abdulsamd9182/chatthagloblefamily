// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <section id="contact" className="py-8 px-4 bg-gray-900 text-center border-t border-gray-800">
      <h2 className="text-3xl font-bold mb-4 hover:text-[#e5ca61] text-[#e5ca61]">Ready to Join Us?</h2>
      <p className="mb-6">Be part of our mission to unite and uplift the Chattha Family.</p>
      <a href="#" className="bg-[#e5ca61] hover:text-[#e5ca61] text-black px-6 py-3 rounded transition">Join Now</a>
      <p className="text-sm mt-6 font-bold text-white">
        &copy; {new Date().getFullYear()} Chattha Global Family. All rights reserved.
      </p>
    </section>
  );
}
