import Image from "next/image";

const InspirationGrid = () => {
  const images = [
    "/inspo1.jpg",
    // Vase/
    "/inspo2.jpg",
    "/inspo3.jpg",
    "/inspo4.jpg",
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