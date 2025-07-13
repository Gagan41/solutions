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
      {/* MagnetLines positioned in top left corner */}
      <div className="absolute top-1/2 left-0 z-0 transform -rotate-12 -translate-y-1/2 w-[220px] h-[220px] sm:w-[200px] sm:h-[200px] md:w-[340px] md:h-[340px] lg:w-[350px] lg:h-[350px] opacity-30 sm:opacity-40 md:opacity-60">
        <MagnetLines
          rows={9}
          columns={9}
          containerSize="100%"
          lineColor="rgb(255, 255, 255)"
          lineWidth="0.8vmin"
          lineHeight="4vmin"
          baseAngle={-5}
          style={{
            margin: "1rem",
            opacity: 1,
            transform: "rotate(-12deg) scale(0.8)",
          }}
        />
      </div>

      {/* Cubes positioned in right middle */}
      <div className="absolute top-1/2 right-0 z-0 transform rotate-12 -translate-y-1/2 w-[200px] h-[200px] sm:w-[230px] sm:h-[230px] md:w-[340px] md:h-[340px] lg:w-[500px] lg:h-[500px] opacity-30 sm:opacity-40 md:opacity-60">
        <Cubes
          gridSize={8}
          maxAngle={60}
          radius={4}
          borderStyle="2px dashed rgb(255, 255, 255)"
          faceColor="rgba(0, 0, 0, 0.8)"
          rippleColor="rgba(59, 130, 246, 0.8)"
          rippleSpeed={1.5}
          autoAnimate={true}
          rippleOnClick={true}
          duration={{ enter: 0.7, leave: 1.2 }}
          easing="power1.inOut"
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
              <div className="absolute inset-0 rounded-3xl blur-3xl opacity-20 z-0"></div>
              <img
                src="/images/hero.webp"
                alt="Digital workspace"
                className="relative rounded-3xl z-10 w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
