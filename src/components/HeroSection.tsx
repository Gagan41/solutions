"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/1234567890?text=Hello! I'm interested in your digital services.",
      "_blank",
    );
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-platinum-50 via-white to-obsidian-50 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-obsidian-900 mb-6"
          >
            <span className="bg-gradient-to-r from-obsidian-700 to-obsidian-900 bg-clip-text text-transparent">
              Digital Excellence
            </span>
            <br />
            <span className="text-obsidian-800">Delivered</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-obsidian-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your business with cutting-edge web development, strategic
            digital marketing, and powerful SEO solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-obsidian-800 hover:bg-obsidian-900 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 border border-obsidian-700"
              >
                <MessageCircle size={20} />
                Get Started on WhatsApp
                <ArrowRight size={20} />
              </Button>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-obsidian-700 hover:text-obsidian-800 font-semibold text-lg transition-colors duration-200 flex items-center gap-2"
            >
              View Our Services
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16"
          >
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-300 to-obsidian-300 rounded-2xl blur-3xl opacity-10"></div>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Digital workspace"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
