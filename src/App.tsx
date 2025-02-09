import { Card, CardContent } from "../src/Card";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { About } from "./About";
import { Project } from "./Projects";

export default function Portfolio() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Hello there! Welcome to my Portfolio.";

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
          }, 1000);
        }
      }
    }, 50);

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div
      className={`bg-gray-900`}
      style={{
        fontFamily: '"Open Sans", sans-serif',
        fontOpticalSizing: "auto",
        fontStyle: "normal",
        fontVariationSettings: '"wdth" 100',
      }}
    >
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center p-4 relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/api/placeholder/1600/900')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5,
          }}
        />
        <motion.div
          className="text-center z-10 p-8 rounded-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[5em] font-bold text-white mb-2 tracking-tight">
            Hello, I&apos;m Von.
          </h1>
          <h2 className="text-[2em] text-gray-300 font-light">
            I&apos;m a full stack web developer.
          </h2>

          <Card className="mt-8 max-w-lg mx-auto p-4 shadow-md rounded-2xl bg-gray-800/50 backdrop-blur">
            <CardContent>
              <p className="text-gray-200 text-lg">
                <span>{text}</span>
                <span
                  className={`animate-pulse ${
                    isTyping ? "opacity-100" : "opacity-0"
                  }`}
                >
                  |
                </span>
              </p>
            </CardContent>
          </Card>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a
              href="#projects"
              className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-colors duration-300 font-medium"
            >
              View My Projects
            </a>
          </motion.div>
        </motion.div>
      </section>
      <About />

      {/* Projects Section */}
      <Project />

      <section
        id="contact"
        className="py-20 bg-gray-800 text-white text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg mb-6">
          Feel free to reach out if you have any questions or opportunities!
        </p>
        <form className="max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-medium transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
