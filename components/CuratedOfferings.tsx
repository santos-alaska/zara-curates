'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

type Offering = {
  title: string;
  link: string;
  type?: 'collage';
} & (
    | { image: string; type?: never }
    | { image1: string; image2: string; image3: string; image4: string; type: 'collage' }
  );

const offerings: Offering[] = [
  {
    title: "BRAND IDENTITY",
    image: "/brand-identity.jpg",
    link: "/brand-identity",
  },
  {
    title: "DIGITAL EXPERIENCE",
    image: "/digital-experience.png",
    link: "/digital-experience",
  },
  {
    title: "INTEGRATED CURATION",
    image1: "/elan.png",
    image2: "/phone.png",
    image3: "/sculpture.jpg",
    image4: "/cosmetics.png",
    link: "/integrated-curation",
    type: 'collage'
  },
  {
    title: "PRIVATE SESSIONS",
    image: "/chair.jpg",
    link: "/private-sessions",
  },
];

// Animation variants with proper typing
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.9]
    }
  }
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.05, 0.01, 0.9]
    }
  }
};

const CuratedOfferings = () => {
  return (
    <section className="bg-[#FAF9F6] py-24 px-5 md:px-12">
      <div className="container mx-auto max-w-2xl">

        {/* Section Header */}
        <motion.div
          className="flex items-center gap-2 mb-8 md:mb-20 text-neutral-500 text-md tracking-[0.2em] uppercase font-medium"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>Curated Offerings</span>
          <ArrowRight size={14} />
        </motion.div>

        {/* Column Layout (Vertical Stack) */}
        <motion.div
          className="flex flex-col gap-14 md:gap-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {offerings.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center w-full"
              variants={itemVariants}
            >
              {item.type === 'collage' ? (
                <motion.div
                  className="w-full mb-10 grid grid-cols-2 gap-2 bg-[#F4EFEAF0] p-5"
                  variants={imageVariants}
                >
                  <motion.div
                    className="mt-[40px] md:mt-[100px]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={item.image1}
                        alt={`${item.title} 1`}
                        width={200}
                        height={300}
                        className="object-cover h-[200px] md:h-[400px] w-[300px]"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={item.image2}
                        alt={`${item.title} 2`}
                        width={200}
                        height={300}
                        className="object-cover h-full w-[150px] md:w-[300px]"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="h-[210px] md:h-[432px] bg-white -mt-[50px] md:-mt-[100px] p-2 md:p-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={item.image3}
                        alt={`${item.title} 3`}
                        width={200}
                        height={300}
                        className="object-cover h-[200px] md:h-[400px] w-[300px]"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="md:w-[280px] mx-auto bg-white p-2 md:p-4 mt-[15px] md:mt-[50px]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={item.image4}
                        alt={`${item.title} 4`}
                        width={200}
                        height={300}
                        className="object-cover h-[150px] md:h-[300px] w-full"
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              ) : (
                // Single Image for Regular Items
                <motion.div
                  className="relative w-full aspect-[3/4] md:aspect-[4/5] mb-10 shadow-lg bg-neutral-200 overflow-hidden"
                  variants={imageVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </motion.div>
              )}

              {/* Title */}
              <motion.h3
                className="text-xl md:text-2xl font-semibold tracking-wide mb-4 text-[#1E1C1B]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {item.title}
              </motion.h3>

              {/* Link */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link
                  href={item.link}
                  className="text-neutral-500 text-sm border-b border-neutral-300 pb-1 hover:text-black hover:border-black transition-all duration-300"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CuratedOfferings;