


import Image from "next/image";

const SelectedWorks = () => {
  return (
    <section className="flex flex-col w-full mb-48">
      
      {/* TOP SECTION: Text Content (Dark Background Image) */}
      <div className="w-full relative text-[#E5E5E5] py-20 px-6 md:px-20 flex flex-col justify-center items-center ">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/selected-work.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
            Selected Works & <br />
            <span className="italic font-light text-neutral-400">Concepts</span>
          </h2>

          <div className="space-y-6 text-xl text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
            <p>
              A curated selection of executed works and conceptual explorations.
              Each piece reflects our way of thinking — intentional,
              human-centered, and quietly ambitious.
            </p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default SelectedWorks;