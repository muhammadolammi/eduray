import Header from "@/components/Header/page";
import SectionFive from "@/components/SectionFive/page";
import SectionFour from "@/components/SectionFour/page";
import SectionOne from "@/components/SectionOne/page";
import SectionThree from "@/components/SectionThree/page";
import SectionTwo from "@/components/SectionTwo/page";
import Reviews from "@/components/Review/page";
import SectionSix from "@/components/SectionSix/page";
import FrequentlyAskedQuestions from "@/components/Faq/page";
import Footer from "@/components/Footer/page";

export default function Home() {
  return (
    <div>
      <div className="px-5 lg:px-40  md:px-20">
        <Header />
        <SectionOne />
        <SectionTwo />
        <div>
          <SectionThree />
        </div>
      </div>
      <SectionFour />
      <div className="px-5 lg:px-40  md:px-20 overflow-x-hidden">
        <SectionFive />
        <Reviews />
      </div>
      <SectionSix />
      <div className="px-5 lg:px-40  md:px-20 overflow-x-hidden">
        <FrequentlyAskedQuestions />
        <Footer />
      </div>
    </div>
  );
}
