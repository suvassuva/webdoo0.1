import { GlassCard } from "@/components/shared/GlassCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Layout, Rocket, ShoppingCart, Smartphone, Terminal } from "lucide-react";
import Link from "next/link";
import { LogoTicker } from "@/components/shared/LogoTicker";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* ... (hero content) ... */}
        {/* Abstract Background Blobs - keeping these from original */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[120px]" />

        <div className="container px-4 mx-auto relative z-10 text-center flex flex-col items-center gap-6">
          {/* ... (rest of hero content) ... */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-neon-blue mb-4 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue"></span>
            </span>
            Available for Freelance Projects
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
            <span className="block text-white">Scale Your Vision With</span>
            <span className="text-gradient-purple">Modern Web Solutions</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Built by <span className="text-white font-semibold">Vasu G</span> &mdash; Full-Stack Web Developer.
            Designing premium, AI-powered digital experiences with Next.js, React, and Node.js.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Button size="xl" variant="neon" asChild>
              <Link href="/contact" className="gap-2">
                Get Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10" asChild>
              <a href="https://wa.me/919591835617" target="_blank" rel="noopener noreferrer">WhatsApp: +91 9591835617</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Ticker */}
      <section className="relative z-20 -mt-20 mb-20">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-gray-500 mb-6 uppercase tracking-widest font-semibold">Trusted Project Partners</p>
        </div>
        <LogoTicker />
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="container px-4 mx-auto">
          <SectionHeading
            title="Premium Services"
            subtitle="What I Do"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Layout className="w-8 h-8 text-neon-blue" />}
              title="Business Websites"
              description="High-performance, SEO-optimized landing pages and corporate sites built to convert."
            />
            <ServiceCard
              icon={<ShoppingCart className="w-8 h-8 text-neon-pink" />}
              title="E-Commerce Stores"
              description="Scalable online stores with secure payments, inventory management, and smooth UX."
            />
            <ServiceCard
              icon={<Terminal className="w-8 h-8 text-neon-purple" />}
              title="Full-Stack Apps"
              description="Complex SaaS platforms and dashboards using Next.js, Node.js, and MongoDB."
            />
            <ServiceCard
              icon={<Smartphone className="w-8 h-8 text-neon-orange" />}
              title="Mobile-First Design"
              description="Responsive layouts that look stunning on every device, from mobile to desktop."
            />
            <ServiceCard
              icon={<Code className="w-8 h-8 text-neon-yellow" />}
              title="API Integration"
              description="Seamless integration of third-party APIs like payment gateways, AI tools, and CRMs."
            />
            <ServiceCard
              icon={<Rocket className="w-8 h-8 text-teal-400" />}
              title="Performance & SEO"
              description="Speed optimization and technical SEO to ensure your site ranks high and loads fast."
            />
          </div>
        </div>
      </section>

      {/* Featured Projects Teaser */}
      <section className="py-24 bg-black/20">
        <div className="container px-4 mx-auto">
          <SectionHeading
            title="Featured Projects"
            subtitle="Recent Work"
          />
          <div className="text-center">
            <p className="text-muted-foreground mb-8">Ready to see real-world results?</p>
            <Button variant="neon-purple" asChild>
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/10 to-transparent pointer-events-none" />
        <div className="container px-4 mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Let's Build Something <span className="text-neon-blue">Incredible</span></h2>
          <p className="text-xl text-muted-foreground max-w-lg mx-auto mb-10">
            Have a project in mind? Let's discuss how we can bring your vision to life with modern technology.
          </p>
          <Button size="xl" variant="neon" className="text-lg px-12" asChild>
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <GlassCard className="p-8 flex flex-col gap-4 border-white/5 bg-white/5 hover:bg-white/10" gradient="bg-neon-blue">
      <div className="p-3 rounded-xl bg-white/5 w-fit border border-white/10">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </GlassCard>
  )
}
