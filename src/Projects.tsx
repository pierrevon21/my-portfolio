import { motion } from "framer-motion";

export function Project() {
  // ... rest of your existing states and variants remain the same ...
  const projects = [
    {
      title: "Invetory Record Accuracy",
      description:
        "A robust full-stack application designed to streamline inventory management and ensure accurate record-keeping. It enables businesses to track stock levels, verify transactions, and maintain a real-time view of inventory movements. Built with React and Node.js for scalable and efficient performance.",
      tech: ["Vue 3", "Nuxt JS", "PostgreSQL", "ASP.NET"],
    },
    {
      title: "Gate Keeper",
      description:
        "The app feature provides users with a comprehensive overview of all trucks within a warehouse, detailing their current activities in real-time. Users can efficiently monitor truck movements, statuses, and tasks, enhancing logistics management and optimizing workflow within the warehouse environment.",
      tech: ["Ionic", "Vue 3", "Nuxt JS", "PostgreSQL", "ASP.NET"],
    },
    {
      title: "Dorm Booking",
      description:
        "A dynamic platform for managing dormitory reservations and occupancy in real time.",
      tech: ["React", "D3.js", "Firebase"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.4,
      },
    },
  };
  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl font-bold text-white mb-12 text-center tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 transition-shadow duration-300"
              variants={projectVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="h-48 bg-gray-700 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={`/api/placeholder/400/300`}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(37, 99, 235, 0.3)",
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
