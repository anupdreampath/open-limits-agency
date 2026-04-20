import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BRAND } from '@/lib/assets';
import Image from 'next/image';

export default function DOOHPage() {
  return (
    <main>
      <Nav />

      {/* Hero Section with Background Image */}
      <section className="relative py-20 md:py-28 min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://screenox.in/wp-content/uploads/2023/06/Website-Template-4-scaled.jpg"
            alt="DOOH Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm rounded-full">
              Digital Out-of-Home
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-6xl leading-tight text-white">
              DOOH <span className="italic">Advertising</span>
            </h1>
            <p className="mt-5 text-white/80 text-lg leading-relaxed">
              DOOH stands for Digital Out-of-Home advertising. It refers to the use of digital media 
              screens and displays placed in public locations to deliver targeted advertising and 
              messages to a wide audience. DOOH encompasses various digital signage formats such as 
              billboards, kiosks, digital transit displays, interactive touchscreens, and more.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={`mailto:${BRAND.email}`} className="btn-pill">
                Get a Quote
                <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Brands Section */}
      <section className="py-16 bg-ink">
        <div className="max-w-7xl mx-auto px-5">
          <p className="text-center text-white/60 text-sm uppercase tracking-widest mb-8">
            Big Brands Trust Us
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {/* Rare Rabbit - Styled as Logo */}
            <div className="flex items-center justify-center h-28 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
              <div className="text-center">
                <span className="text-white text-2xl font-bold tracking-tight">RARE</span>
                <span className="text-white text-2xl font-light tracking-widest">RABBIT</span>
              </div>
            </div>
            {/* Mamaearth - Official Logo */}
            <div className="flex items-center justify-center h-28 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
              <Image
                src="https://images.mamaearth.in/wysiwyg/mamaearth-logo.png"
                alt="Mamaearth"
                width={140}
                height={50}
                className="object-contain"
              />
            </div>
            {/* K Beauty - Styled as Logo */}
            <div className="flex items-center justify-center h-28 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
              <div className="text-center">
                <span className="text-pink-400 text-4xl font-serif italic">K</span>
                <span className="text-white text-xl font-light ml-1">BEAUTY</span>
              </div>
            </div>
            {/* Fortis - Official Logo */}
            <div className="flex items-center justify-center h-28 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
              <Image
                src="https://www.fortishealthcare.com/themes/custom/fortis/logo.png"
                alt="Fortis Hospitals"
                width={140}
                height={50}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is DOOH Section - Image Heavy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/dooh-advertising.png"
                alt="DOOH Advertising"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="eyebrow green">What is DOOH</span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink">
                Dynamic Digital <span className="italic">Displays</span>
              </h2>
              <p className="mt-4 text-ink/70 leading-relaxed">
                Unlike traditional static billboards or posters, DOOH uses digital technology to 
                display dynamic and engaging content, including videos, animations, and interactive 
                elements. These digital displays are often connected to a network that allows for 
                real-time content updates and audience targeting based on factors such as location, 
                time of day, and demographics.
              </p>
              <p className="mt-4 text-ink/70 leading-relaxed">
                DOOH has gained popularity due to its ability to capture the attention of consumers 
                in high-traffic areas, such as shopping malls, airports, bus stops, train stations, 
                and city centers. Advertisers can leverage DOOH to deliver targeted messages, increase 
                brand awareness, and engage with consumers in a more interactive and immersive manner.
              </p>
            </div>
          </div>
          
          {/* Full Width Image Banner */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="https://screenox.in/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-23-at-2.00.31-PM-e1729861904529-1024x734.jpeg"
              alt="DOOH Installation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-white text-xl font-display">Premium Digital Screens in High-Traffic Locations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Media Network Section - Image Focused with Text Overlay */}
      <section className="py-20 section-lavender">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <span className="eyebrow">Our Network</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink">
              Media Across <span className="italic">India</span>
            </h2>
            <p className="mt-4 text-ink/70 max-w-xl mx-auto">
              Premium digital screen placements in India&apos;s most high-traffic venues
            </p>
          </div>

          {/* Large Featured Venues - 2 column layout */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Jio World Plaza */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src="https://screenox.in/wp-content/uploads/2024/10/Javed_JWP.jpg"
                alt="Jio World Plaza"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 bg-greenbrand text-white text-xs font-medium rounded-full mb-3">
                  Ultra HNI Audience
                </span>
                <h3 className="font-display text-2xl text-white">Jio World Plaza</h3>
                <div className="mt-3 flex gap-6 text-white/80 text-sm">
                  <span><strong className="text-white">1</strong> Big Videowall</span>
                  <span><strong className="text-white">19</strong> Digital Screens</span>
                  <span><strong className="text-white">3L</strong> Reach</span>
                </div>
              </div>
            </div>

            {/* Jio World Convention Centre */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src="https://screenox.in/wp-content/uploads/2023/08/JWC-collage.jpg"
                alt="Jio World Convention Centre"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 bg-greenbrand text-white text-xs font-medium rounded-full mb-3">
                  India&apos;s Largest Video Wall
                </span>
                <h3 className="font-display text-2xl text-white">Jio World Convention Centre</h3>
                <div className="mt-3 flex gap-6 text-white/80 text-sm">
                  <span><strong className="text-white">55+</strong> Screens</span>
                  <span><strong className="text-white">3</strong> Videowalls</span>
                  <span><strong className="text-white">6L+</strong> Reach</span>
                </div>
              </div>
            </div>
          </div>

          {/* Medium Venues - 3 column layout */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* NESCO */}
            <div className="relative h-[320px] rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src="https://screenox.in/wp-content/uploads/2025/10/Nesco-JWD-Website-2.jpg"
                alt="NESCO"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full mb-2">
                  Premier Exhibition Space
                </span>
                <h3 className="font-display text-xl text-white">NESCO</h3>
                <div className="mt-2 flex gap-4 text-white/70 text-xs">
                  <span><strong className="text-white">80+</strong> Screens</span>
                  <span><strong className="text-white">7L+</strong> Reach</span>
                </div>
              </div>
            </div>

            {/* Cinema Network */}
            <div className="relative h-[320px] rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src="https://screenox.in/wp-content/uploads/2023/08/Pvr-and-inox-collage-1.jpg"
                alt="Cinema Network"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full mb-2">
                  90L+ Monthly Reach
                </span>
                <h3 className="font-display text-xl text-white">Cinema Network</h3>
                <div className="mt-2 flex gap-4 text-white/70 text-xs">
                  <span><strong className="text-white">56</strong> Cities</span>
                  <span><strong className="text-white">1,500</strong> Screens</span>
                </div>
              </div>
            </div>

            {/* Cafe Coffee Day */}
            <div className="relative h-[320px] rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src="https://screenox.in/wp-content/uploads/2023/08/CCD-Collage-1.png"
                alt="Cafe Coffee Day"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full mb-2">
                  40-50 Min Dwell Time
                </span>
                <h3 className="font-display text-xl text-white">Cafe Coffee Day</h3>
                <div className="mt-2 flex gap-4 text-white/70 text-xs">
                  <span><strong className="text-white">96+</strong> Screens</span>
                  <span><strong className="text-white">7L+</strong> Reach</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Venue - Full width */}
          <div className="relative h-[280px] rounded-2xl overflow-hidden group cursor-pointer">
            <Image
              src="https://screenox.in/wp-content/uploads/2024/10/Javed_Railway.jpg"
              alt="Barista Network"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <span className="inline-block px-3 py-1 bg-greenbrand text-white text-xs font-medium rounded-full mb-3">
                Captive Audience
              </span>
              <h3 className="font-display text-2xl text-white">Barista</h3>
              <div className="mt-3 flex gap-6 text-white/80 text-sm">
                <span><strong className="text-white">50</strong> Digital Screens</span>
                <span><strong className="text-white">50</strong> Cafes</span>
                <span><strong className="text-white">75K</strong> Reach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose DOOH - With Side Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <span className="eyebrow green">Why DOOH</span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink">
                The Power of <span className="italic">Digital Screens</span>
              </h2>
              <p className="mt-4 text-ink/70">
                Digital Out-of-Home advertising offers unmatched advantages over traditional static billboards.
              </p>
            </div>
            <div className="relative h-[300px] rounded-2xl overflow-hidden">
              <Image
                src="https://screenox.in/wp-content/uploads/2024/10/Picture85-e1729861575260.jpg"
                alt="DOOH Benefits"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Dynamic Content',
                desc: 'Display videos, animations, and interactive elements that capture attention far better than static posters.'
              },
              {
                num: '02',
                title: 'Real-time Updates',
                desc: 'Connected network allows for instant content changes based on time, weather, or special events.'
              },
              {
                num: '03',
                title: 'Audience Targeting',
                desc: 'Target by location, time of day, and demographics to reach your ideal consumers when they are most receptive.'
              },
              {
                num: '04',
                title: 'High-Traffic Areas',
                desc: 'Strategic placements in malls, airports, transit stations, and city centers where consumers spend time.'
              },
              {
                num: '05',
                title: 'Interactive Engagement',
                desc: 'Create immersive brand experiences that go beyond traditional advertising to build deeper connections.'
              },
              {
                num: '06',
                title: 'Brand Awareness',
                desc: 'Increase visibility and recognition with high-frequency exposure in premium environments.'
              }
            ].map((item) => (
              <div key={item.num} className="bg-creamSoft/50 rounded-2xl p-8 border border-ink/5">
                <span className="text-leaf font-display text-xl">{item.num}</span>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-ink/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Specs */}
      <section className="py-20 section-cream">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="eyebrow orange">Campaign Specs</span>
              <h2 className="mt-3 font-display text-4xl text-ink" style={{ color: '#965F27' }}>
                Everything You Need to <span className="italic">Launch</span>
              </h2>
              <p className="mt-4 text-ink/70">
                Flexible campaign options designed to meet your brand objectives and budget.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'CPM Pricing', value: 'Competitive Rates' },
                { label: 'Spot Duration', value: '10-30 seconds' },
                { label: 'Resolution', value: '4K HDR Display' },
                { label: 'Targeting', value: 'Audience & Time' },
                { label: 'Service Level', value: 'Fully Managed' },
                { label: 'Reporting', value: 'Weekly Insights' }
              ].map((spec) => (
                <div key={spec.label} className="bg-white rounded-xl p-4 text-center border border-ink/5">
                  <p className="text-xs text-ink/60 uppercase tracking-wide">{spec.label}</p>
                  <p className="mt-1 font-display font-semibold text-ink">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <span className="eyebrow green">Applications</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink">
              Perfect For <span className="italic">Your Goals</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Brand Awareness Campaigns',
                desc: 'Build brand recognition at scale with high-frequency exposure in premium environments where consumers spend quality time.'
              },
              {
                title: 'Product Launches',
                desc: 'Create buzz for new products with targeted campaigns during peak hours at locations matching your target demographics.'
              },
              {
                title: 'Event Promotions',
                desc: 'Drive ticket sales and registrations with geo-targeted messaging near venues and in relevant neighborhoods.'
              },
              {
                title: 'Retail & QSR Marketing',
                desc: 'Drive foot traffic to nearby stores with location-based targeting and compelling promotional content.'
              }
            ].map((useCase, idx) => (
              <div key={idx} className="bg-mintSoft/30 rounded-2xl p-8 border border-ink/5">
                <h3 className="font-display text-xl font-semibold text-ink">{useCase.title}</h3>
                <p className="mt-3 text-ink/70">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 section-green">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white">
            Ready to Go <span className="italic">Digital?</span>
          </h2>
          <p className="mt-5 text-white/80 max-w-xl mx-auto">
            Contact our team today to discuss your DOOH advertising campaign and get a custom quote for your brand.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={`mailto:${BRAND.email}`} className="btn-pill !bg-white !text-greenbrand">
              Get a Quote
              <span className="arrow !bg-greenbrand !text-white">→</span>
            </a>
            <a href={`tel:${BRAND.phone.replace(/\s/g, '')}`} className="btn-pill !bg-transparent !text-white border border-white/30">
              Call {BRAND.phone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
