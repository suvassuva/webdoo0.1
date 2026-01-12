import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/Logo";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black/40 backdrop-blur-xl relative z-20">
            <div className="container px-4 mx-auto py-12 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="mb-6 block w-fit">
                            <Logo />
                        </Link>
                        <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed">
                            Modern web development solutions using the latest tech stack.
                            Built for performance, scalability, and premium user experience.
                        </p>
                        <div className="flex items-center gap-4">
                            <SocialLink icon={<Github className="w-5 h-5" />} href="#" />
                            <SocialLink icon={<Linkedin className="w-5 h-5" />} href="#" />
                            <SocialLink icon={<Twitter className="w-5 h-5" />} href="#" />
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-6">Services</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><Link href="/services" className="hover:text-neon-blue transition-colors">Business Websites</Link></li>
                            <li><Link href="/services" className="hover:text-neon-blue transition-colors">Full-Stack Apps</Link></li>
                            <li><Link href="/services" className="hover:text-neon-blue transition-colors">E-Commerce</Link></li>
                            <li><Link href="/services" className="hover:text-neon-blue transition-colors">UI/UX Design</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-neon-blue transition-colors">About Vasu G</Link></li>
                            <li><Link href="/portfolio" className="hover:text-neon-blue transition-colors">Portfolio</Link></li>
                            <li><Link href="/process" className="hover:text-neon-blue transition-colors">Process</Link></li>
                            <li><Link href="/contact" className="hover:text-neon-blue transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Webdoo. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="hover:text-neon-blue transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-neon-blue transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ icon, href }: { icon: React.ReactNode, href: string }) {
    return (
        <a
            href={href}
            className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-neon-blue/20 hover:text-neon-blue hover:border-neon-blue/50 transition-all duration-300"
        >
            {icon}
        </a>
    )
}
