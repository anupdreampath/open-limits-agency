import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BRAND } from '@/lib/assets';

export default function TermsOfUse() {
  return (
    <>
      <Nav />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          <span className="eyebrow green">Legal</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl text-ink">
            Terms of <span className="italic">Use</span>
          </h1>
          <p className="mt-4 text-ink/60">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-creamSoft">
        <div className="max-w-4xl mx-auto px-5">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-ink/5">
            <h2 className="font-display text-2xl text-ink mb-4">1. Acceptance of Terms</h2>
            <p className="text-ink/70 mb-6">
              By accessing and using this website, you accept and agree to be bound by these Terms of Use. 
              If you do not agree to these terms, please do not use our website.
            </p>

            <h2 className="font-display text-2xl text-ink mb-4 mt-8">2. Use of Website</h2>
            <p className="text-ink/70 mb-6">
              You agree to use our website only for lawful purposes and in a way that does not infringe 
              the rights of, restrict, or inhibit anyone else&apos;s use and enjoyment of the website. 
              Prohibited behavior includes harassing or causing distress or inconvenience to any other user.
            </p>

            <h2 className="font-display text-2xl text-ink mb-4 mt-8">3. Intellectual Property</h2>
            <p className="text-ink/70 mb-6">
              All content on this website, including text, graphics, logos, images, and software, 
              is the property of {BRAND.name} and is protected by copyright and other intellectual property laws. 
              You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>

            <h2 className="font-display text-2xl text-ink mb-4 mt-8">4. Disclaimer</h2>
            <p className="text-ink/70 mb-6">
              The information on this website is provided for general informational purposes only. 
              We make no representations or warranties about the accuracy or completeness of the information. 
              Your use of any information on this website is entirely at your own risk.
            </p>

            <h2 className="font-display text-2xl text-ink mb-4 mt-8">5. Limitation of Liability</h2>
            <p className="text-ink/70 mb-6">
              {BRAND.name} shall not be liable for any direct, indirect, incidental, special, 
              or consequential damages resulting from the use or inability to use our website or services.
            </p>

            <h2 className="font-display text-2xl text-ink mb-4 mt-8">6. Changes to Terms</h2>
            <p className="text-ink/70 mb-6">
              We reserve the right to modify these Terms of Use at any time. Changes will be effective 
              immediately upon posting to the website. Your continued use of the website 
              following the posting of changes constitutes your acceptance of such changes.
            </p>

            <h2 className="font-display text-2xl text-ink mb-4 mt-8">7. Contact Information</h2>
            <p className="text-ink/70">
              If you have any questions about these Terms of Use, please contact us at:{" "}
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
  title: 'Terms of Use | Open Limits',
  description: 'Read the Terms of Use for accessing and using Open Limits website and services.',
};
