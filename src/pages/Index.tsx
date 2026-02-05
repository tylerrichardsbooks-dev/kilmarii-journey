import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutAuthorSection from '@/components/AboutAuthorSection';
import AboutBookSection from '@/components/AboutBookSection';
import MediaKitSection from '@/components/MediaKitSection';
import TrailerSection from '@/components/TrailerSection';
import ReviewsSection from '@/components/ReviewsSection';
import BuySection from '@/components/BuySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutAuthorSection />
        <AboutBookSection />
        <MediaKitSection />
        <TrailerSection />
        <ReviewsSection />
        <BuySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
