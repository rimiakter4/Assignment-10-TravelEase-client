import React from 'react';

const Praivacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-8 italic">Last Updated: January 2026</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-blue-600 mb-3">1. Information We Collect</h2>
            <p>
              When you use TravelEase, we collect personal information such as your name, email address, phone number, and driving license details to process your vehicle bookings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-600 mb-3">2. How We Use Your Data</h2>
            <p>
              Your data is used to manage your rentals, provide customer support, and send you updates about your bookings. We do not sell your personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-600 mb-3">3. Security</h2>
            <p>
              We implement industry-standard security measures to protect your information. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-600 mb-3">4. Cookies</h2>
            <p>
              We use cookies to improve your browsing experience and remember your login preferences for a smoother experience.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              If you have any questions about this policy, please contact us at <span className="font-bold">support@travelease.com</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Praivacy;