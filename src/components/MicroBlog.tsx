"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  TrendingUp,
  Search,
  Smartphone,
  Globe,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

interface InsightTip {
  id: number;
  icon: React.ElementType;
  title: string;
  content: string;
  category: "SEO" | "UI/UX" | "Marketing" | "Performance";
  color: string;
  isPlaceholder?: boolean;
}

const MicroBlog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleTips, setVisibleTips] = useState(3);

  // Responsive: 1 per section on mobile, 3 on desktop
  useEffect(() => {
    const handleResize = () => {
      setVisibleTips(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const insightTips: InsightTip[] = [
    {
      id: 1,
      icon: Smartphone,
      title: "Mobile-First Design",
      content:
        "Did you know 60% of searches happen on mobile? Design for mobile first, then scale up to desktop for better user experience.",
      category: "UI/UX",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      icon: Search,
      title: "Page Speed Impact",
      content:
        "A 1-second delay in page load time can reduce conversions by 7%. Optimize images and minimize HTTP requests.",
      category: "Performance",
      color: "from-green-500 to-green-600",
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "Local SEO Power",
      content:
        "46% of Google searches are local. Optimize your Google My Business profile to capture local customers.",
      category: "SEO",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 4,
      icon: Lightbulb,
      title: "Color Psychology",
      content:
        "Red creates urgency, blue builds trust, green suggests growth. Choose colors that align with your brand message.",
      category: "UI/UX",
      color: "from-orange-500 to-orange-600",
    },
    {
      id: 5,
      icon: Globe,
      title: "Content is King",
      content:
        "Websites with blogs have 434% more indexed pages. Regular, quality content boosts SEO and establishes authority.",
      category: "Marketing",
      color: "from-pink-500 to-pink-600",
    },
    {
      id: 6,
      icon: Zap,
      title: "Call-to-Action Tips",
      content:
        "Use action words like 'Get', 'Start', 'Discover'. Make CTAs stand out with contrasting colors and clear benefits.",
      category: "Marketing",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      id: 7,
      icon: Search,
      title: "Meta Descriptions",
      content:
        "Meta descriptions don't directly impact rankings, but they influence click-through rates. Keep them under 160 characters.",
      category: "SEO",
      color: "from-teal-500 to-teal-600",
    },
    {
      id: 8,
      icon: Smartphone,
      title: "Touch Target Size",
      content:
        "Make buttons at least 44px tall for easy mobile tapping. Users should never struggle to click your CTAs.",
      category: "UI/UX",
      color: "from-red-500 to-red-600",
    },
    {
      id: 9,
      icon: TrendingUp,
      title: "Social Proof Power",
      content:
        "92% of consumers trust recommendations from others. Display testimonials, reviews, and client logos prominently.",
      category: "Marketing",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      id: 10,
      icon: Zap,
      title: "Above the Fold",
      content:
        "Users spend 80% of their time above the fold. Place your most important content and CTAs in this prime real estate.",
      category: "UI/UX",
      color: "from-cyan-500 to-cyan-600",
    },
  ];

  // Pad the tips array to always fill the last row
  const paddedTips = [...insightTips];
  const remainder = insightTips.length % visibleTips;
  if (remainder !== 0) {
    for (let i = 0; i < visibleTips - remainder; i++) {
      paddedTips.push({
        id: 1000 + i, // unique id for placeholder
        icon: () => null,
        title: "",
        content: "",
        category: "SEO",
        color: "",
        isPlaceholder: true,
      } as any);
    }
  }
  const paddedMaxIndex = Math.max(0, paddedTips.length - visibleTips);
  const paddedTotalSections = Math.ceil(paddedTips.length / visibleTips);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= paddedMaxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, paddedMaxIndex]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    if (visibleTips === 1) {
      setCurrentIndex((prev) =>
        prev >= insightTips.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentIndex((prev) => (prev >= paddedMaxIndex ? 0 : prev + 1));
    }
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    if (visibleTips === 1) {
      setCurrentIndex((prev) =>
        prev <= 0 ? insightTips.length - 1 : prev - 1
      );
    } else {
      setCurrentIndex((prev) => (prev <= 0 ? paddedMaxIndex : prev - 1));
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "SEO":
        return "bg-green-100 text-green-800";
      case "UI/UX":
        return "bg-blue-100 text-blue-800";
      case "Marketing":
        return "bg-purple-100 text-purple-800";
      case "Performance":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleCustomAnalysisClick = () => {
    // Dispatch custom event to trigger StickyCTA popup
    const event = new CustomEvent("openStickyCTA");
    window.dispatchEvent(event);
  };

  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Gradient/Blur overlays for depth */}
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
            Digital{" "}
            <span className="text-white">
              Insights
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-manrope drop-shadow-md">
            Quick tips and insights to boost your website's performance and user
            experience.
          </p>
        </motion.div>

        {/* Infinite Moving Cards Animation */}
        <div className="relative overflow-x-hidden z-10">
          <InfiniteMovingCards
            items={insightTips.map(tip => ({
              quote: tip.content,
              name: tip.title,
              title: tip.category,
              icon: tip.icon
            }))}
            direction="left"
            speed="normal"
            pauseOnHover={true}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 relative z-10"
        >
          <p className="text-white/80 mb-4 font-manrope">
            Want personalized insights for your website?
          </p>
          <Button
            className="bg-white hover:text-white hover:bg-black text-black px-8 py-3 rounded-xl font-bold shadow-lg focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none font-inter"
            onClick={handleCustomAnalysisClick}
          >
            Get Custom Analysis
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MicroBlog;
