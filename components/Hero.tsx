import localFont from 'next/font/local'




const dobagi = localFont({
    src: '../public/fonts/Dobagi.otf',
})


const Hero = () => {

    return (
        <section className="relative h-[140vh] w-full bg-[#0a0a0a] -mt-22">
            <div className="relative w-full h-full overflow-hidden">

                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
                >
                    <source src="/videos/hero.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-[#121212]/90 z-10" />

                {/* Content Container */}
                <div className="relative z-20 w-full h-full flex flex-col items-center justify-center text-center px-6 pt-24">

                    <div className="absolute top-[15%] md:top-[18%] flex items-center gap-3 text-[#D9C9B8B2] text-[9px] md:text-xs tracking-[0.25em] uppercase ">
                        <span className="font-serif italic text-lg leading-none">~</span>
                        <span>Structured. Composed. Intentional.</span>
                    </div>

                    {/* 2. Main Headlines with specific spacing */}
                    <div className="flex flex-col items-center -mt-70 md:-mt-40">
                        {/* First Headline */}
                        <h1
                            className={` ${dobagi.className} text-[32px] md:text-6xl text-[#E5E5E5] font-light tracking-wide mb-50 md:mb-40`}
                        >
                            Build your brand.
                        </h1>

                        {/* Second Headline */}
                        <h1 className={` ${dobagi.className}  font-serif text-[32px] md:text-6xl text-[#E5E5E5] font-light tracking-wide mb-6`}>
                            Refine your life.
                        </h1>

                        {/* Subtext */}
                        <p className="text-[#aaa7a7] text-[11px] md:text-sm tracking-wide font-light max-w-md mx-auto leading-relaxed">
                            Philosophy before execution.<br />
                            Clarity before creation.
                        </p>
                    </div>

                    {/* 3. Ghost Button aligned to bottom area */}
                    <div className="absolute bottom-[10%] md:bottom-[5%]">
                        <button className="border border-[#333333] text-[#CCCCCC] bg-transparent py-2.5 md:py-4  md:px-10 w-[186px] md:w-full text-[10px] md:text-xs uppercase tracking-[0.15em] hover:border-[#666666] hover:text-white transition-all duration-500 ease-out">
                            Begin Your Curation
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;