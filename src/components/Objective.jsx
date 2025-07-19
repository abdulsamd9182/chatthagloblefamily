// src/components/Objectives.jsx
import React from "react";

export default function Objectives({ objectives }) {
  return (
    <section id="objectives" className="py-10 px-4 bg-black">
      <h2 className="text-4xl font-bold text-center mb-10 text-[#e5ca61]">Objectives</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {objectives.map((obj, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-xl hover:text-[#e5ca61]" data-aos="fade-up">
            <obj.icon className="w-10 h-10 mb-4 text-white mx-auto" />
            <h3 className="text-xl font-bold text-center">{obj.title}</h3>
            <p className="text-sm text-center text-gray-400 mt-2">{obj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
