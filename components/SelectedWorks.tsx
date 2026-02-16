


import Image from "next/image";

const SelectedWorks = () => {
  return (
    <section className="flex flex-col w-full mb-14">

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
          <p className="font-serif text-4xl md:text-7xl leading-tight mb-8 text-light">
            Executed Work & <br />
            <span className="">Thought pieces</span>
          </p>

          <div className="space-y-6 text-lg md:text-xl text-neutral-100 font-light leading-relaxed max-w-2xl mx-auto">
            <p>
              A collection of executed works and ongoing explorations.
              Each shaped by clarity, discipline, and quiet ambition.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default SelectedWorks;