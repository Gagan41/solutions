"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Web Development",
    "Digital Marketing",
    "SEO Services",
    "AI Automation",
  ];

  return (
    <footer
      id="contact"
      className="z-10 text-white pt-16 pb-8 px-6 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* Gradient/Blur overlays for depth */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-blue-700/30 to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-blue-700/30 to-purple-500/20 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-extrabold font-inter tracking-tight mb-4 drop-shadow-lg">
              Coutinex Webstudio
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed font-manrope drop-shadow-sm">
              Your trusted partner for digital transformation. We create
              exceptional web experiences and drive business growth through
              innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/10 backdrop-blur-lg rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors duration-300 shadow-md focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                    aria-label={social.label}
                  >
                    <IconComponent size={18} className="text-white/80" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold font-inter mb-4 drop-shadow">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white font-manrope transition-colors duration-200 flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold font-inter mb-4 drop-shadow">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-white/70 font-manrope">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold font-inter mb-4 drop-shadow">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/80 font-manrope">
                <Mail size={18} className="text-white/50" />
                <span>cortinexwebstudio@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/80 font-manrope">
                <Phone size={18} className="text-white/50" />
                <span>+(91) 636-172-5397</span>
              </div>
              <div className="flex items-center gap-3 text-white/80 font-manrope">
                <MapPin size={18} className="text-white/50" />
                <span>Bengaluru,India</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-12 pt-8 text-center relative z-10"
        >
          <p className="text-white/60 font-manrope">
            © 2024 Courtinex Webstudio. All rights reserved. Built with passion
            for digital excellence.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
