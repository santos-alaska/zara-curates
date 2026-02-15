'use client';

import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section
            className="bg-[#f0edeb] relative min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-20"
        >
            {/* The Main "Glass" Card */}
            <motion.div
                className="relative w-full md:max-w-[95%] mx-auto"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div
                    className="relative backdrop-blur-sm rounded-[5rem] p-3 md:p-4 
                    bg-[url('/hero-bg2.png')] bg-cover bg-center bg-no-repeat"
                >
                    <div className="absolute rounded-[5rem] inset-0 bg-[#181616]/90 z-0" />
                    <div className="relative w-full border border-white/20 rounded-[5rem] text-neutral-200 py-16 px-6 md:py-24 md:px-12 text-center flex flex-col items-center">

                        {/* Top Label / Pill */}
                        <motion.div
                            className="inline-flex items-center justify-center bg-white/5 border border-white/10 text-[10px] md:text-xs tracking-[0.2em] uppercase py-2 px-6 rounded-full mb-8 text-neutral-400"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <span className="font-serif italic text-base mr-2 text-neutral-300">~</span>
                            Intentional Growth Studio
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h1
                            className="font-gravitas text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 font-light tracking-tight text-[#FAF9F6]"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Curated Growth For Brands <br className="hidden md:block" />
                            <motion.span
                                className=" text-[#FAF9F6]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                            >
                                {' '}& The People Behind Them
                            </motion.span>
                        </motion.h1>

                        {/* Subtext */}
                        <motion.p
                            className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-light"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                        >
                            Zara Curates is a high-end studio blending brand design, product
                            strategy, financial insight, and mindset alignment for founders who
                            value clarity, depth, and intention.
                        </motion.p>

                        {/* Call to Action Button */}
                        <motion.button
                            className="group relative bg-[#FAF9F6] text-[#1E1C1B] font-medium py-4 px-12 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="relative z-10 text-xs md:text-sm uppercase tracking-widest">
                                Begin Your Curation
                            </span>
                            {/* Hover Effect Layer */}
                            <div className="absolute inset-0 bg-neutral-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                        </motion.button>

                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;