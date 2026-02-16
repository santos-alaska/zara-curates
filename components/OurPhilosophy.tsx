
// const OurPhilosophy = () => {
//     return (
//         <section className="py-20 md:py-32 px-4">
//             <div className="container w-full mx-auto md:max-w-[65%]">
//                 <div className="md:col-span-2 text-left mb-8">
//                     <h2 className="font-serif text-5xl md:text-7xl">
//                         <em className="italic font-normal">Our</em>
//                         <br />
//                         Philosophy
//                     </h2>
//                 </div>

//                 <div className="">
//                     <p className="">
//                         We believe the way a business grows is deeply connected to the way
//                         its founder thinks, decides, and leads.
//                     </p>
//                     <div className=" space-y-4">
//                         <p>
//                             Zara Curates exists to align brand, product, strategy, finances,
//                             and mindset—so growth is not chaotic, but intentional.
//                         </p>
//                         <p>We do not chase trends.</p>
//                         <p>We do not overproduce noise.</p>
//                         <p>
//                             We curate clarity, structure, and direction—so brands can scale
//                             with confidence and depth.
//                         </p>
//                     </div>
//                 </div>

//             </div>

//         </section>
//     )
// }

// export default OurPhilosophy


const OurPhilosophy = () => {
    return (
        <section className="py-20 md:py-32 px-6 bg-[#fff]">
            <div className="container w-full mx-auto md:max-w-[65%]">
                {/* Header */}
                <div className="text-left mb-16 md:mb-24">
                    <h2 className="font-serif text-5xl md:text-7xl text-[#1E1C1B] leading-tight">
                        <em className="italic font-light">Our</em>
                        <br />
                        <span className="font-serif">Philosophy</span>
                    </h2>
                </div>

                {/* Content */}
                <div className="space-y-16 md:space-y-10 max-w-2xl">
                    {/* First paragraph block */}
                    <div className="space-y-2">
                        <p className="text-base md:text-lg text-[#1E1C1B] leading-relaxed">
                            We believe meaningful growth begins within—in how you think, decide, and lead.    What is refined internally scales externally.
                        </p>
                        {/* <p className="text-base md:text-lg text-[#1E1C1B] leading-relaxed">
                            What is refined internally scales externally.
                        </p> */}
                    </div>

                    {/* Second paragraph block */}
                    <div className="space-y-2">
                        <p className="text-base md:text-lg text-[#1E1C1B] leading-relaxed">
                            Zara Curates brings alignment to brand, product, and direction.
                        </p>
                        <p className="text-base md:text-lg text-[#1E1C1B] leading-relaxed">
                            We refine thinking before we design execution.
                        </p>
                        <p className="text-base md:text-lg text-[#1E1C1B] leading-relaxed">
                            So growth feels composed—not chaotic.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurPhilosophy;