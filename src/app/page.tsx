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

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
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
      <Footer />
      <StickyCTA />
      <ExitIntentPopup />
    </div>
  );
}
