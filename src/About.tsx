import React from "react";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-4 bg-gray-800/50">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-3xl text-white mb-12 text-center tracking-tight"
          style={{ fontWeight: 700 }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-red-500 to-blue-600 p-1">
              <img
                src="/images/me-transpa.png"
                alt="Profile"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <motion.div
              className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-2xl shadow-lg"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ fontWeight: 600 }}
            >
              Von
            </motion.div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3
              className="text-2xl text-white mb-4"
              style={{ fontWeight: 600 }}
            >
              Full Stack Developer
            </h3>

            <p className="text-gray-300" style={{ fontWeight: 400 }}>
              I'm a passionate full-stack developer with a keen eye for creating
              beautiful, functional, and user-friendly websites. With expertise
              in both front-end and back-end development, I bring ideas to life
              through clean code and intuitive design.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h4 className="text-blue-400" style={{ fontWeight: 600 }}>
                  Frontend
                </h4>
                <p className="text-gray-300" style={{ fontWeight: 400 }}>
                  React, Vue, Nuxt.js, TailwindCSS
                </p>
              </motion.div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <h4 className="text-blue-400" style={{ fontWeight: 600 }}>
                  Backend
                </h4>
                <p className="text-gray-300" style={{ fontWeight: 400 }}>
                  Node.js, PostgreSQL, MS SQL, MySQL, Rest-APIs
                </p>
              </motion.div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h4 className="text-blue-400" style={{ fontWeight: 600 }}>
                  Design
                </h4>
                <p className="text-gray-300" style={{ fontWeight: 400 }}>
                  Figma, Adobe XD
                </p>
              </motion.div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <h4 className="text-blue-400" style={{ fontWeight: 600 }}>
                  Other
                </h4>
                <p className="text-gray-300" style={{ fontWeight: 400 }}>
                  Git, AWS
                </p>
              </motion.div>
            </div>

            <motion.div
              className="flex gap-4 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <a
                href="#contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
                style={{ fontWeight: 600 }}
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="border border-blue-600 text-blue-400 px-6 py-3 rounded-full hover:bg-blue-600/10 transition-colors duration-300"
                style={{ fontWeight: 600 }}
              >
                View Projects
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
