"use client";

import HeroIntro from "@/components/HeroIntro";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WebsiteAuditTool from "@/components/WebsiteAuditTool";
import MicroBlog from "@/components/MicroBlog";
import LiveProjectShowcase from "@/components/LiveProjectShowcase";
import ROICalculator from "@/components/ROICalculator";
import ClientSuccessTimeline from "@/components/ClientSuccessTimeline";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is web development and AI automation expensive?",
      answer: "No, our web development and AI automation services are cost-effective and deliver excellent value for your investment."
    },
    {
      question: "Does your agency build e-commerce websites?",
      answer: "Yes, we specialize in developing e-commerce websites that combine stunning visuals with creative functionality to help your business grow."
    },
    {
      question: "Can you work on frontend development only?",
      answer: "Absolutely! We deliver visually appealing and user-friendly frontend solutions tailored to your customers' needs."
    },
    {
      question: "Do you offer Figma design services?",
      answer: "Yes, we create innovative and attractive web designs in Figma, ensuring your brand stands out online."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <HeroIntro />
      <div className="min-h-screen w-full overflow-x-hidden bg-black">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <div data-section="audit">
          <WebsiteAuditTool />
        </div>
        <MicroBlog />
        <LiveProjectShowcase />
        <ROICalculator />
        <ClientSuccessTimeline />
        {/* FAQ Section */}
        <div className="my-12 max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center text-white/90">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/10 transition-colors duration-200"
                >
                  <h3 className="text-xl font-semibold text-white pr-4">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-white flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-white flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <Footer />
        <StickyCTA />
        <ExitIntentPopup />
      </div>
    </>
  );
}
