// const Journal = () => {
//   return (
//     <section className="bg-[#FAF9F6] py-25 md:py-32 px-6">
//       <div className="container w-full mx-auto md:max-w-[65%]">

//         {/* Top Label */}
//         <div className="text-left mb-8">
//           <p className="text-xs md:text-sm text-neutral-400 uppercase tracking-[0.3em]">
//             From The Archive
//           </p>
//         </div>

//         {/* Header */}
//         <div className="text-left mb-16 md:mb-20">
//           <h2 className="font-serif text-5xl md:text-7xl text-[#1E1C1B]/90 leading-tight italic font-light">
//             <em className="">The</em> <span className="font-serif">Journal</span>
//           </h2>
//         </div>

//         {/* Content */}
//         <div className="space-y-12 md:space-y-16 max-w-2xl">
//           {/* Introduction */}
//           <p className="text-base md:text-lg text-[#1E1C1B] leading-relaxed">
//             The Journal extends the Archive.
//           </p>

//           {/* Description */}
//           <p className="text-base md:text-lg text-[#1E1C1B] leading-relaxed">
//             Here, ideas are not condensed—they are unfolded.
//           </p>

//           {/* Details */}
//           <p className="text-base md:text-lg text-[#1E1C1B] leading-relaxed">
//             Long-form reflections on structure, ambition, wealth, and the inner architecture behind meaningful work.
//           </p>

//           {/* Status */}
//           <p className="text-base md:text-lg text-neutral-400 leading-relaxed italic">
//             Entry 001 in progress.
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Journal;


const Archive = () => {
  return (
    <section className="bg-[#FAF9F6] py-25 md:py-32 px-6">
      <div className="container w-full mx-auto md:max-w-[65%]">
        {/* Top Label */}
        <div className="text-left mb-8">
          <p className="text-xs md:text-sm text-neutral-400 uppercase tracking-[0.3em]">
            From The Archive
          </p>
        </div>
        {/* Header */}
        <div className="text-left mb-16 md:mb-20">
          <h2 className="font-serif text-[30px] md:text-7xl text-[#1E1C1B]/90 leading-tight italic font-light">
            <em>The</em> <span className="font-serif">Archive</span>
          </h2>
        </div>
        {/* Content */}
        <div className="space-y-12 md:space-y-16 max-w-2xl">
          {/* Introduction */}
          <p className="text-base md:text-lg text-[#1E1C1B] leading-relaxed">
            A private record of thought.
          </p>
          {/* Description */}
          <p className="text-base md:text-lg text-[#1E1C1B] leading-relaxed">
            Preserved reflections on clarity, ambition, structure, and the philosophy behind enduring work.
          </p>
          {/* Details */}
          <p className="text-base md:text-lg text-[#1E1C1B] leading-relaxed">
            Collected slowly. Released deliberately.
          </p>
          {/* Status */}
          <p className="text-base md:text-lg text-neutral-400 leading-relaxed italic">
            Entry 001.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Archive;