"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { contentData, menuItems } from "@/constants";

function WhoForPanel({ items, defaultText }: { items: { label: string; answer: string }[]; defaultText: string }) {
  const [selected, setSelected] = useState<number | "who" | null>(null);

  const displayText =
    selected === "who"
      ? defaultText
      : selected !== null
        ? items[selected].answer
        : defaultText;

  const allItems: { label: string; key: number | "who" }[] = [
    { label: "WHO THIS IS FOR", key: "who" },
    ...items.map((item, i) => ({ label: item.label, key: i })),
  ];

  return (
    <>
      <div className="space-y-3">
        {allItems.map(({ label, key }) => (
          <button
            key={label}
            onClick={() => setSelected(selected === key ? null : key)}
            className={`block text-xs uppercase tracking-widest transition-colors duration-300 ${selected === key ? "text-white" : "text-white/50 hover:text-white/80"
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={String(selected)}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl font-light leading-relaxed pt-8 text-white min-h-62.5 md:min-h-50 "
        >
          {displayText}
        </motion.p>
      </AnimatePresence>
    </>
  );
}

// --- 2. MAIN COMPONENT ---
export default function ServiceDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const content = contentData[slug];

  if (!content) {
    return notFound();
  }

  // const fadeInUp = {
  //   hidden: { opacity: 0, y: 30 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  // };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  }


  return (
    <div className="bg-[#fff] min-h-screen">

      {/* 1. Hero Section with background image */}
      <section className="relative h-[80vh] flex items-center justify-center text-[#F8F5F1] px-6 overflow-hidden">
        <Image
          src={content.heroImage}
          alt={content.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial="hidden" animate="visible" variants={fadeInUp}
          className="max-w-3xl text-center space-y-8 z-10"
        >
          <h1 className="font-serif text-5xl md:text-6xl">{content.title}</h1>
          <p className="text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto">
            {content.heroDesc}
          </p>
        </motion.div>
      </section>

      {/* 2. Compositions Navigation */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl mb-12">Compositions</h2>
          <div className="flex flex-col justify-center items-center gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className={`text-xs tracking-widest uppercase pb-1 border-b transition-all duration-300 ${slug === item.link.replace('/', '')
                  ? "text-black border-black"
                  : "text-neutral-400 border-transparent hover:text-black hover:border-neutral-200"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Studio Intro */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-3xl flex flex-col gap-16">
          <motion.div
            initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}
          >
            {/* <div className="w-full aspect-4/3 relative"> */}
            <div className="w-full aspect-3/4 md:aspect-4/3 relative">
              <Image
                src={content.detailImage}
                alt="Detail"
                fill
                className="object-cover mix-blend-multiply opacity-90"
              />
            </div>
          </motion.div>



          <motion.div
            initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-serif text-4xl md:text-5xl">{content.subTitle}</h2>
            <p className="text-sm uppercase tracking-widest text-neutral-500">{content.subDesc}</p>
            <div className="pt-12 space-y-8">
              <h3 className="text-xs font-bold uppercase tracking-widest">{content.philosophyTitle}</h3>
              {content.philosophyText.map((text: string, i: number) => (
                <p key={i} className="text-neutral-600 font-light leading-relaxed text-lg">
                  {text}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}
          >
            {/* <div className="w-full aspect-4/3 relative"> */}
            <div className="w-full aspect-3/4 md:aspect-4/3 relative">
              <Image
                src={content.detailImage}
                alt="Detail"
                fill
                className="object-cover mix-blend-multiply opacity-90"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Who This Is For — Full-bleed image, clickable questions, answer at bottom */}
      <section className="relative min-h-[90vh] w-full">
        <Image
          src={content.whoForImage}
          alt="Who this is for"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/65" />

        {/* Top: Studio name + subtitle */}
        <motion.div
          initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}
          className="absolute top-10 inset-x-0 text-center text-white z-10 px-6"
        >
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide">{content.subTitle}</h2>
          <p className="text-white/60 text-xs uppercase tracking-widest mt-2">{content.title}</p>
        </motion.div>

        {/* Bottom: all clickable questions (including WHO THIS IS FOR) + answer */}
        <motion.div
          initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}
          className="absolute bottom-10 left-8 md:left-62.5 text-white max-w-xl space-y-5 z-10"
        >
          <WhoForPanel items={content.accordionItems} defaultText={content.whoForDesc} />
        </motion.div>
      </section>


      <div className="bg-[#f9f8f8] py-20 my-30 ">
        <motion.h2
          initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center font-serif text-4xl md:text-5xl text-neutral-800"
        >
          {content.processTitle}
        </motion.h2>
      </div>
      {/* 5. Process / Flow */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-16">


          <div className="space-y-12 text-left">
            {content.processSteps.map((step: string, i: number) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6"
              >
                <p className="text-neutral-600 font-light text-lg md:text-xl leading-relaxed">
                  {step}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Footer Minimal Image */}
      {/* <section className="pb-32 px-6 flex justify-center">
        <motion.div
          initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}
          className="relative w-full max-w-3xl aspect-[3/4]"
        >
          <Image
            src="/collage4.png"
            alt="Footer Detail"
            fill
            className="object-cover opacity-80"
          />
        </motion.div>
      </section> */}

      <section className="px-6 pb-20 flex-grow flex items-end justify-center">
        <motion.div
          initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}
          className="w-full max-w-[600px] aspect-[4/3] relative"
        >
          <Image
            src="/contact-last-img.png"
            alt="Calla Lily"
            fill
            className="object-cover  opacity-80"
          />
        </motion.div>
      </section>

      <div className="px-8 py-12 max-w-3xl mx-auto">
        <h2 className="font-serif text-xl underline underline-offset-4 decoration-1 mb-6">
          Studio Flow
        </h2>
        <p className="text-neutral-800 font-light text-base leading-relaxed">
          Where structure begins to move.
        </p>
      </div>

    </div>
  );
}
