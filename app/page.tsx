import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import PerformancePartnershipCombo from '@/components/PerformancePartnershipCombo';
import PortfolioGrid from '@/components/PortfolioGrid';
import Process from '@/components/Process';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import CtaCard from '@/components/CtaCard';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustedBy />
      <PerformancePartnershipCombo />
      <PortfolioGrid />
      <Process />
      <About />
      <Testimonials />
      <CtaCard />
      <Footer />
    </main>
  );
}
