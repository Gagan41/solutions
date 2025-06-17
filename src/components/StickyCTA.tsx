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
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [buttonState, setButtonState] = useState<'default' | 'success' | 'error'>('default');

  const validateEmail = (email: string) => {
    return email.toLowerCase().endsWith('@gmail.com');
  };

  const handleWhatsAppClick = () => {
    const whatsappMessage = encodeURIComponent(
      "Hi! I'm interested in your digital services. Can we discuss my project?"
    );
    window.open(`https://wa.me/916361725397?text=${whatsappMessage}`, "_blank");
    setIsOpen(false);
  };

  const handleCallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone number
    if (phone.length !== 10) {
      setPhoneError("Please enter a valid 10-digit phone number");
      return;
    }
    setPhoneError("");

    // Validate email
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid Gmail address");
      return;
    }
    setEmailError("");

    setButtonState('default');

    try {
      const response = await fetch('/api/callback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const data = await response.json();
      
      if (data.success) {
        setButtonState('success');
        setTimeout(() => {
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          setIsOpen(false);
          setButtonState('default');
        }, 2000);
      } else {
        setButtonState('error');
        setTimeout(() => {
          setButtonState('default');
        }, 2000);
      }
    } catch (error) {
      console.error('Error submitting callback request:', error);
      setButtonState('error');
      setTimeout(() => {
        setButtonState('default');
      }, 2000);
    }
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
              className="h-14 w-14 rounded-full bg-gradient-to-r from-obsidian-800 to-obsidian-900 hover:from-obsidian-900 hover:to-obsidian-800 text-white shadow-2xl border-2 border-white flex flex-col items-center justify-center gap-0.5"
            >
              <PhoneCall className="h-5 w-5 mb-0.5 text-white" />
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
                    <Label htmlFor="name" className="text-xs text-slate-700">
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
                    <Label htmlFor="phone" className="text-xs text-slate-700">
                      Phone number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                        setPhone(value);
                        if (value.length !== 10) {
                          setPhoneError("Please enter a valid 10-digit phone number");
                        } else {
                          setPhoneError("");
                        }
                      }}
                      placeholder="Your number"
                      required
                      pattern="[0-9]{10}"
                      maxLength={10}
                      minLength={10}
                      className={`h-9 ${phoneError ? 'border-red-500' : ''}`}
                    />
                    {phoneError && (
                      <p className="text-red-500 text-xs mt-1">{phoneError}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-xs text-slate-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      const value = e.target.value;
                      setEmail(value);
                      if (value && !validateEmail(value)) {
                        setEmailError("Please enter a valid email address");
                      } else {
                        setEmailError("");
                      }
                    }}
                    placeholder="your@gmail.com"
                    required
                    className={`h-9 ${emailError ? 'border-red-500' : ''}`}
                  />
                  {emailError && (
                    <p className="text-red-500 text-xs mt-1">{emailError}</p>
                  )}
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
                    className={`w-full flex items-center gap-2 h-10 ${
                      buttonState === 'success'
                        ? 'bg-green-600 hover:bg-green-700'
                        : buttonState === 'error'
                        ? 'bg-red-600 hover:bg-red-700'
                        : 'bg-obsidian-800 hover:bg-obsidian-900'
                    } text-white`}
                    disabled={buttonState !== 'default'}
                  >
                    {buttonState === 'success' ? (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Sent
                      </>
                    ) : buttonState === 'error' ? (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Error
                      </>
                    ) : (
                      <>
                        <PhoneCall className="h-4 w-4" />
                        Request Callback
                      </>
                    )}
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
