"use client";

import { GlassCard } from "@/components/shared/GlassCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { BadgeCheck } from "lucide-react";
import Image from "next/image"; // Added import

export default function AboutPage() {
    return (
        <div className="py-24 container px-4 mx-auto">
            <SectionHeading title="Who is Webdoo?" subtitle="About Us" className="mb-16" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                {/* Story */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-white">
                        Built by Developers, <br />
                        <span className="text-gradient-purple">Obsessed with Performance</span>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                        I’m not just a developer; I’m a product builder. With a background in full-stack engineering and a passion for UI/UX, I bridge the gap between "it works" and "it feels amazing".
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        My philosophy is simple: <strong className="text-white">Code should be invisible.</strong> The user should only feel the speed, the smoothness, and the utility.
                        Unlike traditional agencies that rely on heavy page builders, Webdoo delivers hand-crafted, semantic code that Google loves and users enjoy.
                    </p>

                    <div className="flex flex-col gap-4 mt-4 border-l-2 border-neon-blue pl-4">
                        <blockquote className="text-white italic">
                            "We don't just build websites; we build digital assets that compound in value over time."
                        </blockquote>
                        <span className="text-sm text-gray-400">— Vasu G, Founder</span>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-8">
                        <StatCard number="50+" label="Projects Shipped" />
                        <StatCard number="100%" label="Client Satisfaction" />
                        <StatCard number="24/7" label="Support" />
                    </div>
                </div>

                {/* Profile Image for Vasu G */}
                <div className="relative h-[500px] w-full rounded-3xl overflow-hidden glass-card flex items-center justify-center border border-white/10 group">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/20 to-neon-blue/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Grid Pattern */}
                    <div className="absolute inset-0 bg-grid-white/[0.05] z-10" />

                    <div className="relative z-20 w-full h-full p-6">
                        <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                            <Image
                                src="/images/vasu-profile.jpg"
                                alt="Vasu G - Webdoo Founder"
                                fill
                                className="object-cover object-center hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    {/* Name Badge */}
                    <div className="absolute bottom-10 left-10 z-30 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                        <h3 className="text-2xl font-bold text-white">Vasu G</h3>
                        <p className="text-neon-blue font-medium">Founder & Full-Stack Developer</p>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className="mb-24">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Technical Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <SkillCategory title="Frontend" skills={["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"]} />
                    <SkillCategory title="Backend" skills={["Node.js", "Express", "MongoDB", "PostgreSQL", "Supabase"]} />
                    <SkillCategory title="Tools" skills={["Git & GitHub", "VS Code", "Figma", "Vercel", "Docker"]} />
                    <SkillCategory title="AI & Automation" skills={["OpenAI API", "ChatGPT Integration", "Automation Scripts", "Data Analysis"]} />
                </div>
            </div>
        </div>
    );
}

function StatCard({ number, label }: { number: string, label: string }) {
    return (
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center min-w-[120px]">
            <div className="text-3xl font-bold text-gradient-teal mb-1">{number}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
        </div>
    )
}

function SkillCategory({ title, skills }: { title: string, skills: string[] }) {
    return (
        <GlassCard className="border-white/5 bg-white/5">
            <h4 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2">{title}</h4>
            <div className="space-y-2">
                {skills.map(skill => (
                    <div key={skill} className="flex items-center gap-2 text-sm text-gray-400">
                        <BadgeCheck className="w-4 h-4 text-neon-blue" /> {skill}
                    </div>
                ))}
            </div>
        </GlassCard>
    )
}
