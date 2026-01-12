"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
    { name: "Dr. Pilates", logo: "/images/partners/dr-pilates.png" },
    { name: "Mapif Brandsphere", logo: "/images/partners/mapif.png" },
    { name: "Lassi Shop", logo: "/images/partners/lassi-shop.jpg" },
    { name: "Happy Fit Club", logo: "/images/partners/happy-fit-club.jpg" },
    { name: "Modliv Furnitures", logo: "/images/partners/modliv.png" },
    { name: "Très Bon Unisex Salon", logo: "/images/partners/tres-bon.jpg" },
    { name: "CureVoyage", logo: "/images/partners/cure-voyage.jpg" },
];

export function LogoTicker() {
    return (
        <div className="py-12 bg-black/20 border-y border-white/5 overflow-hidden flex relative z-10 before:absolute before:inset-y-0 before:left-0 before:w-20 before:bg-gradient-to-r before:from-background before:to-transparent before:z-20 after:absolute after:inset-y-0 after:right-0 after:w-20 after:bg-gradient-to-l after:from-background after:to-transparent after:z-20">
            <div className="flex">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="flex gap-16 pr-16 items-center"
                >
                    {[...partners, ...partners, ...partners].map((partner, index) => (
                        <div key={index} className="relative h-20 w-40 flex-shrink-0 bg-white rounded-xl p-4 flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                fill
                                className="object-contain p-2"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
