// import Image from "next/image";

// const Journal = () => {
//   return (
//     <section className="bg-[#FAF9F6] py-32 flex justify-center items-center px-4 relative overflow-hidden">

//       {/* Paper Card */}
//       <div className="relative bg-white w-full max-w-md p-8 md:p-12 shadow-2xl transform rotate-1 border border-neutral-100">

//         {/* Red Pushpin */}
//         <div className="absolute -top-6 -right-4 z-20 w-16 md:w-20 drop-shadow-xl">
//            {/* Using a generic push pin image */}
//           {/* <Image 
//             src="https://cdn-icons-png.flaticon.com/512/1221/1221086.png" // Replacement for the specific red pin
//             alt="Pin" 
//             width={80} 
//             height={80} 
//             className="object-contain opacity-90"
//           /> */}
//         </div>

//         {/* Folded Corner Effect (CSS Triangle) */}
//         <div className="absolute top-0 left-0 border-t-[60px] border-r-[60px] border-t-[#3e3c38] border-r-transparent drop-shadow-lg z-10"></div>
//         <div className="absolute top-0 left-0 border-t-[60px] border-r-[60px] border-t-white border-r-transparent z-0"></div>

//         {/* Content */}
//         <div className="mt-8 text-center">
//           <h2 className="font-serif text-5xl text-[#3A3836] mb-8">The Journal</h2>

//           {/* Coming Soon Box */}
//           <div className="bg-[#8C8681] text-white py-6 mb-8 flex items-center justify-center">
//              <span className="font-serif italic tracking-widest text-lg">~ COMING SOON</span>
//           </div>

//           {/* Dark Description Box */}
//           <div className="bg-[#3E3B37] text-neutral-300 p-8 text-left text-sm leading-relaxed font-light">
//             <p className="mb-4">
//               Every brand has a story. Every design, a thought. 
//               Our journal will be a curated space where ideas, inspiration, and subtle moments of magic converge— a place to experience the philosophy, textures, and reflection that define Zara Curates.
//             </p>
//             <p>
//               Stay tuned as we open a window into our world of curated insights, behind-the-scenes moments, and the inspiration that shape the ordinary.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Journal;


const Journal = () => {
  return (
    <section className="bg-[#FAF9F6] py-20 md:py-32 px-6">
      <div className="container w-full mx-auto md:max-w-[65%]">

        {/* Top Label */}
        <div className="text-left mb-8">
          <p className="text-xs md:text-sm text-neutral-400 uppercase tracking-[0.3em]">
            From The Archive
          </p>
        </div>

        {/* Header */}
        <div className="text-left mb-16 md:mb-20">
          <h2 className="font-serif text-5xl md:text-7xl text-[#1E1C1B]/90 leading-tight italic font-light">
            <em className="">The</em> <span className="font-serif">Journal</span>
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-12 md:space-y-16 max-w-2xl">
          {/* Introduction */}
          <p className="text-base md:text-lg text-[#1E1C1B] leading-relaxed">
            The Journal extends the Archive.
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-[#1E1C1B] leading-relaxed">
            Here, ideas are not condensed—they are unfolded.
          </p>

          {/* Details */}
          <p className="text-base md:text-lg text-[#1E1C1B] leading-relaxed">
            Long-form reflections on structure, ambition, wealth, and the inner architecture behind meaningful work.
          </p>

          {/* Status */}
          <p className="text-base md:text-lg text-neutral-400 leading-relaxed italic">
            Entry 001 in progress.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Journal;