import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CoachingCards from "@/components/CoachingCards";
import SchoolPrograms from "@/components/SchoolPrograms";
import MentoringPrograms from "@/components/MentoringPrograms";
import WhyChooseUs from "@/components/WhyChooseUs";
import GoogleReviews from "@/components/GoogleReviews";
import ResultsBanner from "@/components/ResultsBanner";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

export default function Home2() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CoachingCards />
        <SchoolPrograms />
        <MentoringPrograms />
        <WhyChooseUs />
        <GoogleReviews />
        <ResultsBanner />
        <FooterCTA />
      </main>
      <Footer />
    </>
  );
}
