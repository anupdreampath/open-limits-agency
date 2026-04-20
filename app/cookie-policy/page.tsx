import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BRAND } from '@/lib/assets';

export default function CookiePolicy() {
  return (
    <>
      <Nav />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          <span className="eyebrow green">Legal</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl text-ink">
            Cookie <span className="italic">Policy</span>
          </h1>
          <p className="mt-4 text-ink/60">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-creamSoft">
        <div className="max-w-4xl mx-auto px-5">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-ink/5">
            <h2 className="font-display text-2xl text-ink mb-4">What Are Cookies</h2>
            <p className="text-ink/70 mb-6">
              Cookies are small text files that are placed on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences 
              and understanding how you use our site.
            </p>

            <h2 className="font-display text-2xl text-ink mb-4 mt-8">How We Use Cookies</h2>
            <ul className="list-disc list-inside text-ink/70 mb-6 space-y-2">
              <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytical cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements</li>
              <li><strong>Preference cookies:</strong> Remember your settings and choices</li>
            </ul>

            <h2 className="font-display text-2xl text-ink mb-4 mt-8">Managing Cookies</h2>
            <p className="text-ink/70 mb-6">
              Most web browsers allow you to control cookies through their settings. 
              You can choose to accept or decline cookies. Please note that disabling cookies 
              may affect the functionality of this website.
            </p>

            <h2 className="font-display text-2xl text-ink mb-4 mt-8">Third-Party Cookies</h2>
            <p className="text-ink/70 mb-6">
              We may use third-party services that place cookies on your device. 
              These services help us analyze site traffic and improve our marketing efforts. 
              Third-party cookies are subject to the respective privacy policies of these external services.
            </p>

            <h2 className="font-display text-2xl text-ink mb-4 mt-8">Contact Us</h2>
            <p className="text-ink/70">
              If you have any questions about our Cookie Policy, please contact us at:{" "}
              <a href={`mailto:${BRAND.email}`} className="text-greenbrand hover:underline">
                {BRAND.email}
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export const metadata = {
  title: 'Cookie Policy | Open Limits',
  description: 'Learn how Open Limits uses cookies to enhance your browsing experience.',
};
