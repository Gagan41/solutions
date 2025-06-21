"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  CheckCircle,
  AlertCircle,
  Clock,
  Zap,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AuditResult {
  score: number;
  issues: string[];
  recommendations: string[];
  loadTime: number;
}

const WebsiteAuditTool = () => {
  const [url, setUrl] = useState("");
  const [auditType, setAuditType] = useState("seo");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [email, setEmail] = useState("");
  const [isSubmittingEmail, setIsSubmittingEmail] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const analyzeWebsite = async () => {
    if (!url) return;
    setIsAnalyzing(true);
    setResult(null);

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, auditType }),
      });

      const data = await res.json();

      if (res.ok) {
        setResult(data);
      } else {
        throw new Error(data.error || "Failed");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to analyze website. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleEmailSubmit = async () => {
    if (!email || !result) return;

    setIsSubmittingEmail(true);

    try {
      const res = await fetch("/api/audit-report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          url,
          auditType,
          auditResult: result,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setEmailSubmitted(true);
        alert("Thank you! We'll send your detailed report soon.");
        setEmail(""); // Clear the email field
      } else {
        throw new Error(data.message || "Failed to submit email");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to submit email. Please try again.");
    } finally {
      setIsSubmittingEmail(false);
    }
  };

  const resetEmailForm = () => {
    setEmailSubmitted(false);
    setEmail("");
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return "Excellent";
    if (score >= 60) return "Good";
    return "Needs Improvement";
  };

  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-snug text-white drop-shadow-lg font-inter mb-4">
            Free Website{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Audit Tool
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-manrope drop-shadow-md">
            Get an instant analysis of your website's performance, SEO, and user
            experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="relative z-10 border-none bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl px-0 py-0 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute -top-16 -left-16 w-72 h-72 bg-gradient-to-br from-blue-700/30 to-purple-500/20 rounded-full blur-2xl" />
              <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tr from-blue-700/20 to-purple-500/10 rounded-full blur-2xl" />
            </div>
            <CardHeader className="text-center relative z-10">
              <CardTitle className="text-2xl md:text-3xl font-bold text-white font-inter drop-shadow">
                Enter Your Website URL
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 relative z-10 px-6 sm:px-8 lg:px-12 py-8">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <Input
                    type="url"
                    placeholder="https://yourwebsite.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="flex-1 bg-white/80 text-obsidian-900 rounded-lg focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                    aria-label="Website URL"
                  />
                  <Select value={auditType} onValueChange={setAuditType}>
                    <SelectTrigger className="w-full md:w-40 bg-white/90 rounded-lg focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none border-white/50 data-[state=open]:bg-white/90 data-[state=closed]:bg-white/90 hover:bg-white/90 focus:bg-white/90">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white/90 rounded-lg border-2 border-white/50">
                      <SelectItem
                        value="seo"
                        className="focus:bg-blue-400/30 focus:text-blue-800 hover:bg-blue-400/30 hover:text-blue-800"
                      >
                        SEO Audit
                      </SelectItem>
                      <SelectItem
                        value="uiux"
                        className="focus:bg-blue-400/30 focus:text-blue-800 hover:bg-blue-400/30 hover:text-blue-800"
                      >
                        UI/UX Audit
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  onClick={analyzeWebsite}
                  disabled={!url || isAnalyzing}
                  className="w-full bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-xl shadow-lg focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none transition-all duration-300"
                  aria-label="Get Free Audit"
                >
                  {isAnalyzing ? (
                    <>
                      <Clock className="w-4 h-4 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4 mr-2" />
                      Get Free {auditType === "seo" ? "SEO" : "UI/UX"} Audit
                    </>
                  )}
                </Button>
              </div>

              {isAnalyzing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8"
                >
                  <div className="inline-flex items-center gap-2 text-white/80">
                    <Zap className="w-5 h-5 animate-pulse" />
                    <span>Analyzing your website...</span>
                  </div>
                  <Progress
                    value={33}
                    className="mt-4 max-w-md mx-auto bg-white/20"
                  />
                </motion.div>
              )}

              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="space-y-8"
                >
                  {/* Score Display */}
                  <div className="text-center py-6 bg-white/10 rounded-xl shadow-inner">
                    <div
                      className={`text-6xl font-extrabold font-inter mb-2 drop-shadow-lg ${getScoreColor(result.score)}`}
                    >
                      {result.score}
                    </div>
                    <div className="text-xl text-white/90 font-manrope font-medium">
                      {getScoreLabel(result.score)}
                    </div>
                    <div className="text-sm text-white/60 mt-2">
                      Load time: {result.loadTime.toFixed(1)}s
                    </div>
                  </div>

                  {/* Issues Found */}
                  <div>
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-3 font-inter">
                      <AlertCircle className="w-5 h-5 text-red-400" />
                      Issues Found
                    </h3>
                    <ul className="space-y-2">
                      {result.issues.map((issue, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-white/80 font-manrope"
                        >
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                          {issue}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recommendations */}
                  <div>
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-3 font-inter">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Recommendations
                    </h3>
                    <ul className="space-y-2">
                      {result.recommendations.map((rec, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-white/80 font-manrope"
                        >
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Lead Capture */}
                  <div className="bg-gradient-to-r from-blue-900/80 to-purple-900/80 rounded-xl p-6 text-white shadow-lg mt-8">
                    <h3 className="text-xl font-semibold mb-2 font-inter">
                      Get Your Detailed Report
                    </h3>
                    <p className="text-white/70 mb-4 font-manrope">
                      Enter your email to receive a comprehensive audit report
                      with actionable steps.
                    </p>

                    {emailSubmitted ? (
                      <div className="text-center py-4">
                        <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-2" />
                        <p className="text-green-300 font-medium">
                          Email submitted successfully!
                        </p>
                        <p className="text-white/60 text-sm mt-1">
                          We'll send your detailed report soon.
                        </p>
                        <Button
                          onClick={resetEmailForm}
                          variant="outline"
                          className="mt-3 text-white bg-transparent"
                        >
                          Submit Another Email
                        </Button>
                      </div>
                    ) : (
                      <>
                        <div className="flex flex-col sm:flex-row gap-3 mb-4">
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isSubmittingEmail}
                            className="flex-1 bg-white/80 text-obsidian-900 rounded-lg focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none disabled:opacity-50"
                            aria-label="Email address"
                          />
                          <Button
                            onClick={handleEmailSubmit}
                            disabled={!email || isSubmittingEmail}
                            className="bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-xl shadow-md focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none transition-all duration-300 disabled:opacity-50"
                            aria-label="Submit Email"
                          >
                            {isSubmittingEmail ? (
                              <>
                                <Clock className="w-4 h-4 mr-2 animate-spin" />
                                Submitting...
                              </>
                            ) : (
                              "Get Report"
                            )}
                          </Button>
                        </div>
                        <div className="text-center">
                          <p className="text-white/60 text-sm mb-3 font-manrope">
                            Want a full report? Let's chat!
                          </p>
                          <Button
                            onClick={() => {
                              const message = encodeURIComponent(
                                `Hi! I just completed a ${auditType === "seo" ? "SEO" : "UI/UX"} audit for ${url} and would like a detailed report. Can you help?`
                              );
                              window.open(
                                `https://wa.me/916361725397?text=${message}`,
                                "_blank"
                              );
                            }}
                            className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 rounded-xl font-manrope shadow-md focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:outline-none"
                            aria-label="Chat on WhatsApp"
                          >
                            <MessageSquare className="w-4 h-4" />
                            Chat on WhatsApp
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default WebsiteAuditTool;
