"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  Star,
  Quote,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Magnet from "@/components/ui/Magnet";

interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  timeline: string;
  results: {
    metric: string;
    before: string;
    after: string;
    improvement: string;
  }[];
  testimonial: {
    text: string;
    author: string;
    position: string;
  };
  image: string;
}

const ClientSuccessTimeline = () => {
  const [expandedCase, setExpandedCase] = useState<string | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: "1",
      client: "Nandi Agrotech",
      industry: "Farming, Agro-Tech",
      challenge:
        "Low organic traffic, poor conversion rates, and no dedicated SEO landing page for conversions.",
      solution:
        "Complete on-page and technical SEO overhaul, creation of a keyword-optimized landing page, and execution of a content marketing strategy targeting long-tail keywords.",
      timeline: "4 months",
      results: [
        {
          metric: "Organic Traffic",
          before: "2,500/month",
          after: "18,500/month",
          improvement: "+640%",
        },
        {
          metric: "Conversion Rate",
          before: "1.2%",
          after: "4.8%",
          improvement: "+300%",
        },
        {
          metric: "Monthly Revenue",
          before: "₹45K",
          after: "₹180K",
          improvement: "+300%",
        },
      ],
      testimonial: {
        text: "Courtinex transformed our entire digital presence. The results speak for themselves - we've quadrupled our revenue in just 4 months.",
        author: "Kiran Kumar",
        position: "Nandi Agrotech",
      },
      image: "images/nandi.jpeg",
    },
    {
      id: "2",
      client: "Shashi Adda",
      industry: "Men's Fashion",
      challenge:
        "Multiple locations with inconsistent online presence and low local visibility",
      solution:
        "Local SEO optimization, Google My Business management, and social media strategy",
      timeline: "4 months",
      results: [
        {
          metric: "Local Search Ranking",
          before: "Page 3-4",
          after: "Top 3",
          improvement: "+85%",
        },
        {
          metric: "Online Orders",
          before: "150/week",
          after: "450/week",
          improvement: "+200%",
        },
        {
          metric: "Customer Reviews",
          before: "3.2 stars",
          after: "4.7 stars",
          improvement: "+47%",
        },
      ],
      testimonial: {
        text: "Our online orders tripled and we're now the top-rated restaurant group in our area. The ROI has been incredible.",
        author: "Sashi Kumar",
        position: "Owner,Sashi Adda",
      },
      image: "/images/sashi.png",
    },
    {
      id: "3",
      client: "Course Mastery",
      industry: "EdTech",
      challenge:
        "High cart abandonment rate, low customer lifetime value, and missing SEO-optimized landing pages.",
      solution:
        "Conversion-optimized landing page creation using SEO best practices, behavioral analytics for checkout funnel improvements, and content-driven email automation strategy.",
      timeline: "5 months",
      results: [
        {
          metric: "Cart Abandonment",
          before: "78%",
          after: "25%",
          improvement: "-42%",
        },
        {
          metric: "Customer LTV",
          before: "₹85",
          after: "₹240",
          improvement: "+182%",
        },
        {
          metric: "Email Revenue",
          before: "₹5K/month",
          after: "₹28K/month",
          improvement: "+460%",
        },
      ],
      testimonial: {
        text: "The email automation alone pays for their entire service. Our customer relationships have never been stronger.",
        author: "Ashwin Kumar ML",
        position: "Course Mastery",
      },
      image: "/images/ashwin.png",
    },
  ];

  const toggleExpanded = (id: string) => {
    setExpandedCase(expandedCase === id ? null : id);
  };

  const handleStartSuccessStory = () => {
    // Dispatch custom event to trigger StickyCTA popup
    const event = new CustomEvent("openStickyCTA");
    window.dispatchEvent(event);
  };

  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto relative z-10">
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
          className="text-center mb-10 sm:mb-16 relative z-10 px-2"
        >
          <h2 className="text-4xl font-extrabold leading-snug tracking-tight text-white drop-shadow-lg font-inter sm:text-5xl">
            Client{" "}
            <span className="text-white">
              Success Stories
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-base text-white/80 drop-shadow-md font-manrope sm:text-lg md:text-xl">
            Real results from real businesses. See how we've helped companies
            like yours achieve remarkable growth.
          </p>
        </motion.div>

        <div className="relative z-10">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 opacity-40"></div>

          <div className="space-y-8 sm:space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 sm:left-6 w-4 h-4 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full border-4 border-white/30 shadow-lg z-10"></div>

                <div className="ml-8 sm:ml-16">
                  <Card className="border-none bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl transition-all duration-300 group relative z-10">
                    <CardContent className="p-4 sm:p-8">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4 sm:gap-0">
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-2">
                            <h3 className="text-lg sm:text-xl font-bold text-white font-manrope drop-shadow">
                              {study.client}
                            </h3>
                            <Badge
                              variant="outline"
                              className="bg-white/10 text-white/80 font-inter rounded-full px-3 py-1 text-xs border-none"
                            >
                              {study.industry}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-white/60 font-inter">
                            <Clock className="w-4 h-4" />
                            <span>{study.timeline} project</span>
                          </div>
                        </div>
                        <img
                          src={study.image}
                          alt={study.client}
                          className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl object-cover shadow-lg border-2 border-white/20"
                        />
                      </div>

                      {/* Challenge */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-white font-inter mb-2 drop-shadow">
                          Challenge:
                        </h4>
                        <p className="text-white/80 font-manrope">
                          {study.challenge}
                        </p>
                      </div>

                      {/* Quick Results Preview */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                        {study.results.slice(0, 3).map((result, idx) => (
                          <div
                            key={idx}
                            className="text-center p-3 bg-white/10 rounded-xl shadow-inner"
                          >
                            <div className="text-lg font-bold text-green-300 font-inter drop-shadow">
                              {result.improvement}
                            </div>
                            <div className="text-xs text-white/70 font-manrope">
                              {result.metric}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Expand Button */}
                      <Button
                        variant="ghost"
                        onClick={() => toggleExpanded(study.id)}
                        className="w-full flex items-center justify-center gap-2 text-white/80 hover:text-white font-inter rounded-xl focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none hover:bg-white/20 hover:bg-opacity-10 py-3 sm:py-2"
                        style={{ minHeight: 44 }}
                      >
                        {expandedCase === study.id ? (
                          <>
                            <span>Show Less</span>
                            <ChevronUp className="w-4 h-4" />
                          </>
                        ) : (
                          <>
                            <span>View Full Case Study</span>
                            <ChevronDown className="w-4 h-4" />
                          </>
                        )}
                      </Button>

                      {/* Expanded Content */}
                      <AnimatePresence>
                        {expandedCase === study.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10"
                          >
                            {/* Solution */}
                            <div className="mb-4 sm:mb-6">
                              <h4 className="font-semibold text-white font-inter mb-2 drop-shadow">
                                Our Solution:
                              </h4>
                              <p className="text-white/80 font-manrope">
                                {study.solution}
                              </p>
                            </div>

                            {/* Detailed Results */}
                            <div className="mb-4 sm:mb-6">
                              <h4 className="font-semibold text-white font-inter mb-4 drop-shadow">
                                Detailed Results:
                              </h4>
                              <div className="space-y-3">
                                {study.results.map((result, idx) => (
                                  <div
                                    key={idx}
                                    className="flex flex-col items-start gap-2 rounded-xl bg-white/10 p-3 shadow-inner sm:flex-row sm:items-center sm:justify-between"
                                  >
                                    <span className="font-medium text-white font-manrope">
                                      {result.metric}
                                    </span>
                                    <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                                      <span className="text-sm text-white/60 font-inter">
                                        {result.before}
                                      </span>
                                      <TrendingUp className="w-4 h-4 text-green-300" />
                                      <span className="text-sm font-medium text-white font-inter">
                                        {result.after}
                                      </span>
                                      <Badge className="border-none bg-green-400/10 px-2 py-1 text-xs text-green-300 font-inter">
                                        {result.improvement}
                                      </Badge>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Testimonial */}
                            <div className="mt-6 rounded-xl bg-gray-700 p-4 text-white shadow-lg sm:mt-8 sm:p-6">
                              <Quote className="mb-4 h-8 w-8 text-yellow-300" />
                              <p className="mb-4 text-base italic font-manrope sm:text-lg">
                                "{study.testimonial.text}"
                              </p>
                              <div className="flex items-center gap-3">
                                <div className="flex text-yellow-300">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className="w-4 h-4 fill-current"
                                    />
                                  ))}
                                </div>
                                <div>
                                  <div className="font-semibold font-inter">
                                    {study.testimonial.author}
                                  </div>
                                  <div className="text-sm text-white/60 font-manrope">
                                    {study.testimonial.position}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-10 sm:mt-16 relative z-10 px-2"
        >
          <p className="text-white/80 mb-6 font-manrope text-base sm:text-lg">
            Ready to become our next success story?
          </p>
          <div className="flex justify-center">
            <Magnet padding={150} disabled={false} magnetStrength={10}>
              <Button
                className="bg-white hover:bg-black hover:text-white text-black px-6 sm:px-8 py-3 text-base sm:text-lg rounded-xl font-bold shadow-lg focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none font-inter"
                onClick={handleStartSuccessStory}
              >
                Start Your Success Story
              </Button>
            </Magnet>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientSuccessTimeline;
