"use client";

import { GlassCard } from "@/components/shared/GlassCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ArrowRight, CheckCircle, Code, Figma, Rocket, Search, Settings } from "lucide-react";

export default function ProcessPage() {
    const steps = [
        {
            icon: <Search className="w-6 h-6" />,
            title: "1. Discovery (The 'Why')",
            description: "We don't write a single line of code until we understand your business model. Who are your users? What is your revenue goal? This phase is about alignment.",
            color: "text-neon-blue"
        },
        {
            icon: <Figma className="w-6 h-6" />,
            title: "2. Architecture & Design",
            description: "We create interactive Figma prototypes. You'll see exactly how the app flows before development begins. We map out the database schema to ensure data integrity.",
            color: "text-neon-pink"
        },
        {
            icon: <Code className="w-6 h-6" />,
            title: "3. Agile Development",
            description: "Weekly sprints with live staging links. You watch your product come to life in real-time. Continuous deployment means you're never in the dark.",
            color: "text-neon-purple"
        },
        {
            icon: <Settings className="w-6 h-6" />,
            title: "4. Testing & QA",
            description: "Rigorous testing across devices. We check for responsiveness, accessibility (WCAG), and performance bottlenecks using Lighthouse and Jest.",
            color: "text-neon-orange"
        },
        {
            icon: <Rocket className="w-6 h-6" />,
            title: "5. Launch & Scale",
            description: "Go-live is just the beginning. We set up analytics, monitor error logs, and optimize for peak traffic. We handle the DNS, SSL, and server configuration.",
            color: "text-neon-yellow"
        },
        {
            icon: <CheckCircle className="w-6 h-6" />,
            title: "6. Lifetime Support",
            description: "A website is a living entity. We provide ongoing maintenance, security updates, and feature additions to keep you ahead of the competition.",
            color: "text-teal-400"
        }
    ];

    return (
        <div className="py-24 container px-4 mx-auto">
            <SectionHeading title="How We Work" subtitle="Our Process" className="mb-16" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                    <GlassCard key={index} className="relative group border-white/5 bg-white/5 hover:bg-white/10">
                        <div className={`p-3 rounded-full bg-white/5 w-fit border border-white/10 mb-4 ${step.color}`}>
                            {step.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>

                        {index < steps.length - 1 && (
                            <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-white/10 transform translate-x-1/2">
                                <ArrowRight className="w-6 h-6" />
                            </div>
                        )}
                    </GlassCard>
                ))}
            </div>
        </div>
    );
}
