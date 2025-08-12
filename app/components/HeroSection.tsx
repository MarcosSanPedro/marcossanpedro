"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  const [selectedStack, setSelectedStack] = useState<"frontend" | "backend" | "devops" | null>(null)


 


  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-teal-500/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col px-4 sm:px-6 lg:px-8">
        {/* Main Content Container */}
        <div className="flex-1 flex flex-col justify-center py-12 sm:py-16 lg:py-20">
          {/* Hero Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 leading-tight"
              >
                Marcos San Pedro Caballero
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl sm:text-2xl lg:text-4xl font-bold text-white"
              >
                Software Dev | Front-End Engineer
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-3 sm:space-y-4"
              >
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  I build modern, responsive web applications from concept to deployment, combining React, TypeScript,
                  and Python to deliver clean, scalable solutions.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                  Engineering and Computer Science, I bring a strong foundation in problem-solving and a commitment to
                  exceptional user experience and performance.
                </p>
              </motion.div>
            </div>

            {/* Tech Stack Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
            >
              {[
                { name: "TypeScript", color: "blue" },
                { name: "FastApi", color: "purple" },
                { name: "UI/UX Design", color: "teal" },
                { name: "Python", color: "blue" },
                { name: "TailwindCSS", color: "purple" },
                { name: "SQLalchemy", color: "teal" },
                { name: "React", color: "blue" },
              ].map((tech, index) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className={`px-3 sm:px-4 py-2 bg-${tech.color}-500/10 border border-${tech.color}-500/20 rounded-full text-${tech.color}-400 text-xs sm:text-sm font-medium hover:bg-${tech.color}-500/20 transition-all duration-300 cursor-default hover:text-purple-800`}
                >
                  {tech.name}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Interactive System Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="w-full max-w-6xl mx-auto"
          >
            <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-4 sm:p-6 lg:p-8 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {/* Frontend Layer */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`p-4 sm:p-6 rounded-xl transition-all duration-300 border-2 cursor-pointer ${
                    selectedStack === "frontend"
                      ? "bg-blue-500/20 border-blue-400/50 shadow-lg shadow-blue-500/20"
                      : "bg-gray-800/50 hover:bg-gray-800/80 border-gray-700/50 hover:border-gray-600/50"
                  }`}
                  onMouseEnter={() => setSelectedStack("frontend")}
                  onMouseLeave={() => setSelectedStack(null)}
                >
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-400 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    Frontend Development
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
                    {["Modern React Architectures", "Performance Optimization", "Responsive & Interactive UIs"].map(
                      (item, index) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                          {item}
                        </motion.li>
                      ),
                    )}
                  </ul>
                </motion.div>

                {/* Backend Layer */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`p-4 sm:p-6 rounded-xl transition-all duration-300 border-2 cursor-pointer ${
                    selectedStack === "backend"
                      ? "bg-purple-500/20 border-purple-400/50 shadow-lg shadow-purple-500/20"
                      : "bg-gray-800/50 hover:bg-gray-800/80 border-gray-700/50 hover:border-gray-600/50"
                  }`}
                  onMouseEnter={() => setSelectedStack("backend")}
                  onMouseLeave={() => setSelectedStack(null)}
                >
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-purple-400 flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                    Backend Development
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
                    {["API Design & Development", "Database Architecture", "Real-time Systems"].map((item, index) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* DevOps Layer */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`p-4 sm:p-6 rounded-xl transition-all duration-300 border-2 cursor-pointer ${
                    selectedStack === "devops"
                      ? "bg-teal-500/20 border-teal-400/50 shadow-lg shadow-teal-500/20"
                      : "bg-gray-800/50 hover:bg-gray-800/80 border-gray-700/50 hover:border-gray-600/50"
                  }`}
                  onMouseEnter={() => setSelectedStack("devops")}
                  onMouseLeave={() => setSelectedStack(null)}
                >
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-teal-400 flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                    Project Management
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
                    {["Full project lifecycles", "High-quality delivery", "Scalable Architecture"].map(
                      (item, index) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.9 + index * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-1.5 h-1.5 bg-teal-400 rounded-full flex-shrink-0" />
                          {item}
                        </motion.li>
                      ),
                    )}
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Button - Now properly spaced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center pb-8 sm:pb-12"
        >
          <a
            href="#projects"
            className="group flex flex-col items-center cursor-pointer p-4 rounded-full hover:bg-gray-800/30 transition-all duration-300"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="flex flex-col items-center"
            >
              <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
              <span className="text-xs sm:text-sm text-gray-400 mt-2 group-hover:text-white transition-colors font-medium">
                Scroll to Projects
              </span>
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
