"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, PhoneCall, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const StickyCTA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const handleWhatsAppClick = () => {
    const whatsappMessage = encodeURIComponent(
      "Hi! I'm interested in your digital services. Can we discuss my project?",
    );
    window.open(`https://wa.me/1234567890?text=${whatsappMessage}`, "_blank");
    setIsOpen(false);
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Callback request:", { name, email, phone, message });
    alert("Thank you! We'll call you back within 24 hours.");
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative"
          >
            <Button
              size="lg"
              className="h-14 w-14 rounded-full bg-gradient-to-r from-obsidian-800 to-obsidian-900 hover:from-obsidian-900 hover:to-obsidian-800 text-white shadow-2xl border-2 border-white"
            >
              <MessageSquare className="h-6 w-6" />
            </Button>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full"
            />
          </motion.div>
        </PopoverTrigger>

        <PopoverContent
          className="w-80 p-0 bg-white border border-platinum-200 shadow-2xl"
          side="top"
          align="end"
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-obsidian-900">
                Let's Connect!
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-6 w-6 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <p className="text-sm text-obsidian-600 mb-6">
              Choose how you'd like to get in touch with us:
            </p>

            <div className="space-y-3">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 h-12"
                >
                  <MessageSquare className="h-5 w-5" />
                  Chat on WhatsApp
                </Button>
              </motion.div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-platinum-200" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-obsidian-500">or</span>
                </div>
              </div>

              <form onSubmit={handleCallbackSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="name" className="text-xs text-obsidian-700">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      required
                      className="h-9"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="phone"
                      className="text-xs text-obsidian-700"
                    >
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Your phone"
                      required
                      className="h-9"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-xs text-obsidian-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="h-9"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="message"
                    className="text-xs text-obsidian-700"
                  >
                    Message (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your project..."
                    className="h-20 resize-none"
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-obsidian-800 hover:bg-obsidian-900 text-white flex items-center gap-2 h-10"
                  >
                    <PhoneCall className="h-4 w-4" />
                    Request Callback
                  </Button>
                </motion.div>
              </form>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default StickyCTA;
