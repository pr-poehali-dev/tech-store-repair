import TopHeader from '@/components/home/TopHeader';
import MainHeader from '@/components/home/MainHeader';
import HeroBanner from '@/components/home/HeroBanner';
import FeaturesSection from '@/components/home/FeaturesSection';
import PopularProducts from '@/components/home/PopularProducts';
import RepairServices from '@/components/home/RepairServices';
import RepairPrices from '@/components/home/RepairPrices';
import ScreenPrices from '@/components/home/ScreenPrices';
import ContactSection from '@/components/home/ContactSection';
import Footer from '@/components/home/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopHeader />
      <MainHeader />
      <HeroBanner />
      <FeaturesSection />
      <PopularProducts />
      <RepairServices />
      <RepairPrices />
      <ScreenPrices />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;