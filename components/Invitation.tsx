import Image from "next/image";
import Link from "next/link";
import localFont from 'next/font/local'

const dobagi = localFont({
    src: '../public/fonts/Dobagi.otf',
})


const Invitation = () => {
  return (
    <section className="pb-[200px] md:pb-0 flex flex-col w-full">
      {/* Top Part: Dark Background Image */}
      <div className="w-full h-[40vh] relative flex items-center justify-center text-[#E5E5E5]">

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/prop.jpg"
            alt="Dark textured background"
            fill
            className="object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/20"></div>

        </div>

        {/* Content */}
        <h2 className={`${dobagi.className} font-serif text-[26px] md:text-6xl text-center leading-tight relative z-10`}>
          An Invitation to <br /> Begin
        </h2>

        {/* Decorative Ribbon/Shape (Abstract representation) */}
        <div className="absolute bottom-0 left-0 w-32 h-32 opacity-20 bg-white blur-3xl rounded-full transform -translate-x-10 translate-y-10 z-0"></div>
      </div>

      {/* Bottom Part: White Content */}
      <div className="w-full bg-white pt-24 md:py-24 px-6 flex flex-col items-center text-center">
        <p className="max-w-xl text-neutral-600 text-[11px] md:text-lg leading-relaxed mb-25 font-light">
          Every collaboration begins with intention.<br />
          If you're building something considered and feel aligned with our approach, we invite you to begin a private conversation.
        </p>


        <Link href="/contact">
          <button className="bg-transparent border border-neutral-400 text-neutral-600 px-8 md:px-12 py-1.5 md:py-3 text-[11px] md:text-lg font-light hover:border-black hover:text-black transition-all duration-300">
            Begin Your Curation
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Invitation;