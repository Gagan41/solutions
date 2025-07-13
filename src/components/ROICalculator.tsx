"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  TrendingUp,
  DollarSign,
  Users,
  ArrowRight,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Add custom styles for the slider thumb
const sliderStyles =
  "w-full [&>span]:bg-white [&>span]:rounded-full [&>span]:border-0 [&>div]:bg-slate-200 [&>div]:h-1";

interface ROIData {
  monthlyTraffic: number;
  conversionRate: number;
  averageOrderValue: number;
  currentRevenue: number;
  projectedTrafficIncrease: number;
  projectedConversionIncrease: number;
  projectedRevenue: number;
  monthlyROI: number;
  yearlyROI: number;
}

const ROICalculator = () => {
  const [monthlyTraffic, setMonthlyTraffic] = useState([5000]);
  const [conversionRate, setConversionRate] = useState([2]);
  const [averageOrderValue, setAverageOrderValue] = useState([100]);
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const calculateROI = (): ROIData => {
    const traffic = monthlyTraffic[0];
    const conversion = conversionRate[0] / 100;
    const aov = averageOrderValue[0];

    const currentRevenue = traffic * conversion * aov;

    // Conservative projections based on typical improvements
    const projectedTrafficIncrease = 0.4; // 40% traffic increase
    const projectedConversionIncrease = 0.25; // 25% conversion increase

    const newTraffic = traffic * (1 + projectedTrafficIncrease);
    const newConversion = conversion * (1 + projectedConversionIncrease);
    const projectedRevenue = newTraffic * newConversion * aov;

    const monthlyROI = projectedRevenue - currentRevenue;
    const yearlyROI = monthlyROI * 12;

    return {
      monthlyTraffic: traffic,
      conversionRate: conversion * 100,
      averageOrderValue: aov,
      currentRevenue,
      projectedTrafficIncrease: projectedTrafficIncrease * 100,
      projectedConversionIncrease: projectedConversionIncrease * 100,
      projectedRevenue,
      monthlyROI,
      yearlyROI,
    };
  };

  const roiData = calculateROI();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (value && !validateEmail(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleGetPlan = async () => {
    if (!email.trim()) {
      setEmailError("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/roi-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          roiData: roiData,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setEmail("");
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 3000);
      } else {
        setSubmitStatus("error");
        if (data.message === "Email already registered") {
          setEmailError("This email is already registered");
        } else {
          setEmailError(data.message || "Failed to submit email");
        }
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 3000);
      }
    } catch (error) {
      console.error("Error submitting ROI email:", error);
      setSubmitStatus("error");
      setEmailError("Failed to submit email. Please try again.");
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Gradient/Blur overlays for depth */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-blue-700/30 to-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-blue-700/30 to-purple-500/20 rounded-full blur-3xl" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-14 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-snug text-white drop-shadow-lg font-inter mb-4">
            ROI{" "}
            <span className="text-white">
              Calculator
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-manrope drop-shadow-md">
            See how much revenue you could generate with our digital marketing
            services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Card className="border-none bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white font-bold font-inter drop-shadow">
                  <Calculator className="w-5 h-5" />
                  Your Current Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <Label className="text-sm font-medium text-white/80 font-manrope">
                    Monthly Website Traffic
                  </Label>
                  <div className="mt-2">
                    <Slider
                      value={monthlyTraffic}
                      onValueChange={setMonthlyTraffic}
                      max={50000}
                      min={1000}
                      step={500}
                      className={sliderStyles}
                    />
                    <div className="flex justify-between text-sm text-white/60 mt-1 font-inter">
                      <span>1K</span>
                      <span className="font-medium text-white">
                        {monthlyTraffic[0].toLocaleString()} visitors
                      </span>
                      <span>50K</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium text-white/80 font-manrope">
                    Conversion Rate (%)
                  </Label>
                  <div className="mt-2">
                    <Slider
                      value={conversionRate}
                      onValueChange={setConversionRate}
                      max={10}
                      min={0.5}
                      step={0.1}
                      className={sliderStyles}
                    />
                    <div className="flex justify-between text-sm text-white/60 mt-1 font-inter">
                      <span>0.5%</span>
                      <span className="font-medium text-white">
                        {conversionRate[0]}%
                      </span>
                      <span>10%</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium text-white/80 font-manrope">
                    Average Order Value (₹)
                  </Label>
                  <div className="mt-2">
                    <Slider
                      value={averageOrderValue}
                      onValueChange={setAverageOrderValue}
                      max={1000}
                      min={25}
                      step={25}
                      className={sliderStyles}
                    />
                    <div className="flex justify-between text-sm text-white/60 mt-1 font-inter">
                      <span>₹25</span>
                      <span className="font-medium text-white">
                        ₹{averageOrderValue[0]}
                      </span>
                      <span>₹1,000</span>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleCalculate}
                  className="w-full bg-white hover:text-white hover:bg-black text-black px-8 py-3 rounded-xl font-bold shadow-lg focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none font-inter"
                >
                  Calculate My ROI
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="border-none bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white font-bold font-inter drop-shadow">
                  <TrendingUp className="w-5 h-5" />
                  Projected Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                {showResults ? (
                  <Tabs defaultValue="monthly" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 bg-white/10 rounded-xl">
                      <TabsTrigger
                        value="monthly"
                        className="data-[state=active]:bg-white data-[state=active]:text-black rounded-xl font-bold font-inter focus:outline-none focus:ring-0 focus:bg-white focus:text-black transition-all duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-0 focus-visible:bg-transparent"
                      >
                        Monthly
                      </TabsTrigger>
                      <TabsTrigger
                        value="yearly"
                        className="data-[state=active]:bg-white data-[state=active]:text-black rounded-xl font-bold font-inter focus:outline-none focus:ring-0 focus:bg-white focus:text-black transition-all duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-0 focus-visible:bg-transparent"
                      >
                        Yearly
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="monthly" className="space-y-4 mt-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-white/10 rounded-xl shadow-inner">
                          <DollarSign className="w-6 h-6 text-blue-300 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-white font-inter drop-shadow">
                            {formatCurrency(roiData.currentRevenue)}
                          </div>
                          <div className="text-sm text-white/70 font-manrope">
                            Current Revenue
                          </div>
                        </div>

                        <div className="text-center p-4 bg-white/10 rounded-xl shadow-inner">
                          <TrendingUp className="w-6 h-6 text-purple-300 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-white font-inter drop-shadow">
                            {formatCurrency(roiData.projectedRevenue)}
                          </div>
                          <div className="text-sm text-white font-manrope">
                            Projected Revenue
                          </div>
                        </div>
                      </div>

                      <div className="text-center p-6 bg-trasnparent rounded-xl shadow-lg">
                        <div className="text-3xl font-bold text-white font-inter mb-2 drop-shadow">
                          {formatCurrency(roiData.monthlyROI)}
                        </div>
                        <div className="text-white/80 font-medium font-manrope">
                          Additional Monthly Revenue
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="yearly" className="space-y-4 mt-6">
                      <div className="text-center p-8 bg-trasparent rounded-xl text-white shadow-lg">
                        <div className="text-4xl font-bold mb-2 font-inter drop-shadow">
                          {formatCurrency(roiData.yearlyROI)}
                        </div>
                        <div className="text-white/80 font-medium mb-4 font-manrope">
                          Additional Yearly Revenue
                        </div>
                        <div className="text-sm text-white/60 font-inter">
                          Based on {roiData.projectedTrafficIncrease}% traffic
                          increase and {roiData.projectedConversionIncrease}%
                          conversion improvement
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-white/10 rounded-xl shadow-inner">
                          <Users className="w-6 h-6 text-blue-300 mx-auto mb-2" />
                          <div className="text-xl font-bold text-white font-inter drop-shadow">
                            +{roiData.projectedTrafficIncrease}%
                          </div>
                          <div className="text-sm text-white/70 font-manrope">
                            Traffic Growth
                          </div>
                        </div>

                        <div className="text-center p-4 bg-white/10 rounded-xl shadow-inner">
                          <TrendingUp className="w-6 h-6 text-purple-300 mx-auto mb-2" />
                          <div className="text-xl font-bold text-white font-inter drop-shadow">
                            +{roiData.projectedConversionIncrease}%
                          </div>
                          <div className="text-sm text-white/70 font-manrope">
                            Conversion Boost
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                ) : (
                  <div className="text-center py-12 text-white/60 font-inter">
                    <Calculator className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>
                      Adjust your metrics and click "Calculate My ROI" to see
                      your potential results.
                    </p>
                  </div>
                )}

                {showResults && (
                  <div className="mt-6 p-4 bg-white/10 rounded-xl shadow-inner">
                    <h4 className="font-semibold text-white font-inter mb-2 drop-shadow">
                      Get Your Detailed Growth Plan
                    </h4>
                    <p className="text-sm text-white/70 font-manrope mb-3">
                      See exactly how we'll achieve these results for your
                      business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <div className="flex-1">
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={handleEmailChange}
                          className={`bg-white/80 text-obsidian-900 rounded-lg focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none ${
                            emailError ? "border-red-500" : ""
                          }`}
                          aria-label="Email address"
                        />
                        {emailError && (
                          <p className="text-red-400 text-xs mt-1 font-manrope">
                            {emailError}
                          </p>
                        )}
                      </div>
                      <Button
                        onClick={handleGetPlan}
                        className={`font-bold rounded-xl shadow-md focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none transition-all duration-300 ${
                          submitStatus === "success"
                            ? "bg-green-600 hover:bg-green-700"
                            : submitStatus === "error"
                              ? "bg-red-600 hover:bg-red-700"
                              : "bg-white text-black hover:bg-black hover:text-white"
                        }`}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <svg
                              className="animate-spin h-5 w-5 mr-3 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.163 0 1 5.163 1 12s5.163 12 12 12 12-5.163 12-12S18.837 0 12 0v4c3.305 0 6.305 1.163 8.837 3.163z"
                              ></path>
                            </svg>
                            Submitting...
                          </div>
                        ) : submitStatus === "success" ? (
                          <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 mr-2" />
                            Sent!
                          </div>
                        ) : submitStatus === "error" ? (
                          <div className="flex items-center">
                            <AlertCircle className="h-5 w-5 mr-2" />
                            Error
                          </div>
                        ) : (
                          "Get Plan"
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
