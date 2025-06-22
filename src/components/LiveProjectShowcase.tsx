"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Palette, Code, Rocket, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Magnet from "@/components/ui/Magnet";

const phases = [
  {
    id: "discovery",
    icon: Compass,
    title: "Discovery & Strategy",
    description:
      "We dive deep into your business, goals, and target audience to build a rock-solid foundation. This phase is about understanding the 'why' behind your project.",
    details: [
      "Stakeholder Workshops & Interviews",
      "In-depth Market & Competitor Research",
      "Keyword Research & Content Strategy",
      "Technical & SEO Audits",
      "Crafting a Project Roadmap",
    ],
    color: "text-blue-300",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "design",
    icon: Palette,
    title: "Design & Prototyping",
    description:
      "We create intuitive, beautiful, and conversion-focused designs that reflect your brand and delight your users. Form and function in perfect harmony.",
    details: [
      "User-Flow Mapping & Wireframing",
      "Mobile-First UI/UX Design in Figma",
      "Interactive Prototyping & User Testing",
      "Design System & Style Guide Creation",
      "Accessibility & Inclusivity Checks",
    ],
    color: "text-purple-300",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: "development",
    icon: Code,
    title: "Development & Engineering",
    description:
      "Our developers bring designs to life with clean, scalable code and the best technologies for performance and future growth.",
    details: [
      "Next.js & React Development",
      "Custom AI Automation with n8n Engine",
      "Pixel-Perfect & Responsive Implementation",
      "Performance & Speed Optimization",
      "Version Control with Git",
    ],
    color: "text-green-300",
    gradient: "from-green-500/20 to-teal-500/20",
  },
  {
    id: "growth",
    icon: Rocket,
    title: "Launch & Growth",
    description:
      "We don't just launch and leave. We monitor, analyze, and continuously optimize to ensure your digital asset drives sustainable growth.",
    details: [
      "Secure Deployment & Hosting Setup",
      "Social Media & Email Campaign Integration",
      "Post-Launch SEO Monitoring & Reporting",
      "A/B Testing & Conversion Rate Optimization",
      "Ongoing Support & Maintenance Plans",
    ],
    color: "text-pink-300",
    gradient: "from-pink-500/20 to-orange-500/20",
  },
];

const LiveProjectShowcase = () => {
  const [activePhase, setActivePhase] = useState(phases[0].id);

  const handleStartProjectClick = () => {
    const event = new CustomEvent("openStickyCTA");
    window.dispatchEvent(event);
  };

  const ActiveIcon = phases.find((p) => p.id === activePhase)?.icon;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-blue-700/30 to-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-blue-700/30 to-purple-500/20 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-14 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-snug text-white drop-shadow-lg font-inter mb-4">
            Our Blueprint for{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Digital Success
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-manrope drop-shadow-md">
            A transparent, step-by-step look into how we bring your vision to
            life and deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="space-y-2">
                {phases.map((phase) => (
                  <button
                    key={phase.id}
                    onClick={() => setActivePhase(phase.id)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center gap-4 border ${
                      activePhase === phase.id
                        ? "bg-white/20 border-white/30 shadow-lg"
                        : "bg-white/5 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-full bg-white/10 ${
                        activePhase === phase.id ? phase.color : "text-white/70"
                      }`}
                    >
                      <phase.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3
                        className={`text-lg font-bold font-manrope ${
                          activePhase === phase.id
                            ? "text-white"
                            : "text-white/80"
                        }`}
                      >
                        {phase.title}
                      </h3>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {phases
                .filter((p) => p.id === activePhase)
                .map((phase) => (
                  <motion.div
                    key={phase.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`p-8 rounded-2xl border border-white/20 shadow-2xl bg-gradient-to-br ${phase.gradient}`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      {ActiveIcon && (
                        <ActiveIcon className={`w-10 h-10 ${phase.color}`} />
                      )}
                      <h3 className="text-3xl font-extrabold text-white font-inter drop-shadow-md">
                        {phase.title}
                      </h3>
                    </div>
                    <p className="text-white/80 text-lg mb-8 font-manrope leading-relaxed">
                      {phase.description}
                    </p>

                    <h4 className="text-xl font-bold text-white mb-4 font-inter">
                      Key Activities & Deliverables
                    </h4>
                    <ul className="space-y-3">
                      {phase.details.map((detail, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.1,
                          }}
                          className="flex items-start gap-3"
                        >
                          <Check
                            className={`w-5 h-5 mt-1 flex-shrink-0 ${phase.color}`}
                          />
                          <span className="text-white/90 font-manrope">
                            {detail}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-16 relative z-10"
        >
          <p className="text-white/80 mb-6 font-manrope text-lg">
            Ready to start your project's blueprint?
          </p>
          <Magnet>
            <Button
              onClick={handleStartProjectClick}
              size="lg"
              className="bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl transition-all duration-300 border-none font-manrope"
            >
              Let's Build Together
            </Button>
          </Magnet>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveProjectShowcase;
