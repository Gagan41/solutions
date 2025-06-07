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

  const analyzeWebsite = async () => {
    if (!url) return;

    setIsAnalyzing(true);

    // Simulate analysis (in real implementation, you'd call actual APIs)
    setTimeout(() => {
      const seoIssues = [
        "Missing meta descriptions on 3 pages",
        "No SSL certificate detected",
        "Slow server response time",
        "Missing alt tags on images",
        "No structured data markup",
      ];

      const uiuxIssues = [
        "Poor mobile responsiveness",
        "Inconsistent color scheme",
        "Low contrast text elements",
        "Missing accessibility features",
        "Cluttered navigation menu",
      ];

      const seoRecommendations = [
        "Add meta descriptions to improve SEO",
        "Enable GZIP compression",
        "Implement lazy loading for images",
        "Add structured data markup",
        "Optimize page loading speed",
      ];

      const uiuxRecommendations = [
        "Implement responsive design patterns",
        "Improve color contrast ratios",
        "Add ARIA labels for accessibility",
        "Simplify navigation structure",
        "Optimize user flow and CTAs",
      ];

      const mockResult: AuditResult = {
        score: Math.floor(Math.random() * 40) + 60, // 60-100
        issues: (auditType === "seo" ? seoIssues : uiuxIssues).slice(
          0,
          Math.floor(Math.random() * 4) + 1,
        ),
        recommendations: (auditType === "seo"
          ? seoRecommendations
          : uiuxRecommendations
        ).slice(0, 4),
        loadTime: Math.random() * 3 + 1,
      };
      setResult(mockResult);
      setIsAnalyzing(false);
    }, 3000);
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
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-obsidian-900 mb-4">
            Free Website{" "}
            <span className="bg-gradient-to-r from-gold-500 to-gold-600 bg-clip-text text-transparent">
              Audit Tool
            </span>
          </h2>
          <p className="text-xl text-obsidian-600 max-w-2xl mx-auto">
            Get an instant analysis of your website's performance, SEO, and user
            experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-xl border border-platinum-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-obsidian-900">
                Enter Your Website URL
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Input
                    type="url"
                    placeholder="https://yourwebsite.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="flex-1"
                  />
                  <Select value={auditType} onValueChange={setAuditType}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="seo">SEO Audit</SelectItem>
                      <SelectItem value="uiux">UI/UX Audit</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  onClick={analyzeWebsite}
                  disabled={!url || isAnalyzing}
                  className="w-full bg-obsidian-800 hover:bg-obsidian-900"
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
                  <div className="inline-flex items-center gap-2 text-obsidian-600">
                    <Zap className="w-5 h-5 animate-pulse" />
                    <span>Analyzing your website...</span>
                  </div>
                  <Progress value={33} className="mt-4 max-w-md mx-auto" />
                </motion.div>
              )}

              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {/* Score Display */}
                  <div className="text-center py-6 bg-platinum-50 rounded-lg">
                    <div
                      className={`text-6xl font-bold ${getScoreColor(result.score)} mb-2`}
                    >
                      {result.score}
                    </div>
                    <div className="text-xl text-obsidian-700">
                      {getScoreLabel(result.score)}
                    </div>
                    <div className="text-sm text-obsidian-500 mt-2">
                      Load time: {result.loadTime.toFixed(1)}s
                    </div>
                  </div>

                  {/* Issues Found */}
                  <div>
                    <h3 className="text-lg font-semibold text-obsidian-900 mb-3 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-red-500" />
                      Issues Found
                    </h3>
                    <ul className="space-y-2">
                      {result.issues.map((issue, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-obsidian-600"
                        >
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                          {issue}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recommendations */}
                  <div>
                    <h3 className="text-lg font-semibold text-obsidian-900 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Recommendations
                    </h3>
                    <ul className="space-y-2">
                      {result.recommendations.map((rec, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-obsidian-600"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Lead Capture */}
                  <div className="bg-gradient-to-r from-obsidian-800 to-obsidian-900 rounded-lg p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">
                      Get Your Detailed Report
                    </h3>
                    <p className="text-platinum-200 mb-4">
                      Enter your email to receive a comprehensive audit report
                      with actionable steps.
                    </p>
                    <div className="flex gap-3 mb-4">
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 bg-white text-obsidian-900"
                      />
                      <Button className="bg-gold-600 hover:bg-gold-700 text-white">
                        Get Report
                      </Button>
                    </div>
                    <div className="text-center">
                      <p className="text-platinum-300 text-sm mb-3">
                        Want a full report? Let's chat!
                      </p>
                      <Button
                        onClick={() => {
                          const message = encodeURIComponent(
                            `Hi! I just completed a ${auditType === "seo" ? "SEO" : "UI/UX"} audit for ${url} and would like a detailed report. Can you help?`,
                          );
                          window.open(
                            `https://wa.me/1234567890?text=${message}`,
                            "_blank",
                          );
                        }}
                        className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
                      >
                        <MessageSquare className="w-4 h-4" />
                        Chat on WhatsApp
                      </Button>
                    </div>
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
