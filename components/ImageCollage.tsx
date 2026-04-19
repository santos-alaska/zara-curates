"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const ImageCollage = () => {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } }
  };

  const fadeDown: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } }
  };

  const fadeLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } }
  };

  const fadeRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } }
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.1, ease: [0.25, 0.1, 0.25, 1] } }
  };

  const fadeUpSlow: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.3, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <div className="w-full relative pb-[200px] md:py-25 min-h-[800px] md:min-h-[1600px] overflow-hidden">
      <div className="relative w-full max-w-4xl mx-auto h-full z-10">

        {/* 1. Top Left Small — fade from left */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="absolute top-[120px] md:top-[300px] left-4 md:left-10 z-10 w-[50px] md:w-[100px]"
        >
          <Image
            src="/collage1.jpg"
            alt="Ceramic detail"
            width={200}
            height={100}
            className="object-cover md:h-[150px] w-full"
          />
        </motion.div>

        {/* 2. Portrait (Main Focal Point) — scale in */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.15 }}
          className="absolute top-0 left-[70px] md:left-[190px] z-20 w-[130px] md:w-[280px]"
        >
          <Image
            src="/collage2.jpg"
            alt="Portrait"
            width={400}
            height={600}
            className="object-cover h-[200px] md:h-[400px] w-full"
          />
        </motion.div>

        {/* 3. Top Right — fade from right */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.1 }}
          className="absolute top-[60px] md:top-[100px] right-4 md:right-2 z-40 w-[150px] md:w-[400px] opacity-90"
        >
          <Image
            src="/collage3.jpg"
            alt="Interior texture"
            width={300}
            height={400}
            className="object-cover h-[30vh] md:h-[90vh] w-full"
          />
        </motion.div>

        {/* 4. Fashion Editorial — fade up */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1 }}
          className="absolute top-[180px] md:top-[400px] left-8 md:left-[100px] z-30 w-[180px] md:w-[450px]"
        >
          <div className="relative group">
            <Image
              src="/collage4.png"
              alt="Fashion editorial"
              width={400}
              height={600}
              className="object-cover h-[200px] md:h-[500px] w-full"
            />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-serif text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              VERA
            </span>
          </div>
        </motion.div>

        {/* 5. Right Side Small — fade from right */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.2 }}
          className="absolute top-[270px] md:top-[710px] right-10 md:right-[60px] z-20 w-[110px] md:w-64"
        >
          <div className="relative group">
            <Image
              src="/collage6.png"
              alt="Interior design"
              width={300}
              height={400}
              className="object-cover h-[150px] md:h-80 w-full"
            />
          </div>
        </motion.div>

        {/* 6. Far Right Edge — fade down */}
        <motion.div
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: 0.1 }}
          className="absolute top-[310px] md:top-[800px] right-4 md:-right-[60px] w-[100px] md:w-[350px]"
        >
          <div className="relative group">
            <Image
              src="/collage8.jpg"
              alt="Interior design"
              width={300}
              height={400}
              className="object-cover h-[80px] md:h-[150px] w-full"
            />
          </div>
        </motion.div>

        {/* 7. Left Side Small — fade from left */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.05 }}
          className="absolute top-[350px] md:top-[810px] left-4 md:left-[60px] z-10 w-[150px] md:w-[300px]"
        >
          <div className="relative group">
            <Image
              src="/collage5.png"
              alt="Interior design"
              width={300}
              height={400}
              className="object-cover h-40 md:h-80 w-full"
            />
          </div>
        </motion.div>

        {/* 8. Bottom Center Large — slow fade up */}
        <motion.div
          variants={fadeUpSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1 }}
          className="absolute top-[400px] md:top-[1000px] left-[150px] md:left-[300px] z-10 w-[170px] md:w-[350px]"
        >
          <div className="relative group">
            <Image
              src="/collage7.jpg"
              alt="Interior design"
              width={300}
              height={400}
              className="object-cover h-[250px] md:h-[400px] w-full"
            />
          </div>
        </motion.div>

        {/* 9. Bottom Left Footer — scale in */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: 0.2 }}
          className="absolute top-[530px] md:top-[1200px] left-[80px] md:left-[100px] w-[150px] md:w-[350px]"
        >
          <div className="relative group">
            <Image
              src="/collage8.jpg"
              alt="Interior design"
              width={300}
              height={400}
              className="object-cover h-[80px] md:h-[150px] w-full"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ImageCollage;