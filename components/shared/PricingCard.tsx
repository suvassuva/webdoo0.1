"use client";

import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { GlassCard } from "./GlassCard";

interface PricingCardProps {
    title: string;
    price: string;
    description: string;
    features: string[];
    popular?: boolean;
    ctaText?: string;
    className?: string;
    gradient?: string;
}

export function PricingCard({
    title,
    price,
    description,
    features,
    popular,
    ctaText = "Get Started",
    className,
    gradient = "bg-neon-blue"
}: PricingCardProps) {
    return (
        <GlassCard className={cn(
            "relative flex flex-col h-full border-white/10 hover:border-white/20 transition-all duration-300",
            popular ? "border-neon-purple/50 bg-white/[0.07] scale-105 z-10 shadow-[0_0_30px_rgba(124,58,237,0.15)]" : "bg-white/5",
            className
        )}>
            {popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-neon-purple to-neon-pink text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                </div>
            )}

            <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-300 mb-2">{title}</h3>
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">{price}</span>
                    {price !== "Custom" && <span className="text-sm text-gray-500">/project</span>}
                </div>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed h-12">
                    {description}
                </p>
            </div>

            <div className="flex-grow mb-8">
                <ul className="space-y-3">
                    {features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                            <Check className={cn("w-5 h-5 shrink-0", popular ? "text-neon-pink" : "text-neon-blue")} />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <Button
                variant={popular ? "neon-purple" : "outline"}
                className={cn("w-full gap-2", !popular && "hover:bg-white/5 border-white/10")}
                asChild
            >
                <Link href="/contact">
                    {ctaText} <ArrowRight className="w-4 h-4" />
                </Link>
            </Button>

            {/* Background Gradient Blob */}
            <div className={cn(
                "absolute -bottom-20 -right-20 w-40 h-40 blur-[80px] rounded-full opacity-20 pointer-events-none",
                gradient
            )} />
        </GlassCard>
    );
}
