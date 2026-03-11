import CuratedOfferings from "@/components/CuratedOfferings";
import InspirationGrid from "@/components/InspirationGrid";
import Invitation from "@/components/Invitation";
import Journal from "@/components/Journal";
import Newsletter from "@/components/Newsletter";
import SelectedWorks from "@/components/SelectedWorks";
import ImageCollage from "@/components/ImageCollage";
import Image from "next/image";
import Hero from "@/components/Hero";
import OurPhilosophy from "@/components/OurPhilosophy";
import Approach from "@/components/Approach";

export default function Home() {
  return (
    <>

      <Hero />

      {/* Section 2: Our Philosophy */}
      <OurPhilosophy />

      {/* Section 3: The Zara Curate Approach */}
      <Approach />


      <SelectedWorks />
      <ImageCollage />

      <CuratedOfferings />
      <Invitation />
      <Journal />
      <Newsletter />
      <InspirationGrid />
    </>
  );
}