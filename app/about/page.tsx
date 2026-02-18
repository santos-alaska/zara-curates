// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function About() {
//     // Animation variants
//     const fadeInUp = {
//         hidden: { opacity: 0, y: 40 },
//         visible: {
//             opacity: 1,
//             y: 0,
//             transition: { duration: 0.8, ease: "easeOut" }
//         }
//     };

//     return (
//         <div className="bg-[#F8F5F1] text-[#2a2a2a] min-h-screen pb-20">

//             {/* 1. Header Section */}
//             <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 pt-32 pb-20">
//                 <motion.h1
//                     initial="hidden"
//                     animate="visible"
//                     variants={fadeInUp}
//                     className="font-serif text-5xl md:text-7xl text-center leading-tight mb-20 max-w-4xl"
//                 >
//                     A Studio Built on <br />
//                     <span className="italic">Restraint.</span>
//                 </motion.h1>

//                 <motion.div
//                     initial="hidden"
//                     animate="visible"
//                     variants={fadeInUp}
//                     transition={{ delay: 0.2 }}
//                     className="w-full max-w-[600px] aspect-[3/4] relative shadow-lg mb-12"
//                     // max-w-[600px] mx-auto aspect-[3/4] relative shadow-xl
//                 >
//                     <Image
//                         src="/silk.png"
//                         alt="Silk"
//                         fill
//                         className="object-cover"
//                     />
//                 </motion.div>

//                 <motion.p
//                     initial="hidden"
//                     whileInView="visible"
//                     variants={fadeInUp}
//                     viewport={{ once: true }}
//                     className="text-xs uppercase tracking-widest text-neutral-500"
//                 >
//                     Where thought precedes execution.
//                 </motion.p>
//             </section>

//             {/* 2. Text Block: We exist for those... */}
//             <section className="py-24 px-6">
//                 <div className="max-w-2xl mx-auto text-center space-y-12">
//                     <motion.p
//                         initial="hidden"
//                         whileInView="visible"
//                         variants={fadeInUp}
//                         viewport={{ once: true }}
//                         className="text-lg md:text-xl font-light leading-relaxed text-neutral-600"
//                     >
//                         We exist for those who value depth over noise, precision over performance, and clarity over excess.
//                     </motion.p>
//                     <motion.p
//                         initial="hidden"
//                         whileInView="visible"
//                         variants={fadeInUp}
//                         viewport={{ once: true }}
//                         className="text-lg md:text-xl font-light leading-relaxed text-neutral-600"
//                     >
//                         Our work is shaped slowly, guided by intention, and built to endure.
//                     </motion.p>
//                     <motion.div
//                         initial="hidden"
//                         whileInView="visible"
//                         variants={fadeInUp}
//                         viewport={{ once: true }}
//                         className="pt-8"
//                     >
//                         <p className="text-neutral-800 font-medium">Every collaboration is private.</p>
//                         <p className="text-neutral-800 font-medium">Every decision is deliberate.</p>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* 3. Image + Text: Deliberate Practice (Now Stacked) */}
//             <section className="py-24 px-6">
//                 <div className="max-w-2xl mx-auto flex flex-col items-center gap-16">

//                     {/* Image */}
//                     <motion.div
//                         initial="hidden"
//                         whileInView="visible"
//                         variants={fadeInUp}
//                         viewport={{ once: true }}
//                         className="w-full max-w-[450px] aspect-[3/4] relative shadow-lg"
//                     >
//                         <Image
//                             src="/silk.png"
//                             alt="Silk"
//                             fill
//                             className="object-cover"
//                         />
//                     </motion.div>

//                     {/* Text */}
//                     <motion.div
//                         initial="hidden"
//                         whileInView="visible"
//                         variants={fadeInUp}
//                         viewport={{ once: true }}
//                         className=" space-y-8"
//                     >
//                         <h2 className="font-serif text-4xl md:text-5xl mb-8">A Deliberate Practice</h2>

//                         <p className="text-neutral-600 font-light">
//                             Zara Curates is intentionally small.
//                         </p>
//                         <p className="text-neutral-600 font-light leading-relaxed">
//                             We work with a limited number of clients at a time—allowing each collaboration to unfold with focus and depth.
//                         </p>
//                         <p className="text-neutral-600 font-light leading-relaxed">
//                             Every project is selected carefully, approached thoughtfully, and shaped with precision.
//                         </p>
//                         <p className="text-neutral-600 font-light mt-8">
//                             We do not chase volume or visibility.
//                         </p>
//                         <p className="text-neutral-600 font-light leading-relaxed">
//                             We prioritize alignment—between vision and execution, ambition and sustainability.
//                         </p>
//                         <p className="text-neutral-800 italic pt-6">
//                             The result is work that feels calm, resolved, and quietly confident.
//                         </p>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* 4. Full Height Image */}
//             <section className="py-24 px-6">
//                 <motion.div
//                     initial="hidden"
//                     whileInView="visible"
//                     variants={fadeInUp}
//                     viewport={{ once: true }}
//                     className="max-w-[600px] mx-auto aspect-[3/4] relative shadow-xl"
//                 >
//                     <Image
//                         src="/silk.png"
//                         alt="Silk"
//                         fill
//                         className="object-cover"
//                     />
//                 </motion.div>
//             </section>

//             {/* 5. Text Block: Perspective */}
//             <section className="py-24 px-6 bg-white my-20">
//                 <div className="max-w-2xl mx-auto  space-y-12">
//                     <motion.h2
//                         initial="hidden"
//                         whileInView="visible"
//                         variants={fadeInUp}
//                         viewport={{ once: true }}
//                         className="font-serif text-5xl mb-12"
//                     >
//                         Perspective
//                     </motion.h2>

//                     <motion.p
//                         initial="hidden"
//                         whileInView="visible"
//                         variants={fadeInUp}
//                         viewport={{ once: true }}
//                         className="text-neutral-600 font-light leading-relaxed"
//                     >
//                         Zara Curates brings together experience across brand design, digital products, and strategic thinking—guided by the understanding that businesses are extensions of the people behind them.
//                     </motion.p>

//                     <div className="space-y-6 text-neutral-800">
//                         <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>The work is never purely technical.</motion.p>
//                         <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>Each decision considers not only growth, but clarity.</motion.p>
//                         <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>Performance and longevity.</motion.p>
//                         <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>Aesthetics and meaning.</motion.p>
//                     </div>

//                     <motion.p
//                         initial="hidden"
//                         whileInView="visible"
//                         variants={fadeInUp}
//                         viewport={{ once: true }}
//                         className="text-neutral-600 font-light leading-relaxed pt-8"
//                     >
//                         Every project is approached with sensitivity, discretion, and respect for the founder's inner world as much as the outward brand.
//                     </motion.p>
//                 </div>
//             </section>

//             {/* 6. Image + List: Why Zara Curates Exists (Now Stacked) */}
//             <section className="py-24 px-6 pb-40">
//                 <div className="max-w-2xl mx-auto flex flex-col items-center gap-16">

//                     {/* Image */}
//                     <motion.div
//                         initial="hidden"
//                         whileInView="visible"
//                         variants={fadeInUp}
//                         viewport={{ once: true }}
//                         className="w-full max-w-[600px] aspect-[3/4] relative shadow-lg"
//                     >
//                         <Image
//                             src="/silk.png"
//                             alt="Silk"
//                             fill
//                             className="object-cover"
//                         />
//                     </motion.div>

//                     {/* Text */}
//                     <motion.div
//                         initial="hidden"
//                         whileInView="visible"
//                         variants={fadeInUp}
//                         viewport={{ once: true }}
//                         className="space-y-10"
//                     >
//                         <h2 className="font-serif text-4xl md:text-5xl mb-6">Why Zara Curates Exists</h2>

//                         <div className="space-y-8 text-neutral-600 font-light">
//                             <p>Zara Curates was created for those who choose intention over urgency.</p>
//                             <p>For those who understand that clarity shapes everything that follows.</p>
//                             <p>For those building work that must feel aligned internally before it is expressed outwardly.</p>
//                             <p className="text-neutral-800 font-normal">Zara Curates is selective by design.</p>
//                         </div>

//                         <div className="pt-8 space-y-4 text-neutral-800 font-medium inline-block text-left border-l-2 border-neutral-200 pl-6">
//                             <p>Built on structure.</p>
//                             <p>Guided by refinement.</p>
//                             <p>Created for growth that endures.</p>
//                         </div>
//                     </motion.div>

//                 </div>
//             </section>

//         </div>
//     );
// }


"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function About() {
    // Animation variants with proper typing
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }
        }
    };

    return (
        <div className="bg-[#F8F5F1] text-[#2a2a2a] min-h-screen pb-20">

            {/* 1. Header Section */}
            <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 pt-32 pb-20">
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="font-serif text-5xl md:text-7xl text-center leading-tight mb-20 max-w-4xl"
                >
                    A Studio Built on <br />
                    <span className="italic">Restraint.</span>
                </motion.h1>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ delay: 0.2 }}
                    className="w-full max-w-[600px] aspect-[3/4] relative shadow-lg mb-12"
                >
                    <Image
                        src="/silk.png"
                        alt="Silk"
                        fill
                        className="object-cover"
                    />
                </motion.div>

                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInUp}
                    viewport={{ once: true }}
                    className="text-xs uppercase tracking-widest text-neutral-500"
                >
                    Where thought precedes execution.
                </motion.p>
            </section>

            {/* 2. Text Block: We exist for those... */}
            <section className="py-24 px-6">
                <div className="max-w-2xl mx-auto text-center space-y-12">
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInUp}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl font-light leading-relaxed text-neutral-600"
                    >
                        We exist for those who value depth over noise, precision over performance, and clarity over excess.
                    </motion.p>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInUp}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl font-light leading-relaxed text-neutral-600"
                    >
                        Our work is shaped slowly, guided by intention, and built to endure.
                    </motion.p>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInUp}
                        viewport={{ once: true }}
                        className="pt-8"
                    >
                        <p className="text-neutral-800 font-medium">Every collaboration is private.</p>
                        <p className="text-neutral-800 font-medium">Every decision is deliberate.</p>
                    </motion.div>
                </div>
            </section>

            {/* 3. Image + Text: Deliberate Practice (Now Stacked) */}
            <section className="py-24 px-6">
                <div className="max-w-2xl mx-auto flex flex-col items-center gap-16">

                    {/* Image */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInUp}
                        viewport={{ once: true }}
                        className="w-full max-w-[450px] aspect-[3/4] relative shadow-lg"
                    >
                        <Image
                            src="/silk.png"
                            alt="Silk"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInUp}
                        viewport={{ once: true }}
                        className=" space-y-8"
                    >
                        <h2 className="font-serif text-4xl md:text-5xl mb-8">A Deliberate Practice</h2>

                        <p className="text-neutral-600 font-light">
                            Zara Curates is intentionally small.
                        </p>
                        <p className="text-neutral-600 font-light leading-relaxed">
                            We work with a limited number of clients at a time—allowing each collaboration to unfold with focus and depth.
                        </p>
                        <p className="text-neutral-600 font-light leading-relaxed">
                            Every project is selected carefully, approached thoughtfully, and shaped with precision.
                        </p>
                        <p className="text-neutral-600 font-light mt-8">
                            We do not chase volume or visibility.
                        </p>
                        <p className="text-neutral-600 font-light leading-relaxed">
                            We prioritize alignment—between vision and execution, ambition and sustainability.
                        </p>
                        <p className="text-neutral-800 italic pt-6">
                            The result is work that feels calm, resolved, and quietly confident.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 4. Full Height Image */}
            <section className="py-24 px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInUp}
                    viewport={{ once: true }}
                    className="max-w-[600px] mx-auto aspect-[3/4] relative shadow-xl"
                >
                    <Image
                        src="/silk.png"
                        alt="Silk"
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </section>

            {/* 5. Text Block: Perspective */}
            <section className="py-24 px-6 bg-white my-20">
                <div className="max-w-2xl mx-auto  space-y-12">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInUp}
                        viewport={{ once: true }}
                        className="font-serif text-5xl mb-12"
                    >
                        Perspective
                    </motion.h2>

                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInUp}
                        viewport={{ once: true }}
                        className="text-neutral-600 font-light leading-relaxed"
                    >
                        Zara Curates brings together experience across brand design, digital products, and strategic thinking—guided by the understanding that businesses are extensions of the people behind them.
                    </motion.p>

                    <div className="space-y-6 text-neutral-800">
                        <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>The work is never purely technical.</motion.p>
                        <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>Each decision considers not only growth, but clarity.</motion.p>
                        <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>Performance and longevity.</motion.p>
                        <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>Aesthetics and meaning.</motion.p>
                    </div>

                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInUp}
                        viewport={{ once: true }}
                        className="text-neutral-600 font-light leading-relaxed pt-8"
                    >
                        Every project is approached with sensitivity, discretion, and respect for the founder's inner world as much as the outward brand.
                    </motion.p>
                </div>
            </section>

            {/* 6. Image + List: Why Zara Curates Exists (Now Stacked) */}
            <section className="py-24 px-6 pb-40">
                <div className="max-w-2xl mx-auto flex flex-col items-center gap-16">

                    {/* Image */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInUp}
                        viewport={{ once: true }}
                        className="w-full max-w-[600px] aspect-[3/4] relative shadow-lg"
                    >
                        <Image
                            src="/silk.png"
                            alt="Silk"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInUp}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <h2 className="font-serif text-4xl md:text-5xl mb-6">Why Zara Curates Exists</h2>

                        <div className="space-y-8 text-neutral-600 font-light">
                            <p>Zara Curates was created for those who choose intention over urgency.</p>
                            <p>For those who understand that clarity shapes everything that follows.</p>
                            <p>For those building work that must feel aligned internally before it is expressed outwardly.</p>
                            <p className="text-neutral-800 font-normal">Zara Curates is selective by design.</p>
                        </div>

                        <div className="pt-8 space-y-4 text-neutral-800 font-medium inline-block text-left border-l-2 border-neutral-200 pl-6">
                            <p>Built on structure.</p>
                            <p>Guided by refinement.</p>
                            <p>Created for growth that endures.</p>
                        </div>
                    </motion.div>

                </div>
            </section>

        </div>
    );
}