// src/App.jsx
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Members from "./components/Member";
import Objectives from "./components/Objective";
import Determination from "./components/Determination";
import Footer from "./components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import {
  Users, Heart, GraduationCap, ShieldCheck, BookOpen,
  Megaphone, Stethoscope, Briefcase, HelpingHand, ShieldAlert
} from "lucide-react";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const members = [
    { name: "Ch Akmal Saif", title: "Provincial Chairman", image: "/image/Kamal.jpg" },
    { name: "Ch Muzammil Muqarrab Chattha", title: "Provincial President", image: "/image/muzzmil.jpg" },
    { name: "Ch Mumtaz Ahmad Chattha", title: "Provincial President", image: "/image/mumtaz.jpg" },
    { name: "Ch Ghulam Abbas Chattha", title: "Senior Vice President", image: "/image/ghulam.jpg" },
  ];

  const objectives = [
    { title: "Unity for Defense", description: "All Chattha members must unite and play a proactive role in defending Pakistan and our rights.", icon: ShieldAlert },
    { title: "Youth for Progress", description: "Encourage Chattha youth to contribute to the country’s development through cooperation and leadership.", icon: Users },
    { title: "Protect Islamic Values", description: "Uphold Islamic values and culture while strengthening Chattha family connections across Pakistan.", icon: BookOpen },
    { title: "Promote Awareness", description: "Every Chattha member must spread unity and awareness within the community.", icon: Megaphone },
    { title: "Youth Guidance", description: "Promote education and skills among youth and encourage learning from authentic scholars.", icon: GraduationCap },
    { title: "Support the Poor", description: "Raise voice for the rights of the underprivileged and contribute to religious and economic welfare.", icon: HelpingHand },
    { title: "Justice and Integrity", description: "Stand with the oppressed, strive for justice, and reject lies and slander.", icon: ShieldCheck },
    { title: "Free Medical Services", description: "Work for affordable healthcare by creating free medical dispensaries and clinics.", icon: Stethoscope },
    { title: "Tackle Unemployment", description: "Promote entrepreneurship and reduce unemployment within the Chattha community.", icon: Briefcase },
    { title: "Support Marriages", description: "Assist the poor in marriage arrangements and cover necessary wedding expenses.", icon: Heart },
    { title: "Protect Our Youth", description: "Take strong steps to save our children from bad company and immoral behaviors.", icon: ShieldAlert },
  ];

  const determination = {
    heading: "Determination",
    paragraph:
      "Our youth will become shining examples of truth and honor. They will achieve excellence in religious and worldly education and become a source of pride for the Chattha community.\n\nThrough our collective efforts, we will open the doors of progress and prosperity. The day is not far when the Chattha name will shine bright in every province of Pakistan and across the world.",
  };

  return (
    <div className="min-h-screen bg-black text-white scroll-smooth overflow-x-hidden">
      <Navbar />
      <Main />
      <Members members={members} />
      <Objectives objectives={objectives} />
      <Determination heading={determination.heading} paragraph={determination.paragraph} />
      <Footer />
    </div>
  );
}
