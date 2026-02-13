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
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/85"></div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto relative z-10">
        <h2 className="font-serif text-4xl md:text-5xl mb-10 text-white">
          Join the Curated List
        </h2>

        <div className="space-y-6 text-neutral-400 font-light mb-12 text-sm md:text-base">
          <p>
            If something here resonated with you, you're welcome to stay close.
          </p>
          <p>
            From time to time, we share quiet reflections, thoughtful insights, and offerings — only when there's something worth sharing.
          </p>
          <p className="italic text-neutral-300">
            No noise. No pressure. Just intention.
          </p>
        </div>

        {/* Form */}
        <form className="max-w-md mx-auto space-y-4">
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full bg-[#2A2827]/30 backdrop-blur-sm border-b border-[#3E3C3A] text-white px-4 py-3 text-center placeholder-neutral-500 focus:outline-none focus:border-neutral-400 transition-colors"
          />
          <button
            type="submit"
            className="w-full border border-neutral-500 text-neutral-300 py-3 hover:bg-neutral-800/50 backdrop-blur-sm transition-all uppercase text-xs tracking-widest"
          >
            Join the List
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;