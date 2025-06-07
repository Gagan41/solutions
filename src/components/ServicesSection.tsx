"use client";

import { motion } from "framer-motion";
import { Code, TrendingUp, Search, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
      features: [
        "Responsive Design",
        "Fast Performance",
        "SEO Optimized",
        "Mobile-First Approach",
      ],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description:
        "Strategic digital marketing campaigns that drive engagement, conversions, and business growth.",
      features: [
        "Social Media Marketing",
        "Content Strategy",
        "Email Campaigns",
        "Analytics & Reporting",
      ],
    },
    {
      icon: Search,
      title: "SEO Services",
      description:
        "Comprehensive SEO strategies to improve your search rankings and increase organic traffic.",
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO",
        "Local SEO",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-platinum-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-obsidian-900 mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-obsidian-700 to-obsidian-900 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-obsidian-600 max-w-3xl mx-auto">
            We provide comprehensive digital solutions to help your business
            thrive in the digital landscape.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border border-platinum-200 shadow-lg bg-white group hover:border-gold-200">
                  <CardHeader className="text-center pb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="mx-auto mb-4 p-4 bg-gradient-to-br from-obsidian-700 to-obsidian-800 rounded-2xl w-16 h-16 flex items-center justify-center"
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-2xl font-bold text-obsidian-900 group-hover:text-obsidian-700 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-obsidian-600 mb-6 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="text-sm text-obsidian-700 flex items-center justify-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-gold-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className="group-hover:bg-obsidian-700 group-hover:text-white group-hover:border-obsidian-700 transition-all duration-300 flex items-center gap-2 border-obsidian-200"
                    >
                      Learn More
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-obsidian-800 to-obsidian-900 hover:from-obsidian-900 hover:to-obsidian-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-obsidian-700"
          >
            Get a Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
