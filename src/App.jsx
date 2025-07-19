import React, { useEffect } from "react";
import {
  Users,
  Heart,
  GraduationCap,
  ShieldCheck,
  BookOpen,
  Megaphone,
  Stethoscope,
  Briefcase,
  HelpingHand,
  ShieldAlert,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const members = [
    {
      name: "Ch Akmal Saif",
      title: "Provincial Chairman",
      image: "/image/Kamal.jpg",
    },
    {
      name: "Ch Muzammil Muqarrab Chattha",
      title: "Provincial President",
      image: "/image/muzzmil.jpg",
    },
    {
      name: "Ch Mumtaz Ahmad Chattha",
      title: "Provincial President",
      image: "/image/mumtaz.jpg",
    },
    {
      name: "Ch Ghulam Abbas Chattha",
      title: "Senior Vice President",
      image: "/image/ghulam.jpg",
    },
  ];

  const objectives = [
    { title: "Unity for Defense", description: "All Chattha members must unite...", icon: ShieldAlert },
    { title: "Youth for Progress", description: "Encourage Chattha youth...", icon: Users },
    { title: "Protect Islamic Values", description: "Uphold Islamic values...", icon: BookOpen },
    { title: "Promote Awareness", description: "Every Chattha member must...", icon: Megaphone },
    { title: "Youth Guidance", description: "Promote education and skills...", icon: GraduationCap },
    { title: "Support the Poor", description: "Raise voice for the poor...", icon: HelpingHand },
    { title: "Justice and Integrity", description: "Stand with the oppressed...", icon: ShieldCheck },
    { title: "Free Medical Services", description: "Affordable healthcare for all...", icon: Stethoscope },
    { title: "Tackle Unemployment", description: "Promote entrepreneurship...", icon: Briefcase },
    { title: "Support Marriages", description: "Assist poor marriages...", icon: Heart },
    { title: "Protect Our Youth", description: "Save children from bad company...", icon: ShieldAlert },
  ];

  const determination = {
    heading: "Determination",
    paragraph:
      "Our youth will become shining examples of truth and honor. They will achieve excellence...\n\nWe will open doors of progress. The Chattha name will shine in every province and globally.",
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden scroll-smooth">
      {/* Navbar */}
      <header className="fixed w-full top-0 z-50 bg-gray-900 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between p-4">
          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
            <img src="/image/logo.jpg" alt="Logo" className="w-12 h-12 rounded-full object-cover" />
            <span className="text-xl font-bold">Chattha Global Family</span>
          </div>
          <nav className="text-sm flex flex-wrap gap-4 justify-center text-center font-semibold">
            <a href="#members" className="hover:text-[#e5ca61]">Members</a>
            <a href="#objectives" className="hover:text-[#e5ca61]">Objectives</a>
            <a href="#determination" className="hover:text-[#e5ca61]">Determination</a>
            <a href="#contact" className="hover:text-[#e5ca61]">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative flex items-center justify-center h-[60vh] sm:min-h-screen bg-cover bg-center bg-no-repeat text-center px-4 pt-32 sm:pt-0"
        style={{ backgroundImage: "url('/image/banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 max-w-xl flex flex-col items-center justify-center h-full py-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-white hover:text-[#e5ca61] transition">
            United for a Better Future
          </h1>
          <p className="text-base sm:text-lg mb-6 text-white">
            Bringing together the Chattha Family to support, empower, and grow.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-sm sm:text-base">
            <a href="https://wa.me/923074718026" target="_blank" rel="noreferrer" className="bg-green-600 hover:bg-green-800 px-4 py-2 sm:px-6 sm:py-3 rounded">
              WhatsApp
            </a>
            <a href="https://www.instagram.com/chatthaglobalfamily" target="_blank" rel="noreferrer" className="bg-purple-700 hover:bg-purple-900 px-4 py-2 sm:px-6 sm:py-3 rounded">
              Instagram
            </a>
            <a href="https://www.facebook.com/profile.php?id=61578603322966" target="_blank" rel="noreferrer" className="bg-blue-600 hover:bg-blue-800 px-4 py-2 sm:px-6 sm:py-3 rounded">
              Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Members */}
      <section id="members" className="py-20 px-4 bg-black">
        <h2 className="text-3xl text-center font-bold text-[#e5ca61] mb-10">Leadership Team</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {members.map((m, i) => (
            <div key={i} className="bg-gray-900 rounded-lg p-4 text-center">
              <img src={m.image} alt={m.name} className="w-20 h-20 rounded-full mx-auto object-cover mb-4" />
              <h3 className="font-semibold text-lg">{m.name}</h3>
              <p className="text-sm text-gray-400">{m.title}</p>
              <p className="text-xs mt-2 text-gray-500 font-bold">Chattha Global Family</p>
            </div>
          ))}
        </div>
      </section>

      {/* Objectives */}
      <section id="objectives" className="py-20 px-4 bg-black">
        <h2 className="text-3xl text-center font-bold text-[#e5ca61] mb-10">Objectives</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {objectives.map((o, i) => (
            <div key={i} className="bg-gray-900 p-6 rounded-xl text-center hover:text-[#e5ca61]">
              <o.icon className="w-10 h-10 mb-3 text-white mx-auto" />
              <h3 className="text-lg font-bold">{o.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{o.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Determination */}
      <section id="determination" className="bg-gray-900 py-16 px-4 rounded-xl max-w-6xl mx-auto my-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#e5ca61] mb-6">{determination.heading}</h2>
        <p className="whitespace-pre-line text-gray-300 leading-relaxed">{determination.paragraph}</p>
      </section>

      {/* Footer */}
      <section id="contact" className="bg-gray-900 text-center py-10 border-t border-gray-800">
        <h2 className="text-2xl font-bold text-[#e5ca61] mb-4">Ready to Join Us?</h2>
        <p className="mb-6">Be part of our mission to unite and uplift the Chattha Family.</p>
        <a href="#" className="bg-[#e5ca61] text-black px-6 py-2 rounded hover:opacity-90 transition">Join Now</a>
        <p className="text-sm text-gray-500 mt-6">&copy; {new Date().getFullYear()} Chattha Global Family</p>
      </section>
    </div>
  );
}
