import localFont from 'next/font/local'

const dobagi = localFont({
  src: '../public/fonts/Dobagi.otf',
})

const satoshi = localFont({
  src: '../public/fonts/Satoshi-Regular.otf',
})


const Archive = () => {
  return (
    <section className=" py-25 md:py-32 px-6">
      <div className="container w-full mx-auto md:max-w-[65%]">
        {/* Top Label */}
        <div className="text-left mb-8">
          <p className="text-[10px] md:text-sm text-neutral-300 uppercase tracking-[0.3em]">
            From The Archive
          </p>
        </div>
        {/* Header */}
        <div className="text-left mb-16 md:mb-20">
          <h2 className="text-[26px] md:text-7xl text-[#1E1C1B]/90 leading-tight font-light">
            <em className={`${satoshi.className} italic`}>The</em>{" "}
            <span className={`${dobagi.className} font-serif`}>Archive</span>
          </h2>
        </div>
        {/* Content */}
        <div className="space-y-12 md:space-y-16 max-w-2xl">
          {/* Introduction */}
          <p className="text-[13px] md:text-lg text-[#1E1C1B] leading-relaxed">
            A private record of thought.
          </p>
          {/* Description */}
          <p className="text-[11px] md:text-lg text-[#1E1C1B] leading-relaxed">
            Preserved reflections on clarity, ambition, structure, and the philosophy behind enduring work.
          </p>
          {/* Details */}
          <p className="text-[11px] md:text-lg text-[#1E1C1B] leading-relaxed">
            Collected slowly. Released deliberately.
          </p>
          {/* Status */}
          <p className="text-[11px] md:text-lg text-neutral-400 leading-relaxed italic">
            Entry 001.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Archive;