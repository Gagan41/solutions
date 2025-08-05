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
import GlareHover from "./ui/GlareHover";
import Link from "next/link";

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
      title: "Digital Marketing And SEO",
      description:
        "Strategic digital marketing campaigns that drive engagement,Comprehensive SEO strategies for business growth.",
      features: [
        "Social Media Marketing",
        "Email Campaigns",
        "Technical SEO",
        "Keyword Research",
      ],
    },
    {
      icon: Search,
      title: "AI For Automation",
      description:
        "AI automation boosts efficiency, and drives smarter decision-making to accelerate business growth.",
      features: [
        "Process Automation",
        "Business Growth",
        "n8n Engine",
        "Smart Decisions",
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

  const handleConsultationClick = () => {
    // Dispatch custom event to trigger StickyCTA popup
    const event = new CustomEvent("openStickyCTA");
    window.dispatchEvent(event);
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
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-manrope drop-shadow-md">
            We provide comprehensive digital solutions to help your business
            thrive in the digital landscape.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 px-4 md:px-0"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex justify-center items-center"
              >
                {index === 0 ? (
                  <GlareHover
                    glareColor="#ffffff"
                    glareOpacity={0.4}
                    glareAngle={-45}
                    glareSize={250}
                    transitionDuration={600}
                    playOnce={false}
                    className="h-full w-full max-w-[320px] md:max-w-none"
                    style={{ background: "transparent", border: "none" }}
                  >
                    <Card className="h-full w-full group border-none bg-white/10 backdrop-blur-lg shadow-2xl rounded-3xl transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:bg-white/20 ring-1 ring-white/10">
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
                          <Link href="/detailed-information">
                            <Button
                              variant="outline"
                              className="bg-tranparent text-white border border-white hover:bg-white hover:text-black hover:border-blue-600 transition-all duration-300 flex items-center gap-2 font-inter rounded-full shadow-md backdrop-blur-md"
                            >
                              Learn More
                              <ArrowRight
                                size={16}
                                className="group-hover:translate-x-1 transition-transform"
                              />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </GlareHover>
                ) : index === 1 ? (
                  <GlareHover
                    glareColor="#ffffff"
                    glareOpacity={0.4}
                    glareAngle={-45}
                    glareSize={250}
                    transitionDuration={600}
                    playOnce={false}
                    className="h-full w-full max-w-[320px] md:max-w-none"
                    style={{ background: "transparent", border: "none" }}
                  >
                    <Card className="h-full full group border-none bg-white/10 backdrop-blur-lg shadow-2xl rounded-3xl transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:bg-white/20 ring-1 ring-white/10">
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
                          <Link href="/detailed-information">
                            <Button
                              variant="outline"
                              className="bg-tranparent text-white border border-white hover:bg-white hover:text-black hover:border-blue-600 transition-all duration-300 flex items-center gap-2 font-inter rounded-full shadow-md backdrop-blur-md"
                            >
                              Learn More
                              <ArrowRight
                                size={16}
                                className="group-hover:translate-x-1 transition-transform"
                              />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </GlareHover>
                ) : (
                  <GlareHover
                    glareColor="#ffffff"
                    glareOpacity={0.4}
                    glareAngle={-45}
                    glareSize={250}
                    transitionDuration={600}
                    playOnce={false}
                    className="h-full w-full max-w-[320px] md:max-w-none"
                    style={{ background: "transparent", border: "none" }}
                  >
                    <Card className="h-full w-full group border-none bg-white/10 backdrop-blur-lg shadow-2xl rounded-3xl transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:bg-white/20 ring-1 ring-white/10">
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
                          <Link href="/detailed-information">
                            <Button
                              variant="outline"
                              className="bg-tranparent text-white border border-white hover:bg-white hover:text-black hover:border-blue-600 transition-all duration-300 flex items-center gap-2 font-inter rounded-full shadow-md backdrop-blur-md"
                            >
                              Learn More
                              <ArrowRight
                                size={16}
                                className="group-hover:translate-x-1 transition-transform"
                              />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </GlareHover>
                )}
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
            className="bg-white hover:text-white hover:bg-black text-black px-8 py-4 text-lg font-semibold rounded-full shadow-xl transition-all duration-300 border-none font-manrope"
            onClick={handleConsultationClick}
          >
            Get a Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
