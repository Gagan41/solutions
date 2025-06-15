"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ShinyText from "@/components/ui/ShinyText";
import VariableProximity from "@/components/ui/VariableProximity";
import StarBorder from "@/components/ui/StarBorder";
import { useRef } from "react";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/1234567890?text=Hello! I'm interested in your digital services.",
      "_blank"
    );
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-transparent text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight"
          >
            <ShinyText
              text="Digital Excellence"
              disabled={false}
              speed={3}
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text"
            />
            <br />
            <ShinyText
              text="Delivered"
              disabled={false}
              speed={3}
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text"
            />
          </motion.h1>

          <motion.div
            ref={containerRef}
            style={{ position: "relative" }}
            className="mb-8"
          >
            <VariableProximity
              label="Transform your business with cutting-edge web development,strategic marketing, and powerful SEO solutions."
              className="text-2xl md:text-2xl lg:text-4xl text-white/50 max-w-4xl mx-auto leading-relaxed font-['Roboto_Flex'] whitespace-pre-line"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <StarBorder
                as="button"
                color="cyan"
                speed="5s"
                onClick={handleWhatsAppClick}
                className="bg-gray text-white px-1 py-8 text-lg font-semibold rounded-full font-manrope"
              >
                Chat on WhatsApp
              </StarBorder>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-white/90 hover:text-white font-semibold text-lg transition-all duration-200 flex items-center gap-2"
            >
              View Our Services
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16"
          >
            <div className="relative max-w-2xl mx-auto rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-3xl blur-3xl opacity-20 z-0"></div>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Digital workspace"
                className="relative rounded-3xl z-10 w-full h-auto shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
