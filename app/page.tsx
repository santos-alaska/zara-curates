import CuratedOfferings from "@/components/CuratedOfferings";
import Footer from "@/components/Footer";
import InspirationGrid from "@/components/InspirationGrid";
import Invitation from "@/components/Invitation";
import Journal from "@/components/Journal";
import Newsletter from "@/components/Newsletter";
import SelectedWorks from "@/components/SelectedWorks";
import ImageCollage from "@/components/ImageCollage";
import Image from "next/image";
import Hero from "@/components/Hero";
import OurPhilosophy from "@/components/OurPhilosophy";

export default function Home() {
  return (
    <>

      <Hero />

      {/* Section 2: Our Philosophy */}
      <OurPhilosophy />

      {/* Section 3: The Zara Curate Approach */}
      <section className="bg-[#f9f7f4] py-20 md:py-32 px-4">
        <div className="container mx-auto w-full md:max-w-[65%] text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-12">
            The Zara Curate Approach
          </h2>

          <div className="space-y-12 text-left">
            {/* Item 1 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 bg-[#3f3f3f] text-white font-serif text-2xl w-14 h-14 flex items-center justify-center rounded-lg">
                1
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl mb-2">
                  Discovery & Alignment
                </h3>
                <p className="text-neutral-600">
                  We begin by understanding your vision, challenges, mindset,
                  and goals.
                </p>
              </div>
            </div>
            <hr className="border-neutral-300" />

            {/* Item 2 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 bg-[#3f3f3f] text-white font-serif text-2xl w-14 h-14 flex items-center justify-center rounded-lg">
                2
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl mb-2">
                  Strategic Clarity
                </h3>
                <p className="text-neutral-600">
                  We define direction, brand, product, and financial thinking,
                  before design begins.
                </p>
              </div>
            </div>
            <hr className="border-neutral-300" />

            {/* Item 3 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 bg-[#3f3f3f] text-white font-serif text-2xl w-14 h-14 flex items-center justify-center rounded-lg">
                3
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl mb-2">
                  Intentional Creation
                </h3>
                <p className="text-neutral-600">
                  Every design and decision is crafted with meaning, not excess.
                </p>
              </div>
            </div>
            <hr className="border-neutral-300" />

            {/* Item 4 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 bg-[#3f3f3f] text-white font-serif text-2xl w-14 h-14 flex items-center justify-center rounded-lg">
                4
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl mb-2">
                  Refinement & Growth
                </h3>
                <p className="text-neutral-600">
                  We refine, align, and prepare you for sustainable expansion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SelectedWorks />
      <ImageCollage />

      <CuratedOfferings />
      <Invitation />
      <Journal />
      <Newsletter />
      <InspirationGrid />
      <Footer />
    </>
  );
}