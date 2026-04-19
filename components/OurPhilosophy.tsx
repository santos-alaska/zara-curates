import localFont from 'next/font/local'


const dobagi = localFont({
    src: '../public/fonts/Dobagi.otf',
})


const OurPhilosophy = () => {
    return (
        <section className="py-[200px] md:py-32 px-6 bg-[#fff]">
            <div className="container w-full mx-auto md:max-w-[65%]">
                {/* Header */}
                <div className="text-left mb-10 md:mb-24">
                    <h1
                        className={` ${dobagi.className} font-serif text-[26px] md:text-6xl font-light leading-tight tracking-wide`}

                    >
                        <em className="italic font-light">Our</em>
                        <br />
                        <span className="">Philosophy</span>
                    </h1>
                </div>

                {/* Content */}
                <div className="space-y-16 md:space-y-10 max-w-2xl">
                    {/* First paragraph block */}
                    <div className="space-y-2">
                        <p className="text-[11px] md:text-lg text-[#1E1C1B] leading-relaxed">
                            We believe meaningful growth begins within—in how you think, decide, and lead.    What is refined internally scales externally.
                        </p>
                        {/* <p className="text-base md:text-lg text-[#1E1C1B] leading-relaxed">
                            What is refined internally scales externally.
                        </p> */}
                    </div>

                    {/* Second paragraph block */}
                    <div className="space-y-2">
                        <p className="text-[11px] md:text-lg text-[#1E1C1B] leading-relaxed">
                            Zara Curates brings alignment to brand, product, and direction.
                        </p>
                        <p className="text-[11px] md:text-lg text-[#1E1C1B] leading-relaxed">
                            We refine thinking before we design execution.
                        </p>
                        <p className="text-[11px] md:text-lg text-[#1E1C1B] leading-relaxed">
                            So growth feels composed—not chaotic.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurPhilosophy;