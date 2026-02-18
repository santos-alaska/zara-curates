"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function Contact() {
    // Animation variants with proper typing
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] },
        },
    };

    return (
        <div className="bg-[#F8F5F1] min-h-screen flex flex-col">
            {/* 1. Dark Hero Section with Background Image */}
            <section className="relative bg-[#1a1a1a] text-[#F8F5F1] px-6 py-32 md:py-40 text-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/selected-work.png" // Replace with your image path
                        alt="Hero background"
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                </div>

                {/* Dark Overlay (optional, for better text readability) */}
                {/* <div className="absolute inset-0 bg-black/50 z-0"></div> */}
                <div className="absolute inset-0 bg-[#1D1A19D9] z-0"></div> 

                {/* Content */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="relative z-10 max-w-3xl mx-auto space-y-6"
                >
                    <p className="text-xs md:text-sm uppercase tracking-widest text-neutral-400">
                        Apply to work with us
                    </p>
                    <h1 className="font-serif text-5xl md:text-7xl leading-tight">
                        Let's explore your <br />
                        <span className="italic">vision</span>
                    </h1>
                </motion.div>
            </section>

            {/* 2. Intro Text */}
            <section className="px-6 pt-20 pb-12">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInUp}
                    viewport={{ once: true }}
                    className="max-w-xl mx-auto text-center"
                >
                    <p className="text-neutral-600 font-light leading-relaxed">
                        We work with a select number of visionary founders at a time. Share
                        your project to see if we're a fit.
                    </p>
                </motion.div>
            </section>

            {/* 3. The Form */}
            <section className="px-6 pb-20">
                <motion.form
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInUp}
                    viewport={{ once: true }}
                    className="max-w-xl mx-auto space-y-12"
                >
                    {/* Name Field */}
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm text-neutral-800">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Your name here"
                            className="w-full bg-transparent border-b border-neutral-300 py-3 text-neutral-600 focus:outline-none focus:border-black transition-colors placeholder:text-neutral-300 font-light"
                        />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm text-neutral-800">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Your email here"
                            className="w-full bg-transparent border-b border-neutral-300 py-3 text-neutral-600 focus:outline-none focus:border-black transition-colors placeholder:text-neutral-300 font-light"
                        />
                    </div>

                    {/* What you're building */}
                    <div className="space-y-2">
                        <label htmlFor="building" className="text-sm text-neutral-800">
                            What you're building
                        </label>
                        <input
                            type="text"
                            id="building"
                            placeholder="Briefly, your project or vision"
                            className="w-full bg-transparent border-b border-neutral-300 py-3 text-neutral-600 focus:outline-none focus:border-black transition-colors placeholder:text-neutral-300 font-light"
                        />
                    </div>

                    {/* What you're seeking */}
                    <div className="space-y-2">
                        <label htmlFor="seeking" className="text-sm text-neutral-800">
                            What you're seeking
                        </label>
                        <input
                            type="text"
                            id="seeking"
                            placeholder="What you hope to achieve or need support with"
                            className="w-full bg-transparent border-b border-neutral-300 py-3 text-neutral-600 focus:outline-none focus:border-black transition-colors placeholder:text-neutral-300 font-light"
                        />
                    </div>

                    {/* Additional Notes */}
                    <div className="space-y-2">
                        <label htmlFor="notes" className="text-sm text-neutral-800">
                            Additional notes
                        </label>
                        <textarea
                            id="notes"
                            rows={1}
                            placeholder="Anything else you'd like us to know"
                            className="w-full bg-transparent border-b border-neutral-300 py-3 text-neutral-600 focus:outline-none focus:border-black transition-colors placeholder:text-neutral-300 font-light resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-8 flex justify-center">
                        <button
                            type="submit"
                            className="px-12 py-4 border border-neutral-400 text-neutral-800 text-sm hover:bg-[#2a2a2a] hover:text-white hover:border-[#2a2a2a] transition-all duration-300"
                        >
                            Send request
                        </button>
                    </div>
                </motion.form>
            </section>

            {/* 4. Bottom Image (Flower) */}
            <section className="px-6 pb-20 flex-grow flex items-end justify-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInUp}
                    viewport={{ once: true }}
                    className="w-full max-w-[600px] aspect-[4/3] relative"
                >
                    <Image
                        src="/contact-last-img.png"
                        alt="Calla Lily"
                        fill
                        className="object-cover grayscale opacity-90"
                    />
                </motion.div>
            </section>
        </div>
    );
}
