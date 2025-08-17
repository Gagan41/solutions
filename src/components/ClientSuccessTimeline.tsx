"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const embeds = {
  pizza: (
    <iframe
      style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
      width="800"
      height="450"
      src="https://embed.figma.com/proto/5nuEMCjWge5igWIYZddmQr/Untitled?node-id=12-102&starting-point-node-id=8%3A3&embed-host=share"
      allowFullScreen
    ></iframe>
  ),
  scooter: (
    <iframe
      style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
      width="800"
      height="450"
      src="https://embed.figma.com/proto/9C4cmJlboFNNFumrkwaYnB/E-bike_Web_UI_Design_Prj_by_Nikhil_Pawar-1-?node-id=1-2&starting-point-node-id=1%3A2&embed-host=share"
      allowFullScreen
    ></iframe>
  ),
};

const ClientSuccessTimeline = () => {
  const [selectedEmbed, setSelectedEmbed] = useState<
    "pizza" | "scooter" | null
  >(null);

  return (
    <section className="relative py-24 px-6 sm:px-12 lg:px-24 bg-black text-white text-center min-h-screen">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold mb-10"
      >
        Explore Our UI Case Studies
      </motion.h2>

      {/* Figma Prototypes */}
      <div className="flex flex-wrap justify-center gap-10 mb-12">
        {[
          {
            id: "pizza",
            label: "Pizza Delivery App",
            src: "/images/pizza.png",
          },
          {
            id: "scooter",
            label: "E-Bike Dashboard",
            src: "/images/scooter.png",
          },
        ].map(({ id, label, src }) => (
          <motion.div
            key={id}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer group transition-all duration-300 rounded-xl bg-white/5 backdrop-blur-md hover:shadow-2xl hover:ring-2 hover:ring-purple-400"
            onClick={() => setSelectedEmbed(id as "pizza" | "scooter")}
          >
            <Image
              src={src}
              alt={label}
              width={300}
              height={200}
              className="rounded-t-xl object-cover"
              placeholder="blur"
              blurDataURL="/images/blur-placeholder.png"
              loading="lazy"
            />
            <div className="p-4">
              <p className="text-lg font-medium">{label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Website Links Section */}
      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl font-semibold mb-8"
      >
        Explore Our Live Websites
      </motion.h3>

      <div className="flex flex-wrap justify-center gap-10 mb-12">
        {[
          {
            id: "ecom",
            label: "E-Commerce Website",
            src: "/images/ecom.png",
            link: "http://flipzon.cortinex-webstudio.com", 
          },
          {
            id: "portfolio",
            label: "Portfolio Website",
            src: "/images/portfolio.png",
            link: "http://portfolio.cortinex-webstudio.com", 
          },
        ].map(({ id, label, src, link }) => (
          <motion.a
            key={id}
            href={link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="group transition-all duration-300 rounded-xl bg-white/5 backdrop-blur-md hover:shadow-2xl hover:ring-2 hover:ring-green-400"
          >
            <Image
              src={src}
              alt={label}
              width={300}
              height={200}
              className="rounded-t-xl object-cover"
              placeholder="blur"
              blurDataURL="/images/blur-placeholder.png"
              loading="lazy"
            />
            <div className="p-4">
              <p className="text-lg font-medium">{label}</p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Modal Overlay with Embed */}
      <AnimatePresence>
        {selectedEmbed && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative bg-white p-4 rounded-xl shadow-2xl max-w-5xl w-full overflow-auto">
              <button
                className="absolute top-3 right-3 text-black hover:text-red-500 transition"
                onClick={() => setSelectedEmbed(null)}
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex justify-center items-center">
                {embeds[selectedEmbed]}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ClientSuccessTimeline;
