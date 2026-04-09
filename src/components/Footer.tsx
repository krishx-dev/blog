import AdSlot from './AdSlot';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Explore': [
      { label: 'Home', href: '#home' },
      { label: 'Tech Reviews', href: '#tech-reviews' },
      { label: 'How-To Guides', href: '#how-to-guides' },
      { label: 'Future Tech Trends', href: '#future-trends' },
      { label: 'Coding & Dev', href: '#coding-dev' },
    ],
    'Company': [
      { label: 'About Us', href: '#about' },
      { label: 'Contact', href: '#contact' },
      { label: 'Editorial Team', href: '#about' },
      { label: 'Advertise', href: '#contact' },
      { label: 'Guest Writing', href: '#contact' },
    ],
    'Topics': [
      { label: 'AI for Students', href: '#tech-reviews' },
      { label: 'AI for Developers', href: '#coding-dev' },
      { label: 'AI for Creators', href: '#tech-reviews' },
      { label: 'Prompt Engineering', href: '#how-to-guides' },
      { label: 'AI Automation', href: '#coding-dev' },
    ],
    'Legal': [
      { label: 'Terms & Conditions', href: '#terms-of-service' },
      { label: 'Privacy Policy', href: '#privacy-policy' },
      { label: 'Disclaimer', href: '#legal' },
      { label: 'Cookie Policy', href: '#privacy-policy' },
      { label: 'Affiliate Disclosure', href: '#about' },
    ],
  };

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-gray-950 text-white">
      {/* CTA Banner */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gradient-to-r from-indigo-900/60 to-purple-900/40 border border-indigo-800/50 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Ready to master AI tools?
              </h3>
              <p className="text-gray-400 text-sm">
                Join our community of students, developers and creators getting our weekly AI digest.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={() => scrollTo('#contact')}
                className="bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors text-sm whitespace-nowrap"
              >
                Subscribe Free
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="border border-indigo-600 text-indigo-300 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-900/40 transition-colors text-sm whitespace-nowrap"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Horizontal Footer Ad */}
      <div className="bg-gray-900/50 py-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdSlot 
            slotId={import.meta.env.VITE_ADSENSE_FOOTER_SLOT || "5544332211"} 
            type="horizontal-banner" 
            format="horizontal" 
            className="!my-0" 
          />
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">

          {/* Brand Column */}
          <div className="col-span-2">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
              className="flex items-center gap-2 mb-4 group"
            >
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
                </svg>
              </div>
              <span className="font-bold text-white text-lg">
                Your<span className="text-indigo-400">Blog</span>Name
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              The authority blog for AI tools and practical applications — built specifically for students, developers, and digital creators.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                {
                  label: 'Twitter',
                  path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
                },
                {
                  label: 'LinkedIn',
                  path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z',
                },
                {
                  label: 'YouTube',
                  path: 'M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z',
                },
                {
                  label: 'RSS',
                  path: 'M4 11a9 9 0 019 9M4 4a16 16 0 0116 16M5 19a1 1 0 110-2 1 1 0 010 2z',
                },
              ].map(social => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-8 h-8 bg-gray-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 text-gray-400 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                      className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© {currentYear} Your Blog Name. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
              <a href="#terms-of-service" onClick={(e) => { e.preventDefault(); scrollTo('#terms-of-service'); }} className="hover:text-gray-300 transition-colors text-xs">Terms & Conditions</a>
              <a href="#privacy-policy" onClick={(e) => { e.preventDefault(); scrollTo('#privacy-policy'); }} className="hover:text-gray-300 transition-colors text-xs">Privacy Policy</a>
              <a href="#legal" onClick={(e) => { e.preventDefault(); scrollTo('#legal'); }} className="hover:text-gray-300 transition-colors text-xs">Disclaimer</a>
              <a href="#privacy-policy" onClick={(e) => { e.preventDefault(); scrollTo('#privacy-policy'); }} className="hover:text-gray-300 transition-colors text-xs">Cookie Policy</a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-5 pt-5 border-t border-gray-900">
            <p className="text-xs text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
              <strong className="text-gray-500">Disclaimer:</strong> This is an independent editorial publication. Some links on this site may be affiliate links, meaning we may earn a small commission if you make a purchase at no additional cost to you. Our editorial opinions are never influenced by affiliate relationships. All tool reviews are based on hands-on testing by our editorial team. AI tool pricing, features, and availability are subject to change — always verify current details on the tool's official website.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
