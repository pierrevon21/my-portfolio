import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { About } from "./About";
import { Project } from "./Projects";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from "react-icons/fa";

export default function Portfolio() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText =
    "Welcome to my portfolio! Explore my work, creativity, and passion.";

  useEffect(() => {
    setText("");
    let currentIndex = 0;
    let isErasing = false;

    const interval = setInterval(() => {
      if (isErasing) {
        if (currentIndex > 0) {
          setText(fullText.slice(0, currentIndex - 1));
          currentIndex--;
        } else {
          isErasing = false;
          setIsTyping(true);
        }
      } else {
        if (currentIndex < fullText.length) {
          setText(fullText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          setTimeout(() => {
            isErasing = true;
            setIsTyping(false);
          }, 5000);
        }
      }
    }, 50);

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className={`bg-gray-900`}>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
        {/* Background with overlay */}
        <div
          className="absolute inset-0 bg-black/50"
          style={{
            backgroundImage: "url('/my-portfolio/images/background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(2px)",
          }}
        />

        {/* Floating particles effect */}
        {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            className="w-24 h-24 bg-blue-500/20 rounded-full absolute top-16 left-10"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
          <motion.div
            className="w-32 h-32 bg-red-500/20 rounded-full absolute bottom-16 right-16"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
        </div> */}
        {/* <FloatingParticles /> */}

        <motion.div
          className="text-center z-10 p-8 rounded-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated Heading */}
          <h1 className="text-[5em] font-bold text-white mb-2 tracking-tight drop-shadow-md">
            Hello, I&apos;m Von.
          </h1>
          <motion.h2
            className="text-[2em] text-gray-300 font-light"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            I&apos;m a full stack web developer.
          </motion.h2>

          {/* Typing Effect Card */}
          <motion.div
            className="mt-8 max-w-lg mx-auto p-4 shadow-lg rounded-2xl bg-gray-800/50 backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.03 }}
          >
            <p className="text-gray-200 text-lg leading-relaxed">
              <span dangerouslySetInnerHTML={{ __html: text }} />
              <span
                className={`animate-pulse ${
                  isTyping ? "opacity-100" : "opacity-0"
                }`}
              >
                |
              </span>
            </p>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            className="flex justify-center space-x-6 mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white text-3xl hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white text-3xl hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-white text-3xl hover:text-blue-400 transition-colors" />
            </a>
          </motion.div>

          {/* Skill Badges */}
          <motion.div
            className="mt-6 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {["React", "Vue", "Nuxt", "ionic", "Node.js", "PostgreSQL"].map(
              (tech) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-blue-600/80 text-white rounded-full text-sm font-medium shadow-md"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {tech}
                </motion.span>
              )
            )}
          </motion.div>

          {/* Call-to-Action Button */}
          {/* <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <a
              href="#projects"
              className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-all duration-300 font-medium shadow-md hover:shadow-blue-500/50"
              whilehover={{ scale: 1.05 }}
              whiletap={{ scale: 0.95 }}
            >
              View My Projects
            </a>
          </motion.div> */}
        </motion.div>

        {/* Animated Down Arrow */}
        <motion.div
          className="absolute bottom-8 text-white text-3xl"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <FaArrowDown />
        </motion.div>
      </section>
      <About />

      {/* Projects Section */}
      <Project />

      <section
        id="contact"
        className="py-20 px-6 bg-black/50 text-white text-center relative"
      >
        <div className="max-w-2xl mx-auto p-10 rounded-3xl shadow-xl bg-gray-800/80 backdrop-blur-md  relative overflow-hidden">
          {/* Neon Glow Effect */}
          <div className="absolute inset-0  opacity-20 blur-2xl rounded-3xl"></div>

          <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Let's Connect
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Have an idea or just want to say hello? Send me a message!
          </p>

          <form className="space-y-6 relative">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all hover:border-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all hover:border-blue-400"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-4 rounded-lg bg-gray-900 text-white h-36 resize-none border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all hover:border-blue-400"
            ></textarea>

            {/* Animated Send Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-6 py-4 rounded-full font-semibold transition-all shadow-md hover:shadow-lg hover:scale-105 transform duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
