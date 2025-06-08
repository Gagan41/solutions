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
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-obsidian-900 mb-4">
            ROI{" "}
            <span className="bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent">
              Calculator
            </span>
          </h2>
          <p className="text-xl text-obsidian-600 max-w-3xl mx-auto">
            See how much revenue you could generate with our digital marketing
            services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-sm border border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-obsidian-900">
                  <Calculator className="w-5 h-5" />
                  Your Current Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-sm font-medium text-obsidian-700">
                    Monthly Website Traffic
                  </Label>
                  <div className="mt-2">
                    <Slider
                      value={monthlyTraffic}
                      onValueChange={setMonthlyTraffic}
                      max={50000}
                      min={1000}
                      step={500}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-obsidian-500 mt-1">
                      <span>1K</span>
                      <span className="font-medium text-obsidian-700">
                        {monthlyTraffic[0].toLocaleString()} visitors
                      </span>
                      <span>50K</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium text-obsidian-700">
                    Conversion Rate (%)
                  </Label>
                  <div className="mt-2">
                    <Slider
                      value={conversionRate}
                      onValueChange={setConversionRate}
                      max={10}
                      min={0.5}
                      step={0.1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-obsidian-500 mt-1">
                      <span>0.5%</span>
                      <span className="font-medium text-obsidian-700">
                        {conversionRate[0]}%
                      </span>
                      <span>10%</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium text-obsidian-700">
                    Average Order Value ($)
                  </Label>
                  <div className="mt-2">
                    <Slider
                      value={averageOrderValue}
                      onValueChange={setAverageOrderValue}
                      max={1000}
                      min={25}
                      step={25}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-obsidian-500 mt-1">
                      <span>$25</span>
                      <span className="font-medium text-obsidian-700">
                        ${averageOrderValue[0]}
                      </span>
                      <span>$1,000</span>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleCalculate}
                  className="w-full bg-obsidian-800 hover:bg-obsidian-900 text-white"
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
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-sm border border-slate-200 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-obsidian-900">
                  <TrendingUp className="w-5 h-5" />
                  Projected Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                {showResults ? (
                  <Tabs defaultValue="monthly" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="monthly">Monthly</TabsTrigger>
                      <TabsTrigger value="yearly">Yearly</TabsTrigger>
                    </TabsList>

                    <TabsContent value="monthly" className="space-y-4 mt-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-slate-50 rounded-lg">
                          <DollarSign className="w-6 h-6 text-slate-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-slate-700">
                            {formatCurrency(roiData.currentRevenue)}
                          </div>
                          <div className="text-sm text-slate-600">
                            Current Revenue
                          </div>
                        </div>

                        <div className="text-center p-4 bg-slate-50 rounded-lg">
                          <TrendingUp className="w-6 h-6 text-slate-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-slate-700">
                            {formatCurrency(roiData.projectedRevenue)}
                          </div>
                          <div className="text-sm text-slate-600">
                            Projected Revenue
                          </div>
                        </div>
                      </div>

                      <div className="text-center p-6 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg">
                        <div className="text-3xl font-bold text-slate-700 mb-2">
                          {formatCurrency(roiData.monthlyROI)}
                        </div>
                        <div className="text-slate-600 font-medium">
                          Additional Monthly Revenue
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="yearly" className="space-y-4 mt-6">
                      <div className="text-center p-8 bg-gradient-to-r from-obsidian-800 to-obsidian-900 rounded-lg text-white">
                        <div className="text-4xl font-bold mb-2">
                          {formatCurrency(roiData.yearlyROI)}
                        </div>
                        <div className="text-platinum-200 font-medium mb-4">
                          Additional Yearly Revenue
                        </div>
                        <div className="text-sm text-platinum-300">
                          Based on {roiData.projectedTrafficIncrease}% traffic
                          increase and {roiData.projectedConversionIncrease}%
                          conversion improvement
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-slate-50 rounded-lg">
                          <Users className="w-6 h-6 text-slate-600 mx-auto mb-2" />
                          <div className="text-xl font-bold text-slate-700">
                            +{roiData.projectedTrafficIncrease}%
                          </div>
                          <div className="text-sm text-slate-600">
                            Traffic Growth
                          </div>
                        </div>

                        <div className="text-center p-4 bg-slate-50 rounded-lg">
                          <TrendingUp className="w-6 h-6 text-slate-600 mx-auto mb-2" />
                          <div className="text-xl font-bold text-slate-700">
                            +{roiData.projectedConversionIncrease}%
                          </div>
                          <div className="text-sm text-slate-600">
                            Conversion Boost
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                ) : (
                  <div className="text-center py-12 text-obsidian-500">
                    <Calculator className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>
                      Adjust your metrics and click "Calculate My ROI" to see
                      your potential results.
                    </p>
                  </div>
                )}

                {showResults && (
                  <div className="mt-6 p-4 bg-obsidian-50 rounded-lg">
                    <h4 className="font-semibold text-obsidian-900 mb-2">
                      Get Your Detailed Growth Plan
                    </h4>
                    <p className="text-sm text-obsidian-600 mb-3">
                      See exactly how we'll achieve these results for your
                      business.
                    </p>
                    <div className="flex gap-2">
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1"
                      />
                      <Button className="bg-slate-600 hover:bg-slate-700">
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
