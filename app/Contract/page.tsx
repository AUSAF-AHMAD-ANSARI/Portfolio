"use client";
import {
  BiPhone,
  BiEnvelope,
  BiMap,
  BiTime,
  BiMessageDetail,
  BiGlobe,
} from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Contact() {
  return (
    <div className="px-[8%] lg:px-[16%] py-6 text-white">
      <div className="grid lg:grid-cols-2 gap-5 w-full">
        <div className="bg-gray-500/2 p-6 rounded-xl shadow-lg">
          <h2 className="font-unbounded text-xl font-normal text-(--primary-color) mb-2">
            Let's work together!
          </h2>
          <p className="text-xs text-gray-400 my-3">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Whether you need a
            full-stack developer, AI/ML integration, or competitive programming
            expertise, feel free to reach out and let's build something amazing
            together!
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="First Name"
                className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-3 py-3 text-sm text-white focus:outline-none focus:border-(--primary-color) transition-all duration-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-3 py-3 text-sm text-white focus:outline-none focus:border-(--primary-color) transition-all duration-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-3 py-3 text-sm text-white focus:outline-none focus:border-(--primary-color) transition-all duration-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-3 py-3 text-sm text-white focus:outline-none focus:border-(--primary-color) transition-all duration-500"
              />
            </div>
            <select className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-3 py-3 text-sm text-white focus:outline-none focus:border-(--primary-color) transition-all duration-500 appearance-none">
              <option>Select a service</option>
              <option>Full-Stack Development</option>
              <option>AI/ML Integration</option>
              <option>API Development</option>
              <option>Competitive Programming</option>
            </select>
            <textarea
              rows={4}
              placeholder="Type your message here..."
              className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-3 py-3 text-sm text-white focus:outline-none focus:border-(--primary-color) transition-all duration-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-(--primary-color) text-black hover:bg-white rounded-lg px-3 py-3 text-sm focus:outline-none cursor-pointer transition-all duration-500 font-semibold"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="contract-col flex flex-col space-y-4 justify-center">
          <div className="flex items-center space-x-3 border-b border-gray-600 pb-4">
            <span className="bg-[#1a1b1f] p-3 rounded-lg border border-(--primary-color)">
              <BiPhone size={20} />
            </span>
            <div>
              <p className="text-xs text-gray-400">Phone</p>
              <p className="font-medium text-sm">+91 798-572-7940</p>
            </div>
          </div>

          <div className="contract-col flex items-center space-x-3 border-b border-gray-600 pb-4">
            <span className="bg-[#1a1b1f] p-3 rounded-lg border border-(--primary-color)">
              <BiEnvelope size={20} />
            </span>
            <div>
              <p className="text-xs text-gray-400">Email</p>
              <p className="font-medium text-sm">ausafahmad1976@gmail.com</p>
            </div>
          </div>

          <div className="contract-col flex items-center space-x-3 border-b border-gray-600 pb-4">
            <span className="bg-[#1a1b1f] p-3 rounded-lg border border-(--primary-color)">
              <BiMap size={20} />
            </span>
            <div>
              <p className="text-xs text-gray-400">Location</p>
              <p className="font-medium text-sm">
                Varanasi, Uttar Pradesh, India
              </p>
            </div>
          </div>

          <div className="contract-col flex items-center space-x-3 border-b border-gray-600 pb-4">
            <span className="bg-[#1a1b1f] p-3 rounded-lg border border-(--primary-color)">
              <BiTime size={20} />
            </span>
            <div>
              <p className="text-xs text-gray-400">Availability</p>
              <p className="font-medium text-sm">Open to opportunities</p>
              <p className="font-medium text-sm">Flexible working hours</p>
            </div>
          </div>

          <div className="contract-col flex items-center space-x-3 border-b border-gray-600 pb-4">
            <span className="bg-[#1a1b1f] p-3 rounded-lg border border-(--primary-color)">
              <BsGithub size={20} />
            </span>
            <div>
              <p className="text-xs text-gray-400">GitHub</p>
              <a
                href="https://github.com/AUSAF-AHMAD-ANSARI"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-sm hover:text-[--primary-color] transition-colors"
              >
                github.com/ausafahmadansari
              </a>
            </div>
          </div>

          <div className="contract-col flex items-center space-x-3 border-b border-gray-600 pb-4">
            <span className="bg-[#1a1b1f] p-3 rounded-lg border border-(--primary-color)">
              <BsLinkedin size={20} />
            </span>
            <div>
              <p className="text-xs text-gray-400">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/ausafahmadansari/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-sm hover:text-(--primary-color) transition-colors"
              >
                linkedin.com/in/ausaf-a-ansari
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
