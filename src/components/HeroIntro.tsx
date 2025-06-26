"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroIntro() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentText, setCurrentText] = useState(0);
  const introRef = useRef<HTMLDivElement>(null);

  const texts = [
    "Cinematic &",
    "Immersive",
    "Web Experiences",
    ".CXW"
  ];

  useEffect(() => {
    if (currentText < texts.length - 1) {
      const interval = setTimeout(() => {
        setCurrentText((prev) => prev + 1);
      }, 1200);
      return () => clearTimeout(interval);
    } else {
      // After showing the last text, wait for tagline animation, then fade out
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 2000); // Show tagline for 2s
      return () => clearTimeout(timer);
    }
  }, [currentText, texts.length]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={introRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-bold text-white mb-4"
            >
              {texts[currentText]}
            </motion.div>
            
            {currentText === texts.length - 1 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto px-4"
              >
                We create captivating websites that stand out and reach your business goals.
              </motion.p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 