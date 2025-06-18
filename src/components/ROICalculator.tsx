"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  TrendingUp,
  DollarSign,
  Users,
  ArrowRight,
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
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleCalculate = () => {
    setShowResults(true);
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
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
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
                    Average Order Value ($)
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
                      <span>$25</span>
                      <span className="font-medium text-white">
                        ${averageOrderValue[0]}
                      </span>
                      <span>$1,000</span>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleCalculate}
                  className="w-full bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-xl shadow-lg focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none transition-all duration-300"
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
                        className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-700 data-[state=active]:to-purple-700 data-[state=active]:text-white rounded-xl font-bold font-inter focus:outline-none focus:ring-0 focus:bg-transparent focus:text-white/80 transition-all duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-0 focus-visible:bg-transparent"
                      >
                        Monthly
                      </TabsTrigger>
                      <TabsTrigger
                        value="yearly"
                        className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-700 data-[state=active]:to-purple-700 data-[state=active]:text-white rounded-xl font-bold font-inter focus:outline-none focus:ring-0 focus:bg-transparent focus:text-white/80 transition-all duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-0 focus-visible:bg-transparent"
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
                          <div className="text-sm text-white/70 font-manrope">
                            Projected Revenue
                          </div>
                        </div>
                      </div>

                      <div className="text-center p-6 bg-gradient-to-r from-blue-900/80 to-purple-900/80 rounded-xl shadow-lg">
                        <div className="text-3xl font-bold text-white font-inter mb-2 drop-shadow">
                          {formatCurrency(roiData.monthlyROI)}
                        </div>
                        <div className="text-white/80 font-medium font-manrope">
                          Additional Monthly Revenue
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="yearly" className="space-y-4 mt-6">
                      <div className="text-center p-8 bg-gradient-to-r from-blue-900/80 to-purple-900/80 rounded-xl text-white shadow-lg">
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
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 bg-white/80 text-obsidian-900 rounded-lg focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                        aria-label="Email address"
                      />
                      <Button className="bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-xl shadow-md focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none transition-all duration-300">
                        Get Plan
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
