"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  TrendingUp,
  Users,
  Eye,
  CheckCircle,
  AlertCircle,
  Activity,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  client: string;
  type: string;
  status: "In Progress" | "Testing" | "Launching" | "Completed";
  progress: number;
  startDate: string;
  metrics: {
    trafficIncrease?: number;
    conversionRate?: number;
    pageSpeed?: number;
    seoScore?: number;
  };
  liveUrl?: string;
  lastUpdate: string;
}

const LiveProjectShowcase = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      client: "TechStart Inc.",
      type: "Full Website Redesign",
      status: "In Progress",
      progress: 75,
      startDate: "2024-01-15",
      metrics: {
        pageSpeed: 92,
        seoScore: 88,
      },
      lastUpdate: "2 hours ago",
    },
    {
      id: "2",
      client: "Local Restaurant Chain",
      type: "SEO Optimization",
      status: "Testing",
      progress: 90,
      startDate: "2024-01-08",
      metrics: {
        trafficIncrease: 145,
        conversionRate: 3.2,
        seoScore: 94,
      },
      lastUpdate: "1 hour ago",
    },
    {
      id: "3",
      client: "E-commerce Startup",
      type: "Digital Marketing Campaign",
      status: "Launching",
      progress: 95,
      startDate: "2024-01-01",
      metrics: {
        trafficIncrease: 230,
        conversionRate: 4.8,
      },
      lastUpdate: "30 minutes ago",
    },
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setProjects((prev) =>
        prev.map((project) => ({
          ...project,
          progress: Math.min(100, project.progress + Math.random() * 2),
          metrics: {
            ...project.metrics,
            trafficIncrease: project.metrics.trafficIncrease
              ? project.metrics.trafficIncrease + Math.floor(Math.random() * 5)
              : undefined,
          },
          lastUpdate: "Just now",
        }))
      );
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Testing":
        return "bg-yellow-100 text-yellow-800";
      case "Launching":
        return "bg-purple-100 text-purple-800";
      case "Completed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "In Progress":
        return <Clock className="w-4 h-4" />;
      case "Testing":
        return <AlertCircle className="w-4 h-4" />;
      case "Launching":
        return <TrendingUp className="w-4 h-4" />;
      case "Completed":
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <Activity className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto relative z-10">
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
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white/80 font-manrope">
              LIVE UPDATES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-snug text-white drop-shadow-lg font-inter mb-4">
            Projects in{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Real-Time
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-manrope drop-shadow-md">
            See our current projects and their live performance metrics as we
            work on them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl transition-all duration-300 group relative z-10">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg font-bold text-white font-manrope drop-shadow">
                      {project.client}
                    </CardTitle>
                    <Badge className="bg-white/10 text-white/80 font-inter rounded-full px-3 py-1 flex items-center gap-1 text-xs shadow group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300">
                      {getStatusIcon(project.status)}
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-white/70 font-inter">
                    {project.type}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Progress */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white/70 font-manrope">
                        Progress
                      </span>
                      <span className="font-bold text-white font-inter">
                        {Math.round(project.progress)}%
                      </span>
                    </div>
                    <Progress
                      value={project.progress}
                      className="h-2 bg-white/20"
                    />
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    {project.metrics.trafficIncrease && (
                      <div className="text-center p-3 bg-green-400/10 rounded-xl">
                        <TrendingUp className="w-4 h-4 text-green-400 mx-auto mb-1" />
                        <div className="text-lg font-bold text-green-300 font-inter">
                          +{project.metrics.trafficIncrease}%
                        </div>
                        <div className="text-xs text-green-200 font-manrope">
                          Traffic
                        </div>
                      </div>
                    )}

                    {project.metrics.conversionRate && (
                      <div className="text-center p-3 bg-blue-400/10 rounded-xl">
                        <Users className="w-4 h-4 text-blue-300 mx-auto mb-1" />
                        <div className="text-lg font-bold text-blue-200 font-inter">
                          {project.metrics.conversionRate}%
                        </div>
                        <div className="text-xs text-blue-200 font-manrope">
                          Conversion
                        </div>
                      </div>
                    )}

                    {project.metrics.pageSpeed && (
                      <div className="text-center p-3 bg-purple-400/10 rounded-xl">
                        <Activity className="w-4 h-4 text-purple-300 mx-auto mb-1" />
                        <div className="text-lg font-bold text-purple-200 font-inter">
                          {project.metrics.pageSpeed}
                        </div>
                        <div className="text-xs text-purple-200 font-manrope">
                          Speed Score
                        </div>
                      </div>
                    )}

                    {project.metrics.seoScore && (
                      <div className="text-center p-3 bg-pink-400/10 rounded-xl">
                        <Eye className="w-4 h-4 text-pink-300 mx-auto mb-1" />
                        <div className="text-lg font-bold text-pink-200 font-inter">
                          {project.metrics.seoScore}
                        </div>
                        <div className="text-xs text-pink-200 font-manrope">
                          SEO Score
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Last Update */}
                  <div className="text-xs text-white/60 flex items-center gap-1 font-manrope">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Last updated: {project.lastUpdate}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-12 relative z-10"
        >
          <p className="text-white/80 mb-4 font-manrope">
            Want to see your project here? Let's start building something
            amazing together.
          </p>
          <Button className="bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none font-inter">
            Start Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveProjectShowcase;
