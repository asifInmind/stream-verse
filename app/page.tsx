import HeroSection from "./components/HeroSection"
import MobilePhones from "./components/MobilePhones"
import KeyFeatures from "./components/KeyFeatures"
import Banner from "./components/Banner"
export default function Home() {
  return (
   <>
   <section className="main bg-[#141414]">

   <HeroSection/>
   <MobilePhones/>
   <KeyFeatures/>
   <Banner/>
   </section>
   </>
  );
}
