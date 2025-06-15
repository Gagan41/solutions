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
    <section
      id="services"
      className="py-24 px-6 bg-transparent overflow-hidden"
    >
      {/* Glassmorphic/Blurred Gradient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-purple-700/30 to-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-blue-700/30 to-purple-500/20 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight font-inter drop-shadow-lg">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-manrope drop-shadow-md">
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
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Glassmorphic Card */}
                <Card className="h-full group border-none bg-white/10 backdrop-blur-lg shadow-2xl rounded-3xl transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:bg-white/20 ring-1 ring-white/10">
                  <CardHeader className="text-center pb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="mx-auto mb-4 p-4 bg-gradient-to-br from-blue-700/80 to-purple-700/80 rounded-2xl w-16 h-16 flex items-center justify-center shadow-lg"
                    >
                      <IconComponent className="w-8 h-8 text-white drop-shadow-md" />
                    </motion.div>
                    <CardTitle className="text-2xl font-bold text-white group-hover:text-blue-200 transition-colors font-manrope drop-shadow">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-white/80 mb-6 text-base leading-relaxed font-inter">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="text-sm text-white/90 flex items-center justify-center gap-2 font-manrope"
                        >
                          <div className="w-1.5 h-1.5 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-center">
                      <Button
                        variant="outline"
                        className="group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:to-purple-700 group-hover:text-white group-hover:border-transparent transition-all duration-300 flex items-center gap-2 border-white/20 bg-white/10 text-white/90 font-inter rounded-full shadow-md backdrop-blur-md"
                      >
                        Learn More
                        <ArrowRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </Button>
                    </div>
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
            className="bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl transition-all duration-300 border-none font-manrope"
          >
            Get a Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
