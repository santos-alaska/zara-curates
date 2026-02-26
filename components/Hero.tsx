// import Image from "next/image";

// const Hero = () => {
//     return (
//         <section className="relative h-screen w-full">
//             <div className="relative w-full h-full overflow-hidden">

//                 {/* Background Video */}
//                 <video
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                     className="absolute inset-0 w-full h-full object-cover z-0"
//                 >
//                     <source src="/videos/hero.mp4" type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>

//                 {/* Dark Overlay */}
//                 <div className="absolute inset-0 bg-[#1e1c1b]/80 z-10" />


//                 <div className="relative z-20 w-full h-full flex flex-col justify-center items-center text-neutral-200 px-6 md:px-12 text-center pt-24">

//                     {/* Top Label / Pill */}
//                     <div className="inline-flex items-center justify-center bg-white/5 border border-white/10 text-[9px] md:text-xs tracking-[0.2em] uppercase py-2 px-4 md:px-6 rounded-full mb-8 text-neutral-400">
//                         <span className="font-serif italic text-base mr-2 text-neutral-300">~</span>
//                         Structured. Composed. Intentional.
//                     </div>

//                     {/* Main Headline */}
//                     <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.2] mb-8 font-thin tracking-tight text-[#FAF9F6]">
//                         Build your brand. <br className="hidden md:block" />
//                         <span className="text-[#FAF9F6]">
//                             {' '} Refine your life.
//                         </span>
//                     </h1>

//                     {/* Subtext */}
//                     <p className="text-white text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-light">
//                         Philosophy before execution. Clarity before creation.
//                     </p>

//                     {/* Call to Action Button */}
//                     <button className="group relative bg-[#FAF9F6] text-[#1E1C1B] font-medium py-4 px-12 overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-98">
//                         <span className="relative z-10 text-xs md:text-sm uppercase tracking-widest">
//                             Begin Your Curation
//                         </span>
//                         {/* Hover Effect Layer */}
//                         <div className="absolute inset-0 bg-neutral-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
//                     </button>

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Hero;


// import Link from "next/link"; // Assuming you might use Link, otherwise can remove

// const Hero = () => {
//     return (
//         <section className="relative h-screen w-full bg-[#0a0a0a]">
//             <div className="relative w-full h-full overflow-hidden">

//                 {/* Background Video */}
//                 {/* Note: Ensure the video is dark or abstract to match the vibe */}
//                 <video
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                     className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
//                 >
//                     <source src="/videos/hero.mp4" type="video/mp4" />
//                 </video>

//                 <div className="absolute inset-0 bg-[#121212]/90 z-10" />

//                 {/* Content Container */}
//                 <div className="relative z-20 w-full h-full flex flex-col items-center justify-center text-center px-6 pt-24">

//                     <div className="absolute top-[20%] md:top-[20%] flex items-center gap-3 text-[#D9C9B8B2] text-[9px] md:text-xs tracking-[0.25em] uppercase ">
//                         <span className="font-serif italic text-lg leading-none">~</span>
//                         <span>Structured. Composed. Intentional.</span>
//                     </div>

//                     {/* 2. Main Headlines with specific spacing */}
//                     <div className="flex flex-col items-center -mt-16">
//                         {/* First Headline */}
//                         <h1 className="font-serif text-[32px] md:text-6xl text-[#E5E5E5] font-light tracking-wide mb-40 md:mb-24">
//                             Build your brand.
//                         </h1>

//                         {/* Second Headline */}
//                         <h1 className="font-serif text-[32px] md:text-6xl text-[#E5E5E5] font-light tracking-wide mb-6">
//                             Refine your life.
//                         </h1>

//                         {/* Subtext */}
//                         <p className="text-[#aaa7a7] text-xs md:text-sm tracking-wide font-light max-w-md mx-auto leading-relaxed">
//                             Philosophy before execution.<br />
//                             Clarity before creation.
//                         </p>
//                     </div>

//                     {/* 3. Ghost Button aligned to bottom area */}
//                     <div className="absolute bottom-[5%] md:bottom-[5%]">
//                         <button className="border border-[#333333] text-[#CCCCCC] bg-transparent py-4 px-8 md:px-10 text-xs uppercase tracking-[0.15em] hover:border-[#666666] hover:text-white transition-all duration-500 ease-out">
//                             Begin Your Curation
//                         </button>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Hero;



import Link from "next/link";
import { Bokor } from "next/font/google";
import localFont from 'next/font/local'


const bokorFont = Bokor({
    subsets: ['latin'],
    weight: "400",
});

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

                    <div className="absolute top-[18%] md:top-[18%] flex items-center gap-3 text-[#D9C9B8B2] text-[9px] md:text-xs tracking-[0.25em] uppercase ">
                        <span className="font-serif italic text-lg leading-none">~</span>
                        <span>Structured. Composed. Intentional.</span>
                    </div>

                    {/* 2. Main Headlines with specific spacing */}
                    <div className="flex flex-col items-center -mt-40">
                        {/* First Headline */}
                        <h1
                            className={` ${dobagi.className} font-serif text-[32px] md:text-6xl text-[#E5E5E5] font-light tracking-wide mb-50 md:mb-40`}
                        >
                            Build your brand.
                        </h1>

                        {/* Second Headline */}
                        <h1 className={` ${dobagi.className}  font-serif text-[32px] md:text-6xl text-[#E5E5E5] font-light tracking-wide mb-6`}>
                            Refine your life.
                        </h1>

                        {/* Subtext */}
                        <p className="text-[#aaa7a7] text-xs md:text-sm tracking-wide font-light max-w-md mx-auto leading-relaxed">
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