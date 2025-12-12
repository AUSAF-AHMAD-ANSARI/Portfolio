"use client";

import { useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPython,
  SiCplusplus,
} from "react-icons/si";
import { FaJs, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";

export default function Resume() {
  const [activeTab, setactiveTab] = useState("Experience");
  const tabs = ["Experience", "Education", "Skills", "About me"];

  const experiences = [
    {
      date: "Dec 2021 - July 2025",
      role: "Computer Science Student",
      company: "IIIT Kota",
    },
    {
      date: "2024",
      role: "Full-Stack Developer",
      company: "Moviebolt Platform",
    },
    {
      date: "2024",
      role: "AI/ML Developer",
      company: "YouTube Summarizer Project",
    },
    {
      date: "2023",
      role: "Backend Developer",
      company: "ChitNotez & THE-X-SOCIAL",
    },
    {
      date: "2023",
      role: "Competitive Programmer",
      company: "Global Rank 24 - CodeChef",
    },
    {
      date: "2023",
      role: "Hackathon Finalist",
      company: "Meesho DICE Challenge",
    },
  ];

  const educations = [
    {
      year: "2021 - 2025",
      degree: "B.Tech in Computer Science",
      institution: "IIIT Kota, India",
    },
    {
      year: "2019 - 2021",
      degree: "Class 12 (PCM) - 91.6%",
      institution: "Little Flower House, Varanasi",
    },
    {
      year: "2019",
      degree: "Class 10 - 91.3%",
      institution: "Little Flower House, Varanasi",
    },
  ];

  const skills = [
    { name: "C++", icon: <TbBrandCpp /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Python", icon: <SiPython /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "Java", icon: <FaJava /> },
  ];

  return (
    <section className="px-[16%] lg:px-[8%] py-10 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-4xl font-unbounded font-bold mb-4">
            Why Hire Me?
          </h2>
          <p className="text-ray-400 mt-4 mb-10">
            A dedicated Computer Science student at IIIT Kota with proven
            expertise in full-stack development, AI/ML integration, and
            competitive programming. Ready to bring innovation and technical
            excellence to your team.
          </p>
          <div className="flex flex-col gap-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setactiveTab(tab)}
                className={`px-4 py-4 text-left rounded-md font-semibold transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-(--primary-color) text-white"
                    : "text-gray-400 bg-gray-500/5 hover:bg-gray-500/20 hover:text-white"
                }`}
              >
                {" "}
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-2xl font-unbounded font-bold mb-2">
            {activeTab}
          </h2>
          <p className="text-gray-400 mb-5">
            Explore my journey through education, professional experiences,
            technical skills, and personal achievements in software development
            and competitive programming.
          </p>
          {activeTab === "Experience" && (
            <div className="max-h-96 overflow-y-auto pr-2 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-gray-500/5 hover:bg-gray-500/10 border border-gray-800 rounded-lg px-5 py-5 hover:border-(--primary-color) transition-all duration-500 cursor-pointer"
                  >
                    <h3 className="text-(--primary-color) font-normal font-unbounded  font-semiboldmy-2">
                      {exp.date}
                    </h3>
                    <h4 className="text-2xl font-normalfont-unbounded mb-1 ">
                      {exp.role}
                    </h4>
                    <p className="text-gray-400 flex items-center text-sm mt-2">
                      <span className="text-(--primary-color) text-2xl pe-2">
                        •
                      </span>
                      {exp.company}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === "Education" && (
            <div className="max-h-96 overflow-y-auto pr-2 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {educations.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-gray-500/5 hover:bg-gray-500/10 border border-gray-800 rounded-lg px-5 py-5 hover:border-(--primary-color) transition-all duration-500 cursor-pointer"
                  >
                    <h3 className="text-(--primary-color) font-normal font-unbounded  font-semiboldmy-2">
                      {edu.year}
                    </h3>
                    <h4 className="text-2xl font-normalfont-unbounded mb-1 ">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-400 flex items-center text-sm mt-2">
                      <span className="text-(--primary-color) text-2xl pe-2">
                        •
                      </span>
                      {edu.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === "Skills" && (
            <div className="max-h-96 overflow-y-auto pr-2 custom-scrollbar">
              <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-gray-200 mt-4 ">
                {skills.map((skill, index) => (
                  <li
                    key={index}
                    className="relative cursor-pointer bg-gray-500/5 rounded py-11 flex flex-col items-center group"
                  >
                    <i className="text-6xl group-hover:text-(--primary-color) transition-all duration-500">
                      {skill.icon}
                    </i>{" "}
                    <span className="relative bottom-10px my-2 scale-0 rounded bg-gray-800 px-2 py-1 font-semibold transition-all duration-300 group-hover:scale-100 group-hover:text-(--primary-color)">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeTab === "About me" && (
            <div className="text-gray-400 space-y-4">
              <p>
                Hi! I'm{" "}
                <span className="text-(--primary-color) font-semibold  ">
                  Ausaf Ahmad Ansari{" "}
                </span>
                a passionate Full-Stack Developer and Computer Science student
                at IIIT Kota. With expertise in modern web technologies and
                AI/ML integration, I build scalable applications that solve
                real-world problems. My competitive programming background with
                600+ problems solved gives me a strong foundation in algorithms
                and problem-solving.
              </p>
              <ul className="space-y-2">
                <li>
                  • <strong>Full-Stack Expertise:</strong> React, Node.js,
                  Express.js, MongoDB, and Next.js for end-to-end development.
                </li>
                <li>
                  • <strong>AI/ML Integration:</strong> RAG architectures,
                  LangChain, vector databases, and LLM implementation.
                </li>
                <li>
                  • <strong>Competitive Programmer:</strong> 600+ problems
                  solved, Global Rank 24 in CodeChef, Meesho DICE Finalist.
                </li>
                <li>
                  • Strong foundation in Data Structures, Algorithms, OOP, and
                  System Design.
                </li>
                <li>
                  • Excellent problem-solving skills with proven track record in
                  national competitions.
                </li>
                <li>
                  • Team player with leadership experience and strong
                  communication skills.
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
