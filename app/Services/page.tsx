"use client";

const ServicesData = [
  {
    id: "01",
    title: "Full-Stack Development",
    description:
      "Building scalable web applications with React, Node.js, Express.js, and MongoDB. Expertise in REST APIs and cloud deployment.",
  },
  {
    id: "02",
    title: "AI/ML Integration",
    description:
      "Implementing RAG architectures, vector databases, and LangChain frameworks for intelligent applications with LLM integration.",
  },
  {
    id: "03",
    title: "Competitive Programming",
    description:
      "Problem-solving expert with 600+ solved problems. Top rankings in national coding competitions and hackathons.",
  },
  {
    id: "04",
    title: "API Development",
    description:
      "Creating robust RESTful APIs with authentication, role-based access control, and real-time data synchronization.",
  },
];

export default function Services() {
  return (
    <section className="px-[16%] lg:px-[8%] py-10 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {ServicesData.map((service, index) => (
          <div
            key={index}
            className="service-card group py-2 px-2 border border-gray-800 rounded-xl transition-all duration-500 cursor-pointer hover:border-(--primary-color)"
          >
            <div className="flex justify-between items-center mb-4 ">
              <h3 className="text-4xl stroke-text font-bold text-ray-400 transition-colors duration-300 group-hover:text-(--primary-color)">
                {service.id}
              </h3>

              <div className="w-15 h- flex items-center justify-center rounded-full bg-white text-black transition group-hover:bg-(--primary-color) group-hover:text-white duration-300 ">
                <i className="bi bi-arrow-up-right text-3xl"></i>
              </div>
            </div>
            <h2 className="text-4xl font-normal font-unbounded mb-5 transition-colors duration-300 group-hover:text-(--primary-color)">
              {service.title}
            </h2>

            <p className="text-gray-400 text-lg">{service.description}</p>

            <div className="border-t border-gray-700 group-hover:border-(--primary-color) mt-5 duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
