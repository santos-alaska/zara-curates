import Image from "next/image";

const InspirationGrid = () => {
  const images = [
    // Coffee/Table
    "https://images.unsplash.com/photo-1517817748493-49ec54a32465?q=80&w=600&auto=format&fit=crop",
    // Vase/Book
    "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=600&auto=format&fit=crop",
    // Shadow/Painting
    "https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=600&auto=format&fit=crop",
    // Chair/Texture
    "https://images.unsplash.com/photo-1503602642458-2321114453ad?q=80&w=600&auto=format&fit=crop",
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-2xl mx-auto grid grid-cols-2 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative aspect-[4/5] bg-neutral-100 overflow-hidden">
            <Image 
              src={src} 
              alt="Inspiration" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-700" 
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default InspirationGrid;