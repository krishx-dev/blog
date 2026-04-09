import React from 'react';

const Legal: React.FC = () => {
  return (
    <section id="legal" className="bg-gray-50 border-t border-gray-100 py-20 pb-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Privacy Policy */}
        <div id="privacy-policy" className="mb-20 scroll-mt-24">
          <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-indigo-100">
            Mandatory Disclosure
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6 font-merriweather">Privacy Policy</h2>
          <div className="prose prose-indigo text-gray-600 text-sm leading-relaxed space-y-4 max-w-none">
            <p>At our blog, accessible from yourdomain.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by us and how we use it.</p>
            
            <h3 className="text-lg font-bold text-gray-900 pt-4">Google DoubleClick DART Cookie</h3>
            <p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our website and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" className="text-indigo-600 hover:underline">https://policies.google.com/technologies/ads</a></p>

            <h3 className="text-lg font-bold text-gray-900 pt-4">Our Advertising Partners</h3>
            <p>Some of advertisers on our site may use cookies and web beacons. Our advertising partners include:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li className="font-semibold text-gray-800 underline">Google AdSense</li>
            </ul>
            <p>Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies above.</p>

            <h3 className="text-lg font-bold text-gray-900 pt-4">Log Files</h3>
            <p>We follow a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.</p>
          </div>
        </div>

        <div className="h-px bg-gray-200 w-full mb-20" />

        {/* Terms of Service */}
        <div id="terms-of-service" className="mb-20 scroll-mt-24">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6 font-merriweather">Terms of Service</h2>
          <div className="prose prose-indigo text-gray-600 text-sm leading-relaxed space-y-4 max-w-none">
            <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use our services if you do not agree to take all of the terms and conditions stated on this page.</p>
            <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company.</p>
            
            <h3 className="text-lg font-bold text-gray-900 pt-4">License</h3>
            <p>Unless otherwise stated, we and/or our licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may access this from our website for your own personal use subjected to restrictions set in these terms and conditions.</p>
            
            <h3 className="text-lg font-bold text-gray-900 pt-4">AdSense Compliance</h3>
            <p>You agree not to click on your own advertisements or use any means to inflate impressions and/or clicks artificially. Any attempt to manipulate the advertising system is a violation of our terms and will result in an immediate ban from our platform.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Legal;
