"use client";

import { motion } from "framer-motion";
import { Code, TrendingUp, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const DetailedInformation = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development,Design and Services",
      description: "In today's digital-first world, a robust online presence is critical for any business.As a web development agency, we specialize in custom website and web application development using cutting-edge technologies like React, Next.js, and Node.js. Our focus is on creating dynamic, high-performance digital experiences tailored to your business needs.",
      highlights: [
        {
          title: "Responsive and Customized Design",
          description: "Our websites adapt seamlessly across all screen sizes, ensuring a consistent and intuitive user experience on desktops, tablets, and mobile devices. We also create customized designs that are tailored to your brand and business needs."
        },
        {
          title: "Fast Performance",
          description: "Speed matters—for users and for search engines. We optimize code, assets, and architecture to ensure your site loads quickly and runs smoothly."
        },
        {
          title: "SEO Optimized",
          description: "Built-in SEO best practices from the ground up help your site rank higher on search engines, increasing visibility and attracting more organic traffic."
        },
        {
          title: "Mobile-First Approach",
          description: "With the majority of users browsing on mobile devices, we prioritize mobile performance and usability in every project from the design phase onward."
        }
      ]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing and SEO",
      description: "A website is only effective if it reaches the right audience. Our Digital Marketing and SEO services are designed to increase brand awareness, drive user engagement, and grow your business through data-driven strategies.",
      subtitle: "We provide strategic digital marketing campaigns that include everything from content creation to analytics, along with comprehensive SEO services that ensure long-term organic growth.",
      services: [
        {
          title: "Social Media Marketing",
          description: "Build brand loyalty and reach new audiences through tailored campaigns on platforms like Instagram, Facebook, LinkedIn, and more."
        },
        {
          title: "Email Campaigns",
          description: "Keep your audience engaged with personalized and automated email newsletters, product updates, and promotional offers."
        },
        {
          title: "Technical SEO",
          description: "We improve your website's backend structure and performance—fixing crawl errors, enhancing site speed, and optimizing metadata."
        },
        {
          title: "Keyword Research",
          description: "We identify high-value keywords relevant to your business to optimize content and increase your site's discoverability."
        }
      ]
    },
    {
      icon: Search,
      title: "AI for Automation",
      description: "Artificial Intelligence is revolutionizing how businesses operate. Our AI automation solutions streamline repetitive processes, boost efficiency, and empower smarter decision-making—allowing businesses to focus on what matters most: growth.",
      benefits: [
        {
          title: "Process Automation",
          description: "Automate manual workflows such as data entry, lead generation, and customer support, saving time and reducing human error."
        },
        {
          title: "Business Growth",
          description: "With intelligent systems handling operations, businesses can scale faster and focus on strategic initiatives."
        },
        {
          title: "n8n Engine",
          description: "We leverage n8n, a powerful open-source automation tool, to create custom workflows that connect your apps, services, and data without the need for extensive coding."
        },
        {
          title: "Smart Decisions",
          description: "By integrating AI with your systems, we enable real-time data analysis, predictive insights, and automated decision-making that gives your business a competitive edge."
        }
      ]
    }
  ];

  return (
    <section className="min-h-screen py-24 px-6 bg-transparent overflow-hidden">
      {/* Glassmorphic/Blurred Gradient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-purple-700/30 to-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-blue-700/30 to-purple-500/20 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link href="/#services">
            <Button
              variant="outline"
              className="bg-white hover:text-white hover:bg-gray-700 text-black px-8 py-4 text-lg font-semibold rounded-full shadow-xl transition-all duration-300 border-none font-manrope"
            >
              <ArrowLeft size={16} />
              Back to Services
            </Button>
          </Link>
        </motion.div>

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight font-inter drop-shadow-lg">
            Detailed{" "}
            <span className="text-white">
              Information
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-4xl mx-auto font-manrope drop-shadow-md">
            Explore our comprehensive services and discover how we can transform your business
          </p>
        </motion.div>

        {/* Services Content */}
        <div className="space-y-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl ring-1 ring-white/10"
              >
                {/* Service Header */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-6 bg-gradient-to-br from-blue-700/80 to-purple-700/80 rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg flex-shrink-0"
                  >
                    <IconComponent className="w-10 h-10 text-white drop-shadow-md" />
                  </motion.div>
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-manrope drop-shadow">
                      {service.title}
                    </h2>
                    <p className="text-lg text-white/90 leading-relaxed font-inter">
                      {service.description}
                    </p>
                    {service.subtitle && (
                      <p className="text-base text-white/80 mt-4 leading-relaxed font-inter">
                        {service.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.highlights && service.highlights.map((highlight, highlightIndex) => (
                    <motion.div
                      key={highlightIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: highlightIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                    >
                      <h3 className="text-xl font-semibold text-white mb-3 font-manrope">
                        {highlight.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed font-inter">
                        {highlight.description}
                      </p>
                    </motion.div>
                  ))}

                  {service.services && service.services.map((serviceItem, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                    >
                      <h3 className="text-xl font-semibold text-white mb-3 font-manrope">
                        {serviceItem.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed font-inter">
                        {serviceItem.description}
                      </p>
                    </motion.div>
                  ))}

                  {service.benefits && service.benefits.map((benefit, benefitIndex) => (
                    <motion.div
                      key={benefitIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: benefitIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                    >
                      <h3 className="text-xl font-semibold text-white mb-3 font-manrope">
                        {benefit.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed font-inter">
                        {benefit.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Button
            size="lg"
            className="bg-white hover:text-white hover:bg-gray-700 text-black px-8 py-4 text-lg font-semibold rounded-full shadow-xl transition-all duration-300 border-none font-manrope"
          >
            Get a Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DetailedInformation; 