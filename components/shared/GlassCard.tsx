"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    gradient?: string; // Optional specific gradient accent
    hoverEffect?: boolean;
}

export function GlassCard({
    children,
    className,
    gradient,
    hoverEffect = true,
}: GlassCardProps) {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -5 } : undefined}
            className={cn(
                "glass-card relative overflow-hidden rounded-2xl p-6",
                className
            )}
        >
            {/* Optional Gradient Blob for Glow */}
            {gradient && (
                <div
                    className={cn(
                        "absolute -top-10 -right-10 w-24 h-24 rounded-full blur-3xl opacity-20 pointer-events-none",
                        gradient
                    )}
                />
            )}
            <div className="relative z-10 h-full">{children}</div>
        </motion.div>
    );
}
