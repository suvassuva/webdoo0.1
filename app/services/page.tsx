"use client";

import { GlassCard } from "@/components/shared/GlassCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PricingCard } from "@/components/shared/PricingCard";
import { BadgeCheck, Brain, Code, Database, Layout, PenTool, Rocket, Server, Smartphone } from "lucide-react";

const services = [
    {
        icon: <Layout className="w-10 h-10 text-neon-blue" />,
        title: "Business Websites (The Digital HQ)",
        description: "Make a lasting first impression. We build custom, high-performance websites that capture your brand's essence and convert visitors into loyal clients. No templates, just pure custom code for speed and SEO dominance.",
        features: ["Custom Design System (Unique Branding)", "SEO-First Architecture (Semantic HTML)", "CMS Integration (Easy Content Management)", "Fast Loading Speeds (Core Web Vitals)"],
        timeline: "2-3 Weeks",
        gradient: "bg-neon-blue"
    },
    {
        icon: <Smartphone className="w-10 h-10 text-neon-pink" />,
        title: "Full-Stack Web Apps (SaaS)",
        description: "Scale your vision with robust engineering. From MVPs to enterprise-grade platforms, we engineer secure, scalable, and fast web applications. Whether it's a CRM or a social platform, we handle the complexity.",
        features: ["Secure Authentication (NextAuth / Clerk)", "Real-Time Database (MongoDB / PostgreSQL)", "Role-Based Access Control", "API Development (REST / GraphQL)"],
        timeline: "6-10 Weeks",
        gradient: "bg-neon-pink"
    },
    {
        icon: <Database className="w-10 h-10 text-neon-purple" />,
        title: "E-Commerce Solutions",
        description: "Turn browsers into buyers. We build high-conversion online stores that are fast, secure, and easy to manage. Seamlessly integrate payments, manage inventory, and track orders with a custom dashboard.",
        features: ["Global Payments (Stripe / Razorpay)", "Cart & Checkout Optimization", "Admin Dashboard for Inventory", "Order Tracking System"],
        timeline: "4-6 Weeks",
        gradient: "bg-neon-purple"
    },
    {
        icon: <Server className="w-10 h-10 text-neon-orange" />,
        title: "Backend & API Architecture",
        description: "The engine behind the beauty. We design robust server-side architectures that power your mobile and web apps securely, handling thousands of requests without breaking a sweat.",
        features: ["Microservices or Monolith Architecture", "Cloud Deployment (AWS / Vercel)", "Security Audits & Data Protection", "Third-party API Integrations"],
        timeline: "3-5 Weeks",
        gradient: "bg-neon-orange"
    },
    {
        icon: <PenTool className="w-10 h-10 text-neon-yellow" />,
        title: "UI/UX Redesign",
        description: "Transform your outdated website into a modern, high-converting masterpiece. We focus on user behavior, accessibility, and visual hierarchy to create designs that feel intuitive and look premium.",
        features: ["User Flow Optimization", "Accessibility Compliance (WCAG)", "Interactive Prototypes (Figma)", "Visual Polish & Micro-interactions"],
        timeline: "2-4 Weeks",
        gradient: "bg-neon-yellow"
    },
    {
        icon: <Brain className="w-10 h-10 text-teal-400" />,
        title: "AI & Automation Integration",
        description: "Future-proof your business. Leverage the power of AI to automate customer support, generate content, or analyze data. We integrate LLMs (like OpenAI) directly into your workflow.",
        features: ["Custom Chatbots & Assistants", "Automated Content Generation", "Data Analysis Pipelines", "OpenAI / Claude API Integration"],
        timeline: "3-6 Weeks",
        gradient: "bg-teal-400"
    },
];

const pricingPlans = [
    {
        title: "Starter",
        price: "₹15,000",
        description: "Perfect for small businesses needing a professional digital presence.",
        features: ["Custom 5-Page Website", "Mobile Responsive Design", "Basic SEO Setup", "Contact Form Integration", "1 Month Support"],
        popular: false
    },
    {
        title: "Professional",
        price: "₹25,000",
        description: "For growing brands requiring dynamic features and higher performance.",
        features: ["Premium 10-Page Website", "CMS Integration (Blog/News)", "Advanced Animations", "Speed Optimization (90+ Score)", "3 Months Support", "Analytics Setup"],
        popular: true
    },
    {
        title: "Enterprise",
        price: "Custom",
        description: "Full-scale web applications and intricate e-commerce solutions.",
        features: ["Full-Stack Web App (SaaS)", "Custom Database Architecture", "User Authentication", "Third-Party API Integrations", "Priority 24/7 Support", "Cloud Hosting Setup"],
        popular: false
    }
];

export default function ServicesPage() {
    return (
        <div className="py-24 container px-4 mx-auto">
            <SectionHeading
                title="Our Capabilities"
                subtitle="Services"
                className="mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                {services.map((service, index) => (
                    <GlassCard
                        key={index}
                        gradient={service.gradient}
                        className="flex flex-col h-full border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                    >
                        <div className="p-4 rounded-2xl bg-white/5 w-fit border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                            {service.icon}
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                        <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">{service.description}</p>

                        <ul className="space-y-3 mb-8">
                            {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                    <BadgeCheck className="w-4 h-4 text-neon-blue shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <div className="pt-6 border-t border-white/10 flex items-center justify-between text-sm mt-auto">
                            <span className="text-gray-400">Estimated Timeline</span>
                            <span className="text-white font-semibold">{service.timeline}</span>
                        </div>
                    </GlassCard>
                ))}
            </div>

            {/* Pricing Section */}
            <SectionHeading
                title="Transparent Pricing"
                subtitle="Invest in Your Growth"
                className="mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                {pricingPlans.map((plan, index) => (
                    <PricingCard
                        key={index}
                        {...plan}
                    />
                ))}
            </div>
        </div>
    );
}
