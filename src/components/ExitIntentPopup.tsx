"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift, MessageSquare, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger on desktop and when mouse leaves from the top
      if (
        !hasShown &&
        window.innerWidth > 768 &&
        e.clientY <= 0 &&
        e.relatedTarget === null
      ) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    const handleScroll = () => {
      // Alternative trigger: when user scrolls past 70% of the page
      const scrollPercent =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;

      if (!hasShown && scrollPercent > 70) {
        // Add a small delay to make it feel more natural
        timeoutId = setTimeout(() => {
          setIsOpen(true);
          setHasShown(true);
        }, 2000);
      }
    };

    // Add event listeners
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [hasShown]);

  const handleAuditClick = () => {
    setIsOpen(false);
    // Scroll to audit section
    const auditSection = document.querySelector("[data-section='audit']");
    if (auditSection) {
      auditSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I was just browsing your website and I'm interested in getting a free audit for my site. Can you help?"
    );
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md border-0 p-0 bg-transparent shadow-none">
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-white rounded-2xl shadow-2xl border border-platinum-200 overflow-hidden"
        >
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-slate-700 to-slate-800 p-6 text-white relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-white/10 rounded-lg">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <DialogTitle className="text-xl font-bold text-white">
                  Wait! Don't Leave Yet
                </DialogTitle>
              </div>
            </div>

            <p className="text-slate-200">
              Get a free website audit before you go!
            </p>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Discover What's Holding Your Website Back
              </h3>
              <p className="text-slate-600">
                Get a comprehensive analysis of your site's SEO, performance,
                and user experience - completely free!
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-3 mb-6">
              {[
                "Identify SEO opportunities",
                "Improve user experience",
                "Boost conversion rates",
                "Get actionable recommendations",
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-slate-500 rounded-full" />
                  <span className="text-slate-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={handleAuditClick}
                  className="w-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white h-12 text-lg font-semibold flex items-center gap-2"
                >
                  <Search className="w-5 h-5" />
                  Get Free Audit Now
                </Button>
              </motion.div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-slate-600" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-slate-500">or</span>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={handleWhatsAppClick}
                  variant="outline"
                  className="w-full border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-white h-12 flex items-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
              </motion.div>
            </div>

            {/* Trust indicators */}
            <div className="mt-6 pt-4 border-t border-platinum-200">
              <div className="flex items-center justify-center gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-slate-500 rounded-full" />
                  <span>100% Free</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-slate-500 rounded-full" />
                  <span>No Spam</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-slate-500 rounded-full" />
                  <span>Instant Results</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
