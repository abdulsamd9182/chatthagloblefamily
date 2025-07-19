// src/components/Members.jsx
import React from "react";

export default function Members({ members }) {
  return (
    <section id="members" className="py-20 px-4 bg-black">
      <h2 className="text-4xl text-[#e5ca61] font-bold text-center mb-12">Leadership Team</h2>
      <div className="max-w-[1140px] mx-auto grid grid-cols-2 gap-4 sm:gap-6" data-aos="fade-up">
        {members.map((m, i) => (
          <div key={i} className="bg-gray-900 rounded-lg shadow-lg p-6 text-center">
            <img src={m.image} alt={m.name} className="w-24 h-24 mx-auto rounded-full object-cover mb-4" />
            <h3 className="text-xl font-semibold text-gray-300 mb-2 hover:text-[#e5ca61]">{m.name}</h3>
            <p className="text-gray-400">{m.title}</p>
            <p className="text-sm font-bold text-gray-500 p-2">Chattha Global Family</p>
          </div>
        ))}
      </div>
    </section>
  );
}
