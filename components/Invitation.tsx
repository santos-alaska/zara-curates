// import Link from "next/link";

// const Invitation = () => {
//   return (
//     <section className="flex flex-col w-full"> 
//       {/* Top Part: Dark Texture */}
//       <div 
//         className="w-full h-[40vh] bg-[#1E1C1B] flex items-center justify-center text-[#E5E5E5] relative"
//         style={{
//              // Optional: Add a subtle texture or noise if desired
//              backgroundImage: "linear-gradient(to bottom, rgba(30,28,27,0.8), rgba(30,28,27,1)), url('https://www.transparenttextures.com/patterns/cube-coat.png')"
//         }}
//       >
//         <h2 className="font-serif text-5xl md:text-6xl text-center leading-tight">
//           An Invitation to <br /> Begin
//         </h2>

//         {/* Decorative Ribbon/Shape (Abstract representation) */}
//         <div className="absolute bottom-0 left-0 w-32 h-32 opacity-20 bg-white blur-3xl rounded-full transform -translate-x-10 translate-y-10"></div>
//       </div>

//       {/* Bottom Part: White Content */}
//       <div className="w-full bg-white py-24 px-6 flex flex-col items-center text-center">
//         <p className="max-w-xl text-neutral-600 text-lg leading-relaxed mb-10 font-light">
//           Every collaboration begins with intention.<br />
//           If you’re building something considered and feel aligned with our approach, we invite you to begin a private conversation.
//         </p>

//         <Link href="/contact">
//           <button className="bg-[#3A3836] text-white px-10 py-4 rounded-sm hover:bg-black transition-all duration-300 font-medium text-sm tracking-wide">
//             Begin Your Curation
//           </button>
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default Invitation;


import Image from "next/image";
import Link from "next/link";

const Invitation = () => {
  return (
    <section className="flex flex-col w-full">
      {/* Top Part: Dark Background Image */}
      <div className="w-full h-[40vh] relative flex items-center justify-center text-[#E5E5E5]">

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/prop.jpg"
            alt="Dark textured background"
            fill
            className="object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/70"></div>
       
        </div>

        {/* Content */}
        <h2 className="font-serif text-5xl md:text-6xl text-center leading-tight relative z-10">
          An Invitation to <br /> Begin
        </h2>

        {/* Decorative Ribbon/Shape (Abstract representation) */}
        <div className="absolute bottom-0 left-0 w-32 h-32 opacity-20 bg-white blur-3xl rounded-full transform -translate-x-10 translate-y-10 z-0"></div>
      </div>

      {/* Bottom Part: White Content */}
      <div className="w-full bg-white py-24 px-6 flex flex-col items-center text-center">
        <p className="max-w-xl text-neutral-600 text-lg leading-relaxed mb-10 font-light">
          Every collaboration begins with intention.<br />
          If you're building something considered and feel aligned with our approach, we invite you to begin a private conversation.
        </p>

        <Link href="/contact">
          <button className="bg-[#3A3836] text-white px-12 py-4 hover:bg-black transition-all duration-300 font-medium text-sm tracking-wide">
            Begin Your Curation
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Invitation;