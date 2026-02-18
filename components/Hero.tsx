// import Image from "next/image";

// const Hero = () => {
//     return (
//         <section className="relative h-screen">
//             <div className="relative backdrop-blur-sm p-3 md:p-4 overflow-hidden h-screen">

//                 {/* Background Video */}
//                 <video
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                     className="absolute inset-0 w-full h-full object-cover z-0"
//                 >
//                     <source src="/videos/hero.mp4" type="video/mp4" />
//                     {/* Fallback image if video doesn't load */}
//                     Your browser does not support the video tag.
//                 </video>

//                 {/* Dark Overlay */}
//                 <div className="absolute inset-0 bg-[#1e1c1b]/80 z-10" />

//                 {/* Content */}
//                 <div className="relative w-full text-neutral-200 py-16 px-6 md:py-24 md:px-12 text-center flex flex-col items-center z-20">

//                     {/* Top Label / Pill */}
//                     <div className="inline-flex items-center justify-center bg-white/5 border border-white/10 text-[9px] md:text-xs tracking-[0.2em] uppercase py-2 px-4 md:px-6 rounded-full mb-8 text-neutral-400">
//                         <span className="font-serif italic text-base mr-2 text-neutral-300">~</span>
//                         {/* <Image
//                             src="/vector.png"
//                             alt="Zara Curates Logo"
//                             width={30} 
//                             height={20}
//                             className="object-contain md:-ml-2 md:mr-2"
//                             priority 
//                         /> */}
//                         Structured. Composed. Intentional.
//                     </div>

//                     {/* Main Headline */}
//                     <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.2] mb-8 font-thin  tracking-tight text-[#FAF9F6]">
//                         Build your brand.  <br className="hidden md:block" />
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


import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative h-screen w-full">
            {/* Main Container */}
            <div className="relative w-full h-full overflow-hidden">

                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src="/videos/hero.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-[#1e1c1b]/80 z-10" />

                {/* Content Container - UPDATED */}
                {/* 
                    1. h-full: Makes the container fill the screen height
                    2. flex flex-col justify-center: Vertically centers the text
                    3. pt-20: Adds padding to the top so visual center is accurate relative to the navbar
                */}
                <div className="relative z-20 w-full h-full flex flex-col justify-center items-center text-neutral-200 px-6 md:px-12 text-center pt-24">

                    {/* Top Label / Pill */}
                    <div className="inline-flex items-center justify-center bg-white/5 border border-white/10 text-[9px] md:text-xs tracking-[0.2em] uppercase py-2 px-4 md:px-6 rounded-full mb-8 text-neutral-400">
                        <span className="font-serif italic text-base mr-2 text-neutral-300">~</span>
                        Structured. Composed. Intentional.
                    </div>

                    {/* Main Headline */}
                    <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.2] mb-8 font-thin tracking-tight text-[#FAF9F6]">
                        Build your brand. <br className="hidden md:block" />
                        <span className="text-[#FAF9F6]">
                            {' '} Refine your life.
                        </span>
                    </h1>

                    {/* Subtext */}
                    <p className="text-white text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                        Philosophy before execution. Clarity before creation.
                    </p>

                    {/* Call to Action Button */}
                    <button className="group relative bg-[#FAF9F6] text-[#1E1C1B] font-medium py-4 px-12 overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-98">
                        <span className="relative z-10 text-xs md:text-sm uppercase tracking-widest">
                            Begin Your Curation
                        </span>
                        {/* Hover Effect Layer */}
                        <div className="absolute inset-0 bg-neutral-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                    </button>

                </div>
            </div>
        </section>
    );
};

export default Hero;