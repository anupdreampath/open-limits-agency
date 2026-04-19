import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <span className="eyebrow">About us</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl leading-tight text-ink">
            A creative performance agency <br /><span className="italic">built for scale.</span>
          </h1>
          <p className="mt-5 text-ink/70 max-w-2xl mx-auto">
            Open Limits combines creator-led storytelling with performance rigor — every ad is briefed,
            scripted, shot and edited to move the needle on ROAS.
          </p>
        </div>
      </section>
      <About />
      <Process />
      <Testimonials />
      <Footer />
    </main>
  );
}
