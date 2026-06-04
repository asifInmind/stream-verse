import HeroSection from "./components/HeroSection";
import MobilePhones from "./components/MobilePhones";
import KeyFeatures from "./components/KeyFeatures";
import Banner from "./components/Banner";
import Pricing from "./components/Pricing";
import Instruction from "./components/Instructions";
export default function Home() {
  return (
    <>
      <section className="main bg-[#141414]">
        <HeroSection />
        <MobilePhones />
        <KeyFeatures />
        <Instruction />
        <Pricing />
        <Banner />
      </section>
    </>
  );
}
