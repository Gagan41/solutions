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
        })),
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
    <section className="py-20 bg-platinum-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-obsidian-600">
              LIVE UPDATES
            </span>
          </div>
          <h2 className="text-4xl font-bold text-obsidian-900 mb-4">
            Projects in{" "}
            <span className="bg-gradient-to-r from-obsidian-700 to-obsidian-900 bg-clip-text text-transparent">
              Real-Time
            </span>
          </h2>
          <p className="text-xl text-obsidian-600 max-w-3xl mx-auto">
            See our current projects and their live performance metrics as we
            work on them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border border-platinum-200 bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg font-semibold text-obsidian-900">
                      {project.client}
                    </CardTitle>
                    <Badge className={getStatusColor(project.status)}>
                      <div className="flex items-center gap-1">
                        {getStatusIcon(project.status)}
                        {project.status}
                      </div>
                    </Badge>
                  </div>
                  <p className="text-sm text-obsidian-600">{project.type}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Progress */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-obsidian-600">Progress</span>
                      <span className="font-medium text-obsidian-900">
                        {Math.round(project.progress)}%
                      </span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    {project.metrics.trafficIncrease && (
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <TrendingUp className="w-4 h-4 text-green-600 mx-auto mb-1" />
                        <div className="text-lg font-bold text-green-700">
                          +{project.metrics.trafficIncrease}%
                        </div>
                        <div className="text-xs text-green-600">Traffic</div>
                      </div>
                    )}

                    {project.metrics.conversionRate && (
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <Users className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                        <div className="text-lg font-bold text-blue-700">
                          {project.metrics.conversionRate}%
                        </div>
                        <div className="text-xs text-blue-600">Conversion</div>
                      </div>
                    )}

                    {project.metrics.pageSpeed && (
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <Activity className="w-4 h-4 text-purple-600 mx-auto mb-1" />
                        <div className="text-lg font-bold text-purple-700">
                          {project.metrics.pageSpeed}
                        </div>
                        <div className="text-xs text-purple-600">
                          Speed Score
                        </div>
                      </div>
                    )}

                    {project.metrics.seoScore && (
                      <div className="text-center p-3 bg-gold-50 rounded-lg">
                        <Eye className="w-4 h-4 text-gold-600 mx-auto mb-1" />
                        <div className="text-lg font-bold text-gold-700">
                          {project.metrics.seoScore}
                        </div>
                        <div className="text-xs text-gold-600">SEO Score</div>
                      </div>
                    )}
                  </div>

                  {/* Last Update */}
                  <div className="text-xs text-obsidian-500 flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
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
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-obsidian-600 mb-4">
            Want to see your project here? Let's start building something
            amazing together.
          </p>
          <Button className="bg-obsidian-800 hover:bg-obsidian-900 text-white px-8 py-3">
            Start Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveProjectShowcase;
