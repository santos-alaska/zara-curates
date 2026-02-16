"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const ImageCollage = () => {
  // Define the animation behavior with proper Variants type
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }
    }
  };

  return (
    <div className="w-full relative py-20 min-h-[800px] md:min-h-[1600px] overflow-hidden">
      <div className="relative w-full max-w-4xl mx-auto h-full z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="absolute top-[120px] md:top-[300px] left-4 md:left-10 z-10 w-[50px] md:w-[100px] shadow-xl"
        >
          <Image
            src="/collage1.jpg"
            alt="Ceramic detail"
            width={200}
            height={100}
            className="object-cover md:h-[150px] w-full"
          />
        </motion.div>

        {/* 2. Portrait (Main Focal Point) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2 }}
          className="absolute top-0 left-[70px] md:left-[190px] z-20 w-[130px] md:w-[280px] shadow-2xl"
        >
          <Image
            src="/collage2.jpg"
            alt="Portrait"
            width={400}
            height={600}
            className="object-cover h-[200px] md:h-[400px] w-full"
          />
        </motion.div>

        {/* 3. Top Right: Dark Shelf/Texture */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.1 }}
          className="absolute top-[60px] md:top-[100px] right-4 md:right-2 z-40 w-[150px] md:w-[400px] shadow-lg opacity-90"
        >
          <Image
            src="/collage3.jpg"
            alt="Interior texture"
            width={300}
            height={400}
            className="object-cover h-[30vh] md:h-[90vh] w-full"
          />
        </motion.div>

        {/* 4. Fashion Editorial (VERA) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="absolute top-[180px] md:top-[400px] left-8 md:left-[100px] z-30 w-[180px] md:w-[450px] shadow-2xl"
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

        {/* 5. Right Side Small */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute top-[270px] md:top-[710px] right-10 md:right-[60px] z-20 w-[110px] md:w-64 shadow-xl"
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

        {/* 6. Far Right Edge */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="absolute top-[310px] md:top-[800px] right-4 md:-right-[60px] w-[100px] md:w-[350px] shadow-xl"
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

        {/* 7. Left Side Small */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute top-[350px] md:top-[810px] left-4 md:left-[60px] z-10 w-[150px] md:w-[300px] shadow-xl"
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

        {/* 8. Bottom Center Large */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="absolute top-[400px] md:top-[1000px] left-[150px] md:left-[300px] z-10 w-[170px] md:w-[350px] shadow-xl"
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

        {/* 9. Bottom Left Footer */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute top-[530px] md:top-[1200px] left-[80px] md:left-[100px] w-[150px] md:w-[350px] shadow-xl"
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