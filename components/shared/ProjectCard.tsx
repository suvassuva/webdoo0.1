"use client";

import { GlassCard } from "@/components/shared/GlassCard";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    tags: string[];
    imageGradient: string; // Placeholder for image
    liveUrl?: string;
    githubUrl?: string;
}

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
        >
            <GlassCard className="p-0 h-full flex flex-col group border-white/5 bg-white/5 hover:bg-white/10" hoverEffect={true}>
                {/* Project Image Placeholder */}
                <div className={`h-48 w-full ${project.imageGradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                    <div className="absolute bottom-4 left-4">
                        <span className="px-2 py-1 text-xs font-semibold bg-black/50 backdrop-blur-md rounded-md text-white border border-white/10">
                            {project.category}
                        </span>
                    </div>
                </div>

                <div className="p-6 flex flex-col flex-grow gap-4">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">{project.title}</h3>
                        <p className="text-muted-foreground text-sm line-clamp-3">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag) => (
                            <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-white/10 mt-2">
                        {project.liveUrl && (
                            <Button size="sm" variant="neon" className="flex-1" asChild>
                                <Link href={project.liveUrl} target="_blank">
                                    <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                                </Link>
                            </Button>
                        )}
                        {project.githubUrl && (
                            <Button size="sm" variant="outline" className="flex-1" asChild>
                                <Link href={project.githubUrl} target="_blank">
                                    <Github className="w-4 h-4 mr-2" /> Code
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>
            </GlassCard>
        </motion.div>
    );
}
