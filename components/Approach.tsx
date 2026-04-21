import localFont from 'next/font/local'

const dobagi = localFont({
    src: '../public/fonts/Dobagi.otf',
})

const Approach = () => {
    return (
        <section className="bg-white pb-[200px] md:py-32 px-6">
            <div className="container mx-auto w-full max-w-3xl">

                {/* Optional Header - Kept for structure, but minimal */}
                <h2 className={`${dobagi.className} font-serif text-[26px] md:text-5xl mb-20 text-black text-center max-w-[65%] mx-auto`}>
                    The Zara Curate Approach
                </h2>

                <div className="space-y-24">

                    {/* Item 1 */}
                    <div className="flex items-start gap-6 md:gap-10">
                        {/* Number Icon */}
                        <div className={`${dobagi.className} flex-shrink-0 bg-[#E5E5E5] text-white font-serif text-sm md:text-xl w-6 h-6 md:w-10 md:h-10 flex items-center justify-center rounded-[4px] mt-1`}>
                            1
                        </div>
                        {/* Content */}
                        <div className="flex flex-col text-left">
                            <h3 className={`${dobagi.className} font-serif text-[20px] md:text-4xl text-[#1E1C1B] mb-4`}>
                                Discovery & Alignment
                            </h3>
                            <p className="text-neutral-600 text-[11px] md:text-base leading-relaxed max-w-md">
                                We begin with depth.<br />
                                Understanding your visions, patterns, and decision making.
                            </p>

                            {/* Spaced out footer quote */}
                            <p className="text-neutral-800 text-[11px] mt-12">
                                Alignment precedes execution
                            </p>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-start gap-6 md:gap-10">
                        <div className={`${dobagi.className} flex-shrink-0 bg-[#E5E5E5] text-white font-serif text-sm md:text-xl w-6 h-6 md:w-10 md:h-10 flex items-center justify-center rounded-[4px] mt-1`}>
                            2
                        </div>
                        <div className="flex flex-col text-left">
                            <h3 className={`${dobagi.className} font-serif text-[20px] md:text-4xl text-[#1E1C1B] mb-4`}>
                                Strategic Clarity
                            </h3>
                            <p className="text-neutral-600 text-[11px] md:text-base leading-relaxed max-w-md">
                                Direction is defined before design.<br />
                                Brand, product, and financial thinking are structured first.
                            </p>

                            <p className="text-neutral-800 text-[11px] mt-12">
                                Clarity eliminates noise.
                            </p>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-start gap-6 md:gap-10">
                        <div className={`${dobagi.className} flex-shrink-0 bg-[#E5E5E5] text-white font-serif text-sm md:text-xl w-6 h-6 md:w-10 md:h-10 flex items-center justify-center rounded-[4px] mt-1`}>
                            3
                        </div>
                        <div className="flex flex-col text-left">
                            <h3 className={`${dobagi.className} font-serif text-[20px] md:text-4xl text-[#1E1C1B] mb-4`}>
                                Intentional Creation
                            </h3>
                            <p className="text-neutral-600 text-[11px] md:text-base leading-relaxed max-w-md">
                                Every decision carries weight.<br />
                                Design is shaped with discipline and meaning.
                            </p>

                            <p className="text-neutral-800 text-[11px] mt-12">
                                Nothing is accidental.
                            </p>
                        </div>
                    </div>

                    {/* Item 4 */}
                    <div className="flex items-start gap-6 md:gap-10">
                        <div className={`${dobagi.className} flex-shrink-0 bg-[#E5E5E5] text-white font-serif text-sm md:text-xl w-6 h-6 md:w-10 md:h-10 flex items-center justify-center rounded-[4px] mt-1`}>
                            4
                        </div>
                        <div className="flex flex-col text-left">
                            <h3 className={`${dobagi.className} font-serif text-[20px] md:text-4xl text-[#1E1C1B] mb-4`}>
                                Refinement & Growth
                            </h3>
                            <p className="text-neutral-600 text-[11px] md:text-base leading-relaxed max-w-md">
                                We refine what is built.<br />
                                We strengthen what is aligned.
                            </p>

                            <p className="text-neutral-800 text-[11px] mt-12">
                                Growth unfolds with composure.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Approach;