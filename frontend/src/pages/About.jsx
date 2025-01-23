import React from 'react';
import myimage from '../assets/1709727180401.jpg';
const About = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20 px-5 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-lg">Discover the story behind our blog and our passion for sharing knowledge.</p>
      </div>

      {/* Mission Section */}
      <section className="py-12 px-6 md:px-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600">
            Our mission is to create a platform that inspires and educates through meaningful and engaging content. We aim to connect people with ideas and empower them to explore new perspectives.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-200 py-12 px-6 md:px-20">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
          <p className="text-lg text-gray-600">
            Behind every great blog is a passionate team dedicated to delivering quality content.
          </p>
        </div>

        <div className="flex justify-center items-center ">
          {/* Team Member */}
          <div className="text-center">
            <img
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-600"
              src={myimage}
              alt="Team Member"
            />
            <h3 className="font-bold text-xl">Harshit Jain</h3>
            <p className="text-gray-600">Founder & Developer</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 px-6 md:px-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Our Core Values</h2>
          <p className="text-lg text-gray-600 mb-8">
            At the heart of our blog are the values that guide our journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="font-bold text-xl mb-2">Creativity</h3>
            <p className="text-gray-600">We strive to inspire through unique and original content.</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-xl mb-2">Integrity</h3>
            <p className="text-gray-600">Honesty and authenticity are the foundation of our work.</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-xl mb-2">Community</h3>
            <p className="text-gray-600">We aim to foster a sense of belonging and shared growth.</p>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-blue-600 text-white py-12 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Have Questions?</h2>
        <p className="text-lg mb-6">
          Reach out to us and let us know how we can help you.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-200 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default About;
