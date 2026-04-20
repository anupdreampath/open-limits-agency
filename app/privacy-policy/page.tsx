import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BRAND } from '@/lib/assets';

export default function PrivacyPolicy() {
  return (
    <>
      <Nav />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          <span className="eyebrow green">Legal</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl text-ink">
            Privacy <span className="italic">Policy</span>
          </h1>
          <p className="mt-4 text-ink/60">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-creamSoft">
        <div className="max-w-4xl mx-auto px-5">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-ink/5">
              <h2 className="font-display text-2xl text-ink mb-4">1. Information We Collect</h2>
              <p className="text-ink/70 mb-6">
                We collect information you provide directly to us, including name, email address, phone number, 
                and any other information you choose to provide when contacting us or using our services.
              </p>

              <h2 className="font-display text-2xl text-ink mb-4 mt-8">2. How We Use Your Information</h2>
              <p className="text-ink/70 mb-6">
                We use the information we collect to provide, maintain, and improve our services, 
                communicate with you, and respond to your inquiries. We may also use your information 
                to send you marketing communications with your consent.
              </p>

              <h2 className="font-display text-2xl text-ink mb-4 mt-8">3. Information Sharing</h2>
              <p className="text-ink/70 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as required by law or to protect our rights.
              </p>

              <h2 className="font-display text-2xl text-ink mb-4 mt-8">4. Data Security</h2>
              <p className="text-ink/70 mb-6">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="font-display text-2xl text-ink mb-4 mt-8">5. Your Rights</h2>
              <p className="text-ink/70 mb-6">
                You have the right to access, correct, or delete your personal information. 
                You may also have the right to restrict or object to certain processing of your data.
                To exercise these rights, please contact us at {BRAND.email}.
              </p>

              <h2 className="font-display text-2xl text-ink mb-4 mt-8">6. Contact Us</h2>
              <p className="text-ink/70">
                If you have any questions about this Privacy Policy, please contact us at:{" "}
                <a href={`mailto:${BRAND.email}`} className="text-greenbrand hover:underline">
                  {BRAND.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export const metadata = {
  title: 'Privacy Policy | Open Limits',
  description: 'Learn how Open Limits collects, uses, and protects your personal information.',
};
