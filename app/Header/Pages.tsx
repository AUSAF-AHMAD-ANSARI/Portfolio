"use client";

import Link from "next/link";
import Hero from "@/public/Profile_Pic.png";
import Image from "next/image";
import { CountUp } from "countup.js";
import { useEffect, useRef } from "react";

export default function Header() {
  const statsData = [
    { value: 4, label: "Years of \nExperience" },
    { value: 5, label: "Projects \nCompleted" },
    { value: 10, label: "Technologies \nMastered" },
    { value: 600, label: "Problems \nSolved" },
  ];

  const countRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    countRefs.current.forEach((el, index) => {
      if (el) {
        const countUp = new CountUp(el, statsData[index].value, {
          duration: 3,
          separator: ",",
        });
        if (!countUp.error) {
          countUp.start();
        } else {
          console.error(countUp.error);
        }
      }
    });
  }, []);

  return (
    <header className="min-h-screen text-white py-3 relative">
      {/* BG Elements */}

      <div
        className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full blur-3xl opacity-30 -z-10"
        style={{
          background:
            "linear-gradient(to right, var(--primary-color), var(--hero-image-to))",
        }}
      ></div>

      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-3xl opacity-20 -z-10"
        style={{
          background:
            "linear-gradient(to right, var(--hero-image-from), var(--primary-color))",
        }}
      ></div>

      <div
        className="absolute bottom-0 left-[20%] w-[300px] h-[300px] rounded-full blur-3xl opacity-20 -z-10"
        style={{
          background:
            "linear-gradient(to right, var(--primary-color), var(--hero-image-from))",
        }}
      ></div>

      <div className="flex pt-9 flex-col lg:flex-row items-center justify-between px-[8%] lg:px-[16%] gap-8 lg:gap-11">
        <div className="lg:w-1/2 text-start md:text-left">
          <p className="text-lg mb-2 text-gray-400">Web Developer</p>

          <h1 className="text-[2rem] text-start lg:text-[2rem] font-unbounded font-normal mb-2">
            Hello I'm
            <span
              className="block"
              style={{
                color: "var(--primary-color)",
              }}
            >
              Ausaf Ahmad Ansari
            </span>
          </h1>

          <p className="text-gray-400 text-base lg:text-lg font-normal font-sora my-7">
            A passionate Full-Stack Developer and Computer Science student at
            IIIT Kota with expertise in React, Node.js, and AI/ML technologies.
            Skilled in building scalable web applications, RAG architectures,
            and API integrations. Competitive programmer with 600+ problems
            solved and top rankings in national coding competitions.
          </p>
          <div className="flex flex-wrap gap-7 items-center">
            <Link
              href="https://drive.google.com/file/d/14kB3T29dbsrEdI-UGJnUTRWey5hZLtlt/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border-(--primary-color) border px-6 py-3 text-sm text-white font-semibold cursor-pointer rounded-full transition-all duration-500 hover:bg-(--primary-color) shadow-md hover:shadow-[0px_2px_5px_var(--primary-color)] flex items-center gap-2"
            >
              <i className="bi bi-download"></i>
              <span>Download CV</span>
            </Link>
            <div className="flex hero-social gap-4 text-xl">
              <Link
                href="https://github.com/AUSAF-AHMAD-ANSARI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github cursor-pointer hover:text-(--primary-color) transition-colors"></i>
              </Link>
              <Link
                href="https://www.linkedin.com/in/ausafahmadansari/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin cursor-pointer hover:text-(--primary-color) transition-colors"></i>
              </Link>
              <i className="bi bi-youtube cursor-pointer hover:text-(--primary-color) transition-colors"></i>
              <i className="bi bi-twitter cursor-pointer hover:text-(--primary-color) transition-colors"></i>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full mt-9 lg:mt-0 flex justify-center items-center">
          <div className="relative w-[270px] h-[270px] sm:w-[320px] sm:h-320px lg:w-[370px] lg:h-[370px]">
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-(--hero-image-from) to-(--primary-color) opacity-50 blur-xl"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src={Hero}
                alt="portfolio picture"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="stats px-[8%] lg:px-[16%] mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {statsData.map((stat, index) => (
          <div key={index} className="flex ap- items-center">
            <h1
              ref={(el) => {
                countRefs.current[index] = el;
              }}
              className="text-2xl font-unbounded font-bold"
            >
              0
            </h1>
            <p className="text-lg ps-4 text-gray-400 font-semibold whitespace-pre-line">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </header>
  );
}
