"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Project, ProjectCard } from "@/components/shared/ProjectCard";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const projects: Project[] = [
    {
        id: "1",
        title: "FinTrack - AI Finance Dashboard",
        description: "Built a high-performance financial dashboard for a fintech startup. The Challenge: Visualizing complex stock market data in real-time without UI lag. The Solution: Implemented WebSockets with Next.js and Recharts for live updates, achieving sub-100ms latency.",
        category: "SaaS",
        tags: ["Next.js", "TypeScript", "Supabase", "Redis", "Recharts"],
        imageGradient: "bg-gradient-to-br from-indigo-900 to-blue-800",
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: "2",
        title: "LuxeStay - Hotel Booking Engine",
        description: "Designed a premium booking platform for a boutique hotel chain. The Challenge: Syncing availability across multiple channels while maintaining a visually stunning UI. The Solution: Custom calendar integration with Stripe payments and Framer Motion transitions.",
        category: "Full-Stack",
        tags: ["React", "Tailwind CSS", "Stripe API", "PostgreSQL", "Framer Motion"],
        imageGradient: "bg-gradient-to-br from-purple-900 to-pink-900",
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: "3",
        title: "Nebula - AI Content Generator",
        description: "SaaS platform helping creators generate SEO-optimized articles. Features include a markdown editor, export to WordPress, and multi-language support powered by OpenAI's GPT-4 API.",
        category: "SaaS",
        tags: ["Next.js", "OpenAI API", "Stripe", "Tailwind"],
        imageGradient: "bg-gradient-to-br from-emerald-900 to-teal-800",
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: "4",
        title: "UrbanSpace - Real Estate Portal",
        description: "A modern real estate listing platform with map integration. Users can filter properties by location, price, and amenities. Includes an admin panel for agents to manage listings.",
        category: "Full-Stack",
        tags: ["Next.js", "Prisma", "Google Maps API", "AWS S3"],
        imageGradient: "bg-gradient-to-br from-slate-800 to-gray-900",
        liveUrl: "#"
    },
    {
        id: "5",
        title: "Creative Agency Portfolio",
        description: "An award-winning portfolio site designed for a digital agency. Features smooth scroll animations, a custom WebGL background, and a unique typographic layout.",
        category: "Web Design",
        tags: ["React", "Three.js", "GSAP", "Vite"],
        imageGradient: "bg-gradient-to-br from-orange-900 to-red-900",
        liveUrl: "#"
    }
];

const categories = ["All", "React", "Full-Stack", "SaaS", "Web Design"];

export default function PortfolioPage() {
    const [filter, setFilter] = useState("All");

    const filteredProjects = projects.filter(
        (project) => filter === "All" || project.category === filter
    );

    return (
        <div className="py-24 container px-4 mx-auto min-h-screen">
            <SectionHeading
                title="Featured Projects"
                subtitle="Portfolio"
                className="mb-12"
            />

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 mb-12 justify-center border-b border-white/10 pb-8">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={cn(
                            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                            filter === cat
                                ? "bg-neon-blue text-black shadow-[0_0_15px_rgba(0,242,234,0.4)]"
                                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                        )}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
