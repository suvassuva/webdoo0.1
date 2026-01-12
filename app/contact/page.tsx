"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { contactFormSchema, ContactFormValues } from "@/lib/schemas";
import { GlassCard } from "@/components/shared/GlassCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Phone } from "lucide-react";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            projectType: "Business Website",
            budget: "",
            message: "",
        },
    });

    async function onSubmit(data: ContactFormValues) {
        setIsSubmitting(true);
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSuccess(true);
                form.reset();
            } else {
                console.error("Failed to submit");
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="py-24 container px-4 mx-auto min-h-screen">
            <SectionHeading title="Get In Touch" subtitle="Contact Webdoo" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Let's Discuss Your Project</h3>
                    <p className="text-muted-foreground mb-8">
                        Ready to start? Fill out the form or reach out directly via WhatsApp or Email.
                        I usually respond within 24 hours.
                    </p>

                    <div className="grid gap-6">
                        <ContactMethod
                            icon={<Phone className="w-6 h-6 text-neon-blue" />}
                            title="WhatsApp / Call"
                            value="+91 9591835617"
                            href="https://wa.me/919591835617"
                        />
                        <ContactMethod
                            icon={<Mail className="w-6 h-6 text-neon-pink" />}
                            title="Email"
                            value="vasu@webdoo.in" // Placeholder
                            href="mailto:vasu@webdoo.in"
                        />
                    </div>
                </div>

                {/* Contact Form */}
                <GlassCard className="border-white/5 bg-white/5">
                    {success ? (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MessageSquare className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                            <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you shortly.</p>
                            <Button variant="outline" className="mt-6" onClick={() => setSuccess(false)}>
                                Send Another Message
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Name</label>
                                    <input
                                        {...form.register("name")}
                                        className="w-full bg-black/40 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                                        placeholder="John Doe"
                                    />
                                    {form.formState.errors.name && (
                                        <p className="text-red-400 text-xs">{form.formState.errors.name.message}</p>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Email</label>
                                    <input
                                        {...form.register("email")}
                                        className="w-full bg-black/40 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                                        placeholder="john@example.com"
                                    />
                                    {form.formState.errors.email && (
                                        <p className="text-red-400 text-xs">{form.formState.errors.email.message}</p>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Project Type</label>
                                    <select
                                        {...form.register("projectType")}
                                        className="w-full bg-black/40 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                                    >
                                        <option value="Business Website">Business Website</option>
                                        <option value="E-Commerce">E-Commerce</option>
                                        <option value="Web Application">Web Application (SaaS)</option>
                                        <option value="UI/UX Design">UI/UX Design</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Budget (Optional)</label>
                                    <input
                                        {...form.register("budget")}
                                        className="w-full bg-black/40 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                                        placeholder="e.g. ₹50k - ₹1L"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Message</label>
                                <textarea
                                    {...form.register("message")}
                                    rows={5}
                                    className="w-full bg-black/40 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                                    placeholder="Tell me about your project..."
                                />
                                {form.formState.errors.message && (
                                    <p className="text-red-400 text-xs">{form.formState.errors.message.message}</p>
                                )}
                            </div>

                            <Button type="submit" variant="neon" size="lg" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    )}
                </GlassCard>
            </div>
        </div>
    );
}

function ContactMethod({ icon, title, value, href }: { icon: React.ReactNode, title: string, value: string, href: string }) {
    return (
        <a href={href} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="p-3 rounded-full bg-black/30 text-white">
                {icon}
            </div>
            <div>
                <h4 className="text-sm text-muted-foreground">{title}</h4>
                <p className="text-lg font-semibold text-white">{value}</p>
            </div>
        </a>
    )
}
