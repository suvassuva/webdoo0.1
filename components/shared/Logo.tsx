"use client";

import { motion } from "framer-motion";
import { Hexagon } from "lucide-react"; // Using Hexagon as a tech-y base shape

export function Logo({ className }: { className?: string }) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            {/* Icon */}
            <div className="relative w-8 h-8 flex items-center justify-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                >
                    <Hexagon className="w-full h-full text-neon-purple fill-white/5" strokeWidth={1.5} />
                </motion.div>

                <div className="z-10 text-xs font-bold text-white">
                    W
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-neon-blue/40 blur-lg rounded-full animate-pulse" />
            </div>

            {/* Text */}
            <span className="text-2xl font-bold tracking-tighter">
                <span className="text-white">Web</span>
                <span className="text-gradient-purple">doo</span>
            </span>
        </div>
    );
}
