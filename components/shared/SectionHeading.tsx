"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    className?: string;
    center?: boolean;
}

export function SectionHeading({
    title,
    subtitle,
    className,
    center = true,
}: SectionHeadingProps) {
    return (
        <div
            className={cn(
                "mb-12 flex flex-col gap-4",
                center ? "items-center text-center" : "items-start text-left",
                className
            )}
        >
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sm font-medium uppercase tracking-widest text-neon-blue"
            >
                {subtitle}
            </motion.p>
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold tracking-tight text-white"
            >
                {title}
            </motion.h2>
            <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full mt-2" />
        </div>
    );
}
