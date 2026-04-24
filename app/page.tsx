import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PaymentMarquee from "@/components/PaymentMarquee";
import ArticleBody from "@/components/ArticleBody";
import Footer from "@/components/Footer";
import ReadingProgress from "@/components/ReadingProgress";
import BackToTop from "@/components/BackToTop";

export default function HomePage() {
  return (
    <>
      <ReadingProgress />
      <Navbar />
      <main id="main">
        <HeroSection />
        <PaymentMarquee />
        <ArticleBody />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
