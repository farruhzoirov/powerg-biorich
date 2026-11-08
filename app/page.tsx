import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import WhySection from "@/components/WhySection";
import CategoriesSection from "@/components/CategoriesSection";
import ProductsSection from "@/components/ProductsSection";
import GingerStory from "@/components/GingerStory";
import AboutSection from "@/components/AboutSection";
import CertificatesSection from "@/components/CertificatesSection";
import CtaBand from "@/components/CtaBand";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustMarquee />
        <WhySection />
        <CategoriesSection />
        <ProductsSection />
        <GingerStory />
        <AboutSection />
        <CertificatesSection />
        <CtaBand />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
