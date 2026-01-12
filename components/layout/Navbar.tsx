"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Ensure framer-motion is installed
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { Logo } from "@/components/shared/Logo";

const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Process", href: "/process" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled
                    ? "glass-panel bg-background/50 h-16"
                    : "bg-transparent h-20"
            )}
        >
            <div className="container mx-auto px-4 h-full flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Logo />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-neon-blue",
                                pathname === link.href ? "text-neon-blue" : "text-muted-foreground"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button variant="neon" size="sm" asChild>
                        <Link href="/contact">Get Started</Link>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-foreground p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col"
                    >
                        {/* Mobile Header with Close Button */}
                        <div className="flex items-center justify-between p-4 border-b border-white/10">
                            <span className="text-xl font-bold text-gradient-purple">Menu</span>
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="p-2 text-white hover:text-neon-pink transition-colors"
                            >
                                <X size={28} />
                            </button>
                        </div>

                        <div className="flex flex-col h-full overflow-y-auto p-4 pb-8">
                            <nav className="flex flex-col gap-2">
                                {navLinks.map((link, idx) => (
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + idx * 0.05 }}
                                        key={link.name}
                                    >
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                "block text-2xl font-bold py-4 border-b border-white/5",
                                                pathname === link.href ? "text-neon-blue" : "text-white hover:text-white/80"
                                            )}
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                className="mt-8"
                            >
                                <Button variant="neon" size="lg" className="w-full text-lg h-12" asChild>
                                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
