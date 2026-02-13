import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const offerings = [
  {
    title: "BRAND IDENTITY",
    // Clean, minimal, dark aesthetic
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=800&auto=format&fit=crop",
    link: "/brand-identity",
  },
  {
    title: "DIGITAL EXPERIENCE",
    // Blue/Tech phone aesthetic
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=800&auto=format&fit=crop",
    link: "/digital-experience",
  },
  {
    title: "INTEGRATED CURATION",
    // Warm lifestyle/collage aesthetic
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    link: "/integrated-curation",
  },
  {
    title: "PRIVATE SESSIONS",
    // Warm interior/chair aesthetic
    image: "https://images.unsplash.com/photo-1595204642930-b3e5138c2c84?q=80&w=800&auto=format&fit=crop",
    link: "/private-sessions",
  },
];

const CuratedOfferings = () => {
  return (
    <section className="bg-[#FAF9F6] py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-2xl">

        {/* Section Header */}
        <div className="flex items-center gap-2 mb-20 text-neutral-500 text-md tracking-[0.2em] uppercase font-medium">
          <span>Curated Offerings</span>
          <ArrowRight size={14} />
        </div>

        {/* Column Layout (Vertical Stack) */}
        <div className="flex flex-col gap-32">
          {offerings.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center w-full">

              {/* Image Container */}
              <div className="relative w-full aspect-[3/4] md:aspect-[4/5] mb-10 shadow-lg bg-neutral-200">
                <Image
                  // src={item.image}
                  src='/prop.jpg'
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>

              {/* Title */}
              <h3 className=" text-xl md:text-2xl font-semibold tracking-wide mb-4 text-[#1E1C1B]">
                {item.title}
              </h3>

              {/* Link */}
              <Link
                href={item.link}
                className="text-neutral-500 text-sm border-b border-neutral-300 pb-1 hover:text-black hover:border-black transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CuratedOfferings;