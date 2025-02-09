import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen py-20 px-4 bg-gray-900"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-50" />

      <motion.div
        className="relative max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-fit mx-auto text-center mb-14">
          <motion.h2
            className="text-4xl font-extrabold text-white bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-lg tracking-wider uppercase"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          {/* Animated Underline with Space */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden ">
              <img
                src="/my-portfolio/images/me-transpa.png"
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                style={{
                  clipPath: "polygon(0% 15%, 100% 0%, 100% 85%, 0% 100%)",
                }}
              />
            </div>
            {/* <motion.div
              className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-2xl shadow-lg"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ fontWeight: 600 }}
            >
              Pierre Von
            </motion.div> */}
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl text-white font-semibold">
              Full Stack Developer
            </h3>

            <p className="text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with a keen eye for creating
              beautiful, functional, and user-friendly websites. With expertise
              in both front-end and back-end development, I bring ideas to life
              through clean code and intuitive design.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                {
                  title: "Frontend",
                  skills: "React, Vue, Nuxt.js, TailwindCSS",
                },
                {
                  title: "Backend",
                  skills: "Node.js, PostgreSQL, MS SQL, MySQL, Rest-APIs",
                },
                { title: "Design", skills: "Figma, Adobe XD" },
                { title: "Other", skills: "Git, AWS" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <h4 className="text-blue-400 font-semibold">{item.title}</h4>
                  <p className="text-gray-300">{item.skills}</p>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              className="flex flex-wrap gap-4 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <a
                href="#contact"
                className="border border-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition-all duration-300 shadow-md"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md"
              >
                View Projects
              </a>

              {/* Social Icons */}
              <div className="flex gap-4 mt-2">
                {[
                  { href: "https://github.com/yourgithub", icon: "github" },
                  {
                    href: "https://linkedin.com/in/yourlinkedin",
                    icon: "linkedin",
                  },
                ].map(({ href, icon }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-all duration-300"
                  >
                    <i className={`fab fa-${icon} text-2xl`}></i>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
