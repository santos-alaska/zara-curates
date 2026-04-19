import Image from "next/image";

const Newsletter = () => {
  return (
    <section className="relative text-[#E5E5E5] py-32 px-6 text-center">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/newsletter.jpg"
          alt="Dark background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/85"></div>
      </div>

      {/* Content */}
      <div className="max-w-sm mx-auto relative z-10">
        <h2 className="font-serif text-[30px] md:text-4xl mb-12 text-white font-light">
          The Curated List
        </h2>

        <div className="space-y-1 text-neutral-300 font-light mb-10 text-[11px] md:text-sm leading-relaxed">
          <p>
            If something here resonated, you're welcome to stay close.
          </p>
          <p>
            From time to time, we share reflections, insights, and considered offerings — only when there's something worth saying.
          </p>
        </div>

        <p className="italic text-neutral-400 text-[11px] md:text-sm mb-12">
          Quietly. Intentionally.
        </p>

        {/* Form */}
        <form className="max-w-xs mx-auto space-y-4">
          <input
            type="email"
            placeholder="email"
            className="w-full  bg-[#2A2827]/30 border-b border-neutral-600 text-white px-2 py-3 text-left placeholder-neutral-500 focus:outline-none focus:border-neutral-400 transition-colors text-sm italic"
          />
          <div className="pt-4">
            <button
              type="submit"
              className="px-10 py-3 border border-neutral-400 text-white text-sm font-light hover:bg-white/10 transition-all"
            >
              Stay Close
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;