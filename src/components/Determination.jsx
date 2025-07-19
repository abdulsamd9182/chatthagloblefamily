// src/components/Determination.jsx
import React from "react";

export default function Determination({ heading, paragraph }) {
  return (
    <section id="determination" className="py-16 px-4 mt-10 bg-gray-900 w-full max-w-6xl rounded-2xl mb-20 mx-auto" data-aos="fade-up">
      <h2 className="text-3xl text-[#e5ca61] font-bold text-center mb-8 hover:text-[#e5ca61]">{heading}</h2>
      <p className="max-w-4xl mx-auto text-lg text-gray-300 whitespace-pre-line leading-relaxed text-center">
        {paragraph}
      </p>
    </section>
  );
}
