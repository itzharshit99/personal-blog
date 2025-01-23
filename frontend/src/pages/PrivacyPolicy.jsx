import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20 px-5 text-center">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-4 text-lg">Your privacy is important to us. Read below to understand how we handle your information.</p>
      </div>

      {/* Content Section */}
      <section className="py-12 px-6 md:px-20">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6">Introduction</h2>
          <p className="text-lg text-gray-600 mb-4">
            This Privacy Policy outlines how we collect, use, and protect your information when you use our blog application. By using our services, you agree to the practices described in this policy.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Personal Information: Name, email address, and any information you provide via our contact forms.</li>
            <li>Usage Data: Details about how you interact with our website, such as IP address and browsing behavior.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h3>
          <p className="text-lg text-gray-600">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Provide, operate, and maintain our services.</li>
            <li>Respond to inquiries or provide customer support.</li>
            <li>Improve and personalize your experience on our platform.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Sharing Your Information</h3>
          <p className="text-lg text-gray-600">
            We do not sell or rent your personal information to third parties. However, we may share information with service providers who assist us in operating our website or providing services to you.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h3>
          <p className="text-lg text-gray-600">
            You have the right to access, update, or delete your personal information. To exercise these rights, please contact us at support@yourblog.com.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Changes to This Policy</h3>
          <p className="text-lg text-gray-600">
            We may update this Privacy Policy from time to time. We encourage you to review this page periodically for any changes.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h3>
          <p className="text-lg text-gray-600">
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <ul className="list-none text-gray-600 space-y-2">
            <li>Email: iharshitjain99@gmail.com</li>
            <li>Phone: +91 6376644555</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
