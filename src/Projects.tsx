import { motion } from "framer-motion";
import { useState } from "react";

export function Project() {
  const [projects, setProjects] = useState([
    {
      title: "Inventory Record Accuracy",
      description:
        "A robust full-stack application designed to streamline inventory management and ensure accurate record-keeping.",
      tech: ["Vue 3", "Nuxt JS", "PostgreSQL", "ASP.NET"],
    },
    {
      title: "Gate Keeper",
      description:
        "The app provides users with a comprehensive overview of all trucks within a warehouse, detailing their current activities in real-time.",
      tech: ["Ionic", "Vue 3", "Nuxt JS", "PostgreSQL", "ASP.NET"],
    },
    {
      title: "Dorm Booking",
      description:
        "A dynamic platform for managing dormitory reservations and occupancy in real time.",
      tech: ["Vue 3", "Nuxt JS", "PostgreSQL", "ASP.NET"],
    },
  ]);

  const bringToTop = (index: number) => {
    setProjects((prev) => {
      const newOrder = [...prev];
      const [selected] = newOrder.splice(index, 1);
      newOrder.push(selected);
      return newOrder;
    });
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 px-4 bg-gray-900"
    >
      <div className="flex items-center w-full max-w-4xl flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="absolute w-80 h-96 bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col justify-between cursor-grab"
            drag
            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
            whileTap={{ scale: 1.1 }}
            initial={{ rotate: Math.random() * 10 - 5 }}
            onClick={() => bringToTop(index)}
            style={{ zIndex: index }}
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
