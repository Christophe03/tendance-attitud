import Header from '@/components/layout/Header';
import HeroSection from '@/components/home/HeroSection';
import ReviewsSection from '@/components/home/ReviewsSection';
import ServicesSection from '@/components/home/ServicesSection';
import AboutSection from '@/components/home/AboutSection';
import InstagramSection from '@/components/home/InstagramSection';
import ContactMapSection from '@/components/home/ContactMapSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-olive-800 text-[#FDFBF7] selection:bg-[#FFE88B] selection:text-[#242B17]">
      <Header />
      <main id="main-content">
        <HeroSection />
        <ReviewsSection />
        <ServicesSection />
        <AboutSection />
        <InstagramSection />
        <ContactMapSection />
      </main>
      <Footer />
    </div>
  );
}
