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
      setCurrentIndex((prev) => (prev >= insightTips.length - 1 ? 0 : prev + 1));
    } else {
      setCurrentIndex((prev) => (prev >= paddedMaxIndex ? 0 : prev + 1));
    }
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    if (visibleTips === 1) {
      setCurrentIndex((prev) => (prev <= 0 ? insightTips.length - 1 : prev - 1));
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

  return (
    <section className="py-20 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-obsidian-900 mb-4">
            Digital{" "}
            <span className="bg-gradient-to-r from-gold-500 to-gold-600 bg-clip-text text-transparent">
              Insights
            </span>
          </h2>
          <p className="text-xl text-obsidian-600 max-w-3xl mx-auto">
            Quick tips and insights to boost your website's performance and user
            experience.
          </p>
        </motion.div>

        <div className="relative overflow-x-hidden">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-6">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            <div className="flex items-center gap-2">
              <div className="text-sm text-obsidian-600">
                {/* Progress indicator: show current section of total */}
                {visibleTips === 1
                  ? `${currentIndex + 1} of ${paddedTips.length}`
                  : `${currentIndex + 1} - ${Math.min(currentIndex + visibleTips, paddedTips.length)} of ${paddedTips.length}`}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="text-xs"
              >
                {isAutoPlaying ? "Pause" : "Play"}
              </Button>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="flex items-center gap-2"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Tips Carousel */}
          <div className="overflow-x-hidden w-full">
            <div
              className={`flex transition-transform duration-500 ease-in-out ${visibleTips === 1 ? '' : 'gap-6'}`}
              style={visibleTips === 1
                ? {
                    width: `${insightTips.length * 100}vw`,
                    transform: `translateX(-${currentIndex * 100}vw)`
                  }
                : {
                    width: `${(paddedTips.length / visibleTips) * 100}%`,
                    transform: `translateX(-${currentIndex * (100 / paddedTips.length)}%)`
                  }
              }
            >
              {(visibleTips === 1 ? insightTips : paddedTips).map((tip, index) => {
                const IconComponent = tip.icon;
                return (
                  <div
                    key={tip.id}
                    className={`flex-shrink-0 ${visibleTips === 1 ? 'mx-auto' : ''}`}
                    style={visibleTips === 1
                      ? { width: '100vw', maxWidth: '20rem' }
                      : { width: `${100 / paddedTips.length}%` }
                    }
                  >
                    {tip.isPlaceholder && visibleTips !== 1 ? (
                      <div className="h-full" />
                    ) : (
                      <Card className={`h-full shadow-lg border border-platinum-200 bg-white hover:shadow-xl transition-all duration-300 mx-auto w-full max-w-xs`}>
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4 mb-4">
                            <div
                              className={`p-3 rounded-lg bg-gradient-to-r ${tip.color} text-white flex-shrink-0`}
                            >
                              <IconComponent className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-lg font-semibold text-obsidian-900">
                                  {tip.title}
                                </h3>
                                <span
                                  className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                                    tip.category,
                                  )}`}
                                >
                                  {tip.category}
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className="text-obsidian-600 leading-relaxed">
                            {tip.content}
                          </p>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: paddedTotalSections }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index * visibleTips);
                  setIsAutoPlaying(false);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / visibleTips) === index
                    ? "bg-obsidian-800 w-8"
                    : "bg-platinum-300 hover:bg-platinum-400"
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-obsidian-600 mb-4">
            Want personalized insights for your website?
          </p>
          <Button className="bg-gradient-to-r from-obsidian-800 to-obsidian-900 hover:from-obsidian-900 hover:to-obsidian-800 text-white px-8 py-3">
            Get Custom Analysis
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MicroBlog;
