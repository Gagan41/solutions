"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-4 right-4 z-50 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg px-4 sm:px-6 lg:px-8"
    >
      <div className="flex justify-between items-center h-16">
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Courtinex Logo"
            className="h-10 w-auto object-contain"
          />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {["Home", "Services", "About", "Contact"].map((item) => (
            <motion.button
              key={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item === "About" ? "about" : item.toLowerCase())}
              className="text-slate-100 hover:text-pink-400 transition-colors duration-200 font-medium"
            >
              {item}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-100 hover:text-pink-400 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden py-4 space-y-4"
        >
          {["Home", "Services", "About", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item === "About" ? "about" : item.toLowerCase())}
              className="block w-full text-left text-slate-200 hover:text-pink-400 transition-colors duration-200 font-medium py-2"
            >
              {item}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
