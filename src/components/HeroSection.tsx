"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ShinyText from "@/components/ui/ShinyText";
import VariableProximity from "@/components/ui/VariableProximity";
import StarBorder from "@/components/ui/StarBorder";
import MagnetLines from "@/components/ui/MagnetLines";
import Cubes from "@/components/ui/Cubes";
import { useRef } from "react";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/916361725397?text=Hello! I'm interested in your digital services.",
      "_blank"
    );
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-transparent text-white relative overflow-hidden"
    >
      {/* MagnetLines over top-left purple glow */}
      <div className="absolute top-[14%] left-[2%] z-0 pointer-events-none w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[220px] md:h-[220px] lg:w-[260px] lg:h-[260px] opacity-40 sm:opacity-50 md:opacity-60">
        <MagnetLines
          rows={9}
          columns={9}
          containerSize="100%"
          lineColor="rgb(255, 255, 255)"
          lineWidth="0.65vmin"
          lineHeight="3vmin"
          baseAngle={-5}
          style={{
            margin: "0.5rem",
            opacity: 1,
            transform: "rotate(-12deg) scale(0.85)",
          }}
        />
      </div>

      {/* MagnetLines over bottom-right purple glow */}
      <div className="absolute bottom-[10%] right-[3%] z-0 pointer-events-none w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[220px] md:h-[220px] lg:w-[260px] lg:h-[260px] opacity-40 sm:opacity-50 md:opacity-60">
        <MagnetLines
          rows={9}
          columns={9}
          containerSize="100%"
          lineColor="rgb(255, 255, 255)"
          lineWidth="0.65vmin"
          lineHeight="3vmin"
          baseAngle={5}
          style={{
            margin: "0.5rem",
            opacity: 1,
            transform: "rotate(12deg) scale(0.85)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
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
              className="bg-clip-text"
            />
            <br />
            <ShinyText
              text="Delivered"
              disabled={false}
              speed={3}
              className="bg-clip-text"
            />
          </motion.h1>

          <motion.div
            ref={containerRef}
            style={{ position: "relative" }}
            className="mb-8"
          >
            <VariableProximity
              label="Transform your business with cutting-edge web development,strategic marketing, and powerful SEO solutions."
              className="text-2xl md:text-2xl lg:text-4xl text-white/90 max-w-4xl mx-auto leading-relaxed font-['Roboto_Flex'] whitespace-pre-line"
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
