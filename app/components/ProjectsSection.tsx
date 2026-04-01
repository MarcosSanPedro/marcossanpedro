"use client";

import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 text-center"
        >
          Full Stack Projects
        </motion.h2>

        <div className="space-y-16">
          {/* E-commerce Platform */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
          >
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold">
                        Truck Fleet Managment Software
                      </h3>
                      <span className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-400" />
                        </span>
                        In Development
                      </span>
                    </div>
                    <p className="text-gray-400">
                      Truck Fleet is a full-stack logistics management
                      application designed to help companies track trucks,
                      manage drivers, and schedule jobs efficiently. The project
                      is currently in beta and actively under development to add
                      more features and improvements.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-3">
                        Frontend Architecture
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>
                          • React: Component-based UI library for building
                          interactive interfaces.
                        </li>
                        <li>
                          • TypeScript: Adds static typing to improve code
                          reliability and scalability.
                        </li>
                        <li>
                          • TailwindCSS: Utility-first CSS framework for modern,
                          responsive design.
                        </li>
                        <li>
                          • Tanstack Router: For client-side routing between
                          views.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-3">
                        Backend Systems
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• SQLAlchemy ORM to map models.</li>
                        <li>
                          • FastAPI dependencies to enforce authorization.
                        </li>
                        <li>
                          • Pydantic models for request/response validation.
                        </li>
                        <li>• SQLite embedded relational database engine</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-teal-400">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Implemented RESTful APIs</li>
                      <li>• Developed a Full-Stack Platform</li>
                      <li>• Project Lifecycle Management</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-black/30 rounded-xl p-6 my-auto">
                  <motion.a
                    href="https://truckfleet.dev"
                    target="_blank"
                    className="block transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl"
                  >
                    <img
                      src="/truckfleetdashboard.png"
                      alt="Truck Fleet image"
                    />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Real-time Analytics Platform */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
          >
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      PDM Immigrations Services
                    </h3>
                    <p className="text-gray-400">
                      PDM Immigration Services is a professional website created
                      to help an immigration services business reach and assist
                      clients with accessible information about immigration
                      procedures, tax preparation, and notary services.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-400 list-disc list-inside">
                      <li>
                        <span className="font-semibold text-white">
                          Responsive Website Design:
                        </span>{" "}
                        Created a clean, modern layout optimized for mobile,
                        tablet, and desktop browsing.
                      </li>
                      <li>
                        <span className="font-semibold text-white">
                          Service Listings:
                        </span>{" "}
                        Detailed descriptions of each service (e.g., Family
                        Immigration, Tax Services, Notary Public), including
                        dedicated call-to-action buttons.
                      </li>
                      <li>
                        <span className="font-semibold text-white">
                          Lead Generation and Contact Integration:
                        </span>{" "}
                        Implemented WhatsApp quick messages and email forms to
                        connect prospects directly with the business.
                      </li>
                      <li>
                        <span className="font-semibold text-white">
                          Client Testimonials Section:
                        </span>{" "}
                        Showcased real customer reviews to enhance credibility.
                      </li>
                      <li>
                        <span className="font-semibold text-white">
                          Resource Center and Blog:
                        </span>{" "}
                        Added a section for news, guides, and updates related to
                        U.S. immigration and tax regulations.
                      </li>
                      <li>
                        <span className="font-semibold text-white">
                          SEO-Friendly Structure:
                        </span>{" "}
                        Organized content and metadata to improve visibility in
                        search engines.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-black/30 rounded-xl p-6 my-auto">
                  <motion.a
                    href="https://pdmimmigrationsvc.com"
                    target="_blank"
                    className="block transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl"
                  >
                    <img className="w-fit" src="/pdm-img.png" alt="PDM img" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Moxel Labs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
          >
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Moxel Labs</h3>
                    <p className="text-gray-400">
                      Moxel Labs is a software development company focused on
                      designing and building internal tools and platforms for
                      managing, visualizing, and analyzing complex systems and
                      data. I contributed to the UI development and am currently
                      working with the team to build the core software platform.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-3">
                        Frontend Development
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>
                          • Modern UI design with focus on data visualization
                          and clarity.
                        </li>
                        <li>
                          • Clean architecture patterns for maintainable code.
                        </li>
                        <li>
                          • Responsive layouts optimized for complex data
                          displays.
                        </li>
                        <li>
                          • Intuitive navigation for exploring system data.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-3">
                        Platform Focus
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Clear system structure visualization.</li>
                        <li>• Reliable data flow management.</li>
                        <li>• Backend service integrations.</li>
                        <li>• High-performance data analysis tools.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-teal-400">
                      My Contributions
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Designed and implemented the user interface</li>
                      <li>• Ongoing development of core platform features</li>
                      <li>
                        • Building tools for system management and data
                        exploration
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-black/30 rounded-xl p-6 my-auto">
                  <motion.a
                    href="https://moxel.ai"
                    target="_blank"
                    className="block transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl"
                  >
                    <img src="/moxel.png" alt="Moxel Labs platform" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Huddle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
          >
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold">Huddle</h3>
                      <span className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-400" />
                        </span>
                        In Development
                      </span>
                    </div>
                    <p className="text-gray-400">
                      Huddle is a cross-platform mobile app for couples to build
                      daily connection through guided prompts, shared planning
                      tools, and gamified engagement. It pairs two users into a
                      private couple space where everything — from daily
                      conversation rituals to collaborative lists, calendar, and
                      wishlist — happens together.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-3">
                        Mobile App
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>
                          • React Native & Expo for cross-platform iOS and
                          Android development.
                        </li>
                        <li>
                          • TypeScript for type-safe, scalable codebase.
                        </li>
                        <li>
                          • Expo Router for file-based navigation.
                        </li>
                        <li>
                          • Real-time sync for chat, shared canvas, and
                          collaborative lists.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-3">
                        Backend & Services
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Server functions / API layer for data management.</li>
                        <li>• Push notifications for daily reminders and partner activity.</li>
                        <li>• Cloud storage for images, drawings, and gallery.</li>
                        <li>• Email and social authentication.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-teal-400">
                      Key Features
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>
                        • Daily conversation rituals with simultaneous answer
                        reveal between partners.
                      </li>
                      <li>
                        • Weekly photo quests and a shared couple gallery for
                        memory browsing.
                      </li>
                      <li>
                        • Real-time collaborative canvas (Duo Doodle), private
                        chat with sticker support.
                      </li>
                      <li>
                        • Shared lists, couple calendar, and wishlist with link
                        previews.
                      </li>
                      <li>
                        • Streak-driven retention system with milestone
                        celebrations and customizable penguin mascot.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-black/30 rounded-xl p-6 my-auto">
                  <motion.a
                    href="https://gethuddled.com"
                    target="_blank"
                    className="block transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl"
                  >
                    <img src="/huddle.png" alt="Huddle app" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
