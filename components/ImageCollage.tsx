import Image from "next/image";

const ImageCollage = () => {
  return (
    <div className="w-full relative py-20 min-h-[1200px] ">
          <div className="relative w-full max-w-4xl mx-auto h-full z-10">

        {/* 1. Top Left: Small Interior/Ceramics */}
        <div className="absolute top-0 left-4 md:left-10 z-10 w-40 md:w-52 shadow-xl hover:z-50 transition-all duration-500 hover:scale-105">
          <Image 
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=600&auto=format&fit=crop" 
            alt="Ceramic detail" 
            width={200} 
            height={300} 
            className="object-cover h-64 w-full grayscale-[20%]" 
          />
        </div>

        {/* 2. Top Right: Dark Shelf/Texture */}
        <div className="absolute top-10 right-4 md:right-20 z-0 w-48 md:w-64 shadow-lg opacity-90">
          <Image 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600&auto=format&fit=crop" 
            alt="Interior texture" 
            width={300} 
            height={400} 
            className="object-cover h-80 w-full" 
          />
        </div>

        {/* 3. Center: Face/Portrait (Main Focal Point) */}
        <div className="absolute top-48 left-1/2 transform -translate-x-1/2 z-20 w-64 md:w-80 shadow-2xl">
          <Image 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop" 
            alt="Portrait" 
            width={400} 
            height={600} 
            className="object-cover h-[450px] w-full" 
          />
        </div>

        {/* 4. Middle Left: Tall Fashion/Bag (Vera) */}
        <div className="absolute top-[500px] left-4 md:left-0 z-30 w-56 md:w-72 shadow-2xl">
          <div className="relative group">
            <Image 
              src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=600&auto=format&fit=crop" 
              alt="Fashion editorial" 
              width={400} 
              height={600} 
              className="object-cover h-[500px] w-full" 
            />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-serif text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">VERA</span>
          </div>
        </div>

        {/* 5. Middle Right: Warm Chair (Elan) */}
        <div className="absolute top-[600px] right-4 md:-right-10 z-10 w-48 md:w-64 shadow-xl">
          <div className="relative group">
            <Image 
              src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=600&auto=format&fit=crop" 
              alt="Interior design" 
              width={300} 
              height={400} 
              className="object-cover h-80 w-full" 
            />
            <span className="absolute bottom-4 left-4 text-white font-serif text-3xl italic drop-shadow-md">Elan</span>
          </div>
        </div>

        {/* 6. Bottom Left: Phone Interface */}
        <div className="absolute bottom-32 left-8 md:left-20 z-40 w-40 md:w-56 shadow-2xl rotate-[-6deg]">
          <Image 
            src="https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=600&auto=format&fit=crop" 
            alt="App interface" 
            width={300} 
            height={600} 
            className="object-cover h-80 w-full rounded-2xl border-4 border-[#1E1C1B]" 
          />
        </div>

        {/* 7. Bottom Center: Tablet/Product */}
        <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 md:translate-x-20 z-20 w-64 md:w-80 shadow-xl">
          <Image 
            src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=800&auto=format&fit=crop" 
            alt="Product shot" 
            width={400} 
            height={500} 
            className="object-cover h-72 w-full" 
          />
        </div>

      </div>
    </div>
  );
};

export default ImageCollage;