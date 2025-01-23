import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20 px-5 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg">We would love to hear from you! Feel free to reach out with any questions or feedback.</p>
      </div>

      {/* Contact Form Section */}
      <section className="py-12 px-6 md:px-20">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center mb-6">Get in Touch</h2>
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                placeholder="Enter your email"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
              <textarea
                id="message"
                rows="5"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                placeholder="Enter your message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Additional Contact Information Section */}
      <section className="bg-gray-200 py-12 px-6 md:px-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Our Contact Information</h2>
          <p className="text-lg text-gray-600 mb-4">Feel free to reach out through any of the following channels:</p>
          <ul className="space-y-4">
            <li><strong>Email:</strong> iharshitjain99@gmail.com</li>
            <li><strong>Phone:</strong> +91 6376644555</li>
            <li><strong>Address:</strong> INDIA</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;