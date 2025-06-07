"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Star, Quote, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface IndustryData {
  name: string;
  title: string;
  description: string;
  hero: {
    headline: string;
    subheadline: string;
    painPoints: string[];
  };
  services: {
    title: string;
    description: string;
    benefits: string[];
  }[];
  caseStudy: {
    client: string;
    challenge: string;
    solution: string;
    results: string[];
  };
  testimonial: {
    text: string;
    author: string;
    position: string;
    company: string;
  };
}

interface Props {
  industry: IndustryData;
}

const IndustryLandingPage = ({ industry }: Props) => {
  const handleWhatsAppClick = () => {
    const message = `Hi! I'm interested in ${industry.name.toLowerCase()} digital marketing services. Can we discuss how you can help my business?`;
    window.open(
      `https://wa.me/1234567890?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-platinum-50 via-white to-obsidian-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-obsidian-100 text-obsidian-800">
                {industry.name} Specialists
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-obsidian-900 mb-6">
                {industry.hero.headline}
              </h1>

              <p className="text-xl text-obsidian-600 mb-8 leading-relaxed">
                {industry.hero.subheadline}
              </p>

              {/* Pain Points */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-obsidian-800 mb-4">
                  Are you facing these challenges?
                </h3>
                <ul className="space-y-2">
                  {industry.hero.painPoints.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-obsidian-600"
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="bg-obsidian-800 hover:bg-obsidian-900 text-white px-8 py-4 text-lg font-semibold rounded-full"
                >
                  Get Free {industry.name} Marketing Audit
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gold-300 to-obsidian-300 rounded-2xl blur-3xl opacity-10"></div>
                <img
                  src={`https://images.unsplash.com/photo-${industry.name === "Healthcare" ? "1576091160399-112ba8d25d1f" : industry.name === "E-commerce" ? "1556742049-0cfed4f6a45d" : "1517248135467-4c7edcad34c4"}?w=600&q=80`}
                  alt={`${industry.name} business`}
                  className="relative rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-platinum-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-obsidian-900 mb-4">
              Specialized {industry.name}{" "}
              <span className="bg-gradient-to-r from-obsidian-700 to-obsidian-900 bg-clip-text text-transparent">
                Marketing Services
              </span>
            </h2>
            <p className="text-xl text-obsidian-600 max-w-3xl mx-auto">
              Tailored solutions designed specifically for{" "}
              {industry.name.toLowerCase()} businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industry.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border border-platinum-200 bg-white">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-obsidian-900">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-obsidian-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-obsidian-700"
                        >
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-obsidian-900 mb-4">
              {industry.name} Success Story
            </h2>
            <p className="text-xl text-obsidian-600">
              See how we helped a {industry.name.toLowerCase()} business achieve
              remarkable results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-xl border border-platinum-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-obsidian-900 mb-4">
                  {industry.caseStudy.client}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-obsidian-800 mb-2">
                      Challenge:
                    </h4>
                    <p className="text-obsidian-600 mb-4">
                      {industry.caseStudy.challenge}
                    </p>

                    <h4 className="font-semibold text-obsidian-800 mb-2">
                      Solution:
                    </h4>
                    <p className="text-obsidian-600">
                      {industry.caseStudy.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-obsidian-800 mb-4">
                      Results:
                    </h4>
                    <div className="space-y-3">
                      {industry.caseStudy.results.map((result, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-green-600" />
                          <span className="font-medium text-green-700">
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-obsidian-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Quote className="w-12 h-12 text-gold-400 mx-auto mb-6" />
            <blockquote className="text-2xl font-light mb-8 italic">
              "{industry.testimonial.text}"
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <div className="flex text-gold-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>

            <div className="mt-4">
              <div className="font-semibold text-lg">
                {industry.testimonial.author}
              </div>
              <div className="text-platinum-300">
                {industry.testimonial.position}, {industry.testimonial.company}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-obsidian-800 to-obsidian-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your {industry.name} Business?
            </h2>
            <p className="text-xl text-platinum-200 mb-8">
              Get a free marketing audit and see how we can help you achieve
              similar results.
            </p>

            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
            >
              Get Your Free {industry.name} Marketing Audit
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustryLandingPage;
