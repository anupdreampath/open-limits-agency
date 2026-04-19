import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main>
      <Nav />
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl leading-tight text-ink">
            Let's <span className="italic">connect.</span>
          </h1>
          <p className="mt-5 text-ink/70 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Reach out and let's create something amazing together.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Address */}
            <div className="bg-cream/30 rounded-2xl p-8 border border-ink/5">
              <div className="w-12 h-12 rounded-full bg-greenbrand/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-greenbrand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-semibold text-ink mb-3">Address</h3>
              <p className="text-ink/70 leading-relaxed">
                TOWER -1, Assotech Business Cresterra<br />
                UNIT NO.1009, PLOT NO. 22<br />
                Sector 135, Noida<br />
                Uttar Pradesh 201301
              </p>
            </div>

            {/* Phone */}
            <div className="bg-lavender/30 rounded-2xl p-8 border border-ink/5">
              <div className="w-12 h-12 rounded-full bg-greenbrand/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-greenbrand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-semibold text-ink mb-3">Phone</h3>
              <a href="tel:09217484799" className="text-greenbrand font-medium text-lg hover:underline">
                +91 92174 84799
              </a>
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-12 rounded-2xl overflow-hidden border border-ink/10 h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.644688549418!2d77.3826!3d28.5428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce64a0b8f0f0f%3A0x4a8dcdd7c5417f18!2sAssotech%20Business%20Cresterra%2C%20Sector%20135%2C%20Noida!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
