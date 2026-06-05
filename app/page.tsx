import HeroSection from "./components/HeroSection";
import MobilePhones from "./components/MobilePhones";
import KeyFeatures from "./components/KeyFeatures";
import Banner from "./components/Banner";
import Pricing from "./components/Pricing";
import Instruction from "./components/Instructions";
import EmblaCarousel from "./components/EmblaCarousel";

export default function Home() {
  const OPTIONS = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <section className="bg-[#141414]">
        <HeroSection />
        <MobilePhones />
        <KeyFeatures />
        <Instruction />
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        <Pricing />
        <Banner />
      </section>
    </>
  );
}
