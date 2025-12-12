"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

import { FaReact, FaJsSquare, FaNodeJs, FaPython } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiStreamlit,
} from "react-icons/si";
import Link from "next/link";

export default function ProjectSlider() {
  const projects = [
    {
      id: "01",
      title: "Moviebolt",
      desc: "A comprehensive movie information platform featuring trending movies, TV shows, and celebrity profiles. Built with modern web technologies and real-time API integration for up-to-date content discovery.",
      tech: ["React.js", "Tailwind css", "Javascript"],
      img: "/Project-2.png",
      liveLink: "https://moviesbolt.vercel.app/",
      githubLink: "https://github.com/AUSAF-AHMAD-ANSARI/Moviesbolt",
    },
    {
      id: "02",
      title: "AI YouTube Summarizer",
      desc: "Intelligent video analysis platform using RAG architecture with LangChain. Features context-aware Q&A from YouTube transcripts, FAISS vector database, and Google Gemini 2.0 Flash LLM integration.",
      tech: ["Python", "Streamlit", "LangChain"],
      img: "/Project-1.png",
      liveLink: "#",
      githubLink: "https://github.com/AUSAF-AHMAD-ANSARI/YOUTUBE_RAG",
    },
    {
      id: "03",
      title: "ChitNotez",
      desc: "Multifunctional web app combining chat functionality and note-taking capabilities. Features CRUD operations with MongoDB Atlas, real-time communication, and centralized productivity hub.",
      tech: ["Node.js", "Express.js", "MongoDB"],
      img: "/Project-4.png",
      liveLink: "#",
      githubLink: "https://github.com/AUSAF-AHMAD-ANSARI/ChitNotez",
    },
    {
      id: "04",
      title: "THE-X-SOCIAL",
      desc: "Full-stack social platform with React frontend and Node.js backend. Features JWT authentication, role-based access control, REST API for posts/comments, and real-time data synchronization.",
      tech: ["React.js", "Node.js", "MongoDB"],
      img: "/Project-3.png",
      liveLink: "#",
      githubLink: "https://github.com/AUSAF-AHMAD-ANSARI/THE-X-SOCIAL",
    },
  ];
  return (
    <div className="px-[8%] lg:px-[16%] py-15 text-white">
      <Swiper
        modules={[Navigation]}
        loop={true}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        spaceBetween={40}
        slidesPerView={1}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="work-content">
                <h2 className="text-8xl font-bold stroke-text">{project.id}</h2>
                <h2 className="text-5xl font-bold font-unbounded mt-4">
                  {project.title}
                </h2>
                <p className="text-gray-400 mt-3 text-lg leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex gap-3 mt-5">
                  {project.tech.map((tech, index) => {
                    let IconComponent;
                    switch (tech.toLowerCase()) {
                      case "react js":
                      case "react.js":
                        IconComponent = FaReact;
                        break;
                      case "tailwind css":
                        IconComponent = SiTailwindcss;
                        break;
                      case "javascript":
                        IconComponent = FaJsSquare;
                        break;
                      case "node.js":
                        IconComponent = FaNodeJs;
                        break;
                      case "express.js":
                        IconComponent = SiExpress;
                        break;
                      case "mongodb":
                        IconComponent = SiMongodb;
                        break;
                      case "python":
                        IconComponent = FaPython;
                        break;
                      case "streamlit":
                        IconComponent = SiStreamlit;
                        break;
                      case "langchain":
                        IconComponent = FaPython;
                        break;
                      case "next.js":
                        IconComponent = SiNextdotjs;
                        break;
                      default:
                        IconComponent = null;
                    }
                    return IconComponent ? (
                      <div
                        key={index}
                        className="work-icons text-4xl text-(--primary-color) cursor-pointer hover:text-white transition-all duration-300"
                        title={tech}
                      >
                        <IconComponent />
                      </div>
                    ) : null;
                  })}
                </div>
                <div className="work-share flex gap-4 mt-6 border-t border-gray-500 pt-5">
                  <Link
                    href={project.liveLink}
                    target={project.liveLink !== "#" ? "_blank" : undefined}
                    rel={
                      project.liveLink !== "#"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="w-15 h-15 flex items-center justify-center rounded-full bg-gray-500/5 hover:text-black hover:bg-white transition-all duration-500"
                  >
                    <i className="bi bi-arrow-up-right text-2xl"></i>
                  </Link>
                  <Link
                    href={project.githubLink}
                    target={project.githubLink !== "#" ? "_blank" : undefined}
                    rel={
                      project.githubLink !== "#"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="w-15 h-15 flex items-center justify-center rounded-full bg-gray-500/5 hover:text-black hover:bg-white transition-all duration-500"
                  >
                    <i className="bi bi-github text-2xl"></i>
                  </Link>
                </div>
              </div>
              <div className="relative work-image">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={650}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="flex gap-3 justify-end mb-5 pb-12">
          <button className="custom-prev w-12  h-12 flex items-center justify-center bg-(--primary-color) text-white rounded shadow hover:bg-white hover:text-black transition-all duration-500">
            <i className="bi bi-arrow-left text-2xl"></i>
          </button>
          <button className="custom-next w-12 h-12 flex items-center justify-center bg-(--primary-color) text-white rounded shadow hover:bg-white hover:text-black transition-all duration-500">
            <i className="bi bi-arrow-right text-2xl"></i>
          </button>
        </div>
      </Swiper>
    </div>
  );
}
