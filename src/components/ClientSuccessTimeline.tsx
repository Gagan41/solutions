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
      client: "TechFlow Solutions",
      industry: "B2B SaaS",
      challenge:
        "Low organic traffic and poor conversion rates on their landing pages",
      solution:
        "Complete SEO overhaul, landing page optimization, and content marketing strategy",
      timeline: "6 months",
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
          before: "$45K",
          after: "$180K",
          improvement: "+300%",
        },
      ],
      testimonial: {
        text: "Courtinex transformed our entire digital presence. The results speak for themselves - we've quadrupled our revenue in just 6 months.",
        author: "Sarah Chen",
        position: "CEO, TechFlow Solutions",
      },
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&q=80",
    },
    {
      id: "2",
      client: "Urban Eats Restaurant Group",
      industry: "Food & Beverage",
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
        author: "Marcus Rodriguez",
        position: "Owner, Urban Eats",
      },
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80",
    },
    {
      id: "3",
      client: "EcoHome Products",
      industry: "E-commerce",
      challenge: "High cart abandonment rates and low customer lifetime value",
      solution:
        "E-commerce optimization, email marketing automation, and conversion rate optimization",
      timeline: "5 months",
      results: [
        {
          metric: "Cart Abandonment",
          before: "78%",
          after: "45%",
          improvement: "-42%",
        },
        {
          metric: "Customer LTV",
          before: "$85",
          after: "$240",
          improvement: "+182%",
        },
        {
          metric: "Email Revenue",
          before: "$5K/month",
          after: "$28K/month",
          improvement: "+460%",
        },
      ],
      testimonial: {
        text: "The email automation alone pays for their entire service. Our customer relationships have never been stronger.",
        author: "Jennifer Walsh",
        position: "Marketing Director, EcoHome",
      },
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
    },
  ];

  const toggleExpanded = (id: string) => {
    setExpandedCase(expandedCase === id ? null : id);
  };

  return (
    <section className="py-20 bg-platinum-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-obsidian-900 mb-4">
            Client{" "}
            <span className="bg-gradient-to-r from-obsidian-700 to-obsidian-900 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-obsidian-600 max-w-3xl mx-auto">
            Real results from real businesses. See how we've helped companies
            like yours achieve remarkable growth.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-obsidian-300 via-gold-400 to-obsidian-300"></div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gold-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className="ml-16">
                  <Card className="shadow-lg border border-platinum-200 bg-white hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-obsidian-900">
                              {study.client}
                            </h3>
                            <Badge
                              variant="outline"
                              className="text-obsidian-600"
                            >
                              {study.industry}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-obsidian-500">
                            <Clock className="w-4 h-4" />
                            <span>{study.timeline} project</span>
                          </div>
                        </div>
                        <img
                          src={study.image}
                          alt={study.client}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                      </div>

                      {/* Challenge */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-obsidian-800 mb-2">
                          Challenge:
                        </h4>
                        <p className="text-obsidian-600">{study.challenge}</p>
                      </div>

                      {/* Quick Results Preview */}
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        {study.results.slice(0, 3).map((result, idx) => (
                          <div
                            key={idx}
                            className="text-center p-3 bg-green-50 rounded-lg"
                          >
                            <div className="text-lg font-bold text-green-700">
                              {result.improvement}
                            </div>
                            <div className="text-xs text-green-600">
                              {result.metric}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Expand Button */}
                      <Button
                        variant="ghost"
                        onClick={() => toggleExpanded(study.id)}
                        className="w-full flex items-center justify-center gap-2 text-obsidian-600 hover:text-obsidian-800"
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
                            className="mt-6 pt-6 border-t border-platinum-200"
                          >
                            {/* Solution */}
                            <div className="mb-6">
                              <h4 className="font-semibold text-obsidian-800 mb-2">
                                Our Solution:
                              </h4>
                              <p className="text-obsidian-600">
                                {study.solution}
                              </p>
                            </div>

                            {/* Detailed Results */}
                            <div className="mb-6">
                              <h4 className="font-semibold text-obsidian-800 mb-4">
                                Detailed Results:
                              </h4>
                              <div className="space-y-3">
                                {study.results.map((result, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center justify-between p-3 bg-platinum-50 rounded-lg"
                                  >
                                    <span className="font-medium text-obsidian-700">
                                      {result.metric}
                                    </span>
                                    <div className="flex items-center gap-4">
                                      <span className="text-sm text-obsidian-500">
                                        {result.before}
                                      </span>
                                      <TrendingUp className="w-4 h-4 text-green-600" />
                                      <span className="text-sm font-medium text-obsidian-700">
                                        {result.after}
                                      </span>
                                      <Badge className="bg-green-100 text-green-800">
                                        {result.improvement}
                                      </Badge>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Testimonial */}
                            <div className="bg-gradient-to-r from-obsidian-800 to-obsidian-900 rounded-lg p-6 text-white">
                              <Quote className="w-8 h-8 text-gold-400 mb-4" />
                              <p className="text-lg mb-4 italic">
                                "{study.testimonial.text}"
                              </p>
                              <div className="flex items-center gap-3">
                                <div className="flex text-gold-400">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className="w-4 h-4 fill-current"
                                    />
                                  ))}
                                </div>
                                <div>
                                  <div className="font-semibold">
                                    {study.testimonial.author}
                                  </div>
                                  <div className="text-sm text-platinum-300">
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
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-obsidian-600 mb-6">
            Ready to become our next success story?
          </p>
          <Button className="bg-gradient-to-r from-obsidian-800 to-obsidian-900 hover:from-obsidian-900 hover:to-obsidian-800 text-white px-8 py-3 text-lg">
            Start Your Success Story
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientSuccessTimeline;
