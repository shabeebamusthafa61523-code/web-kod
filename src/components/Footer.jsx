import React from "react";

const Footer = () => {
  return (
    <footer
      className="w-full text-gray-800 py-16 sm:py-20 font-medium"
      style={{
        backgroundImage: `
          linear-gradient(rgb(255, 255, 255), rgba(255, 255, 255, 0.75)),
          url('/KOD.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-10">

        {/* ABOUT */}
        <div>
          <h3 className="font-bold text-lg mb-3 relative inline-block pb-1">
            About Us
            <span className="absolute bottom-0 left-0 w-full h-1 rounded bg-gradient-to-r from-lime-400 to-purple-600"></span>
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-gray-900 cursor-pointer">About Us</li>
            <li className="hover:text-gray-900 cursor-pointer">Our Story</li>
            <li className="hover:text-gray-900 cursor-pointer">Careers</li>
            <li className="hover:text-gray-900 cursor-pointer">Blog</li>
            <li className="hover:text-gray-900 cursor-pointer">Press</li>
          </ul>
        </div>

        {/* PROGRAMS */}
        <div>
          <h3 className="font-bold text-lg mb-3 relative inline-block pb-1">
            Programs
            <span className="absolute bottom-0 left-0 w-full h-1 rounded bg-gradient-to-r from-lime-400 to-purple-600"></span>
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Software Development</li>
            <li>App Development</li>
            <li>Digital Marketing</li>
            <li>Graphic Design</li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h3 className="font-bold text-lg mb-3 relative inline-block pb-1">
            Resources
            <span className="absolute bottom-0 left-0 w-full h-1 rounded bg-gradient-to-r from-lime-400 to-purple-600"></span>
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Help Center</li>
            <li>Documentation</li>
            <li>Tutorials</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-bold text-lg mb-3 relative inline-block pb-1">
            Contact Us
            <span className="absolute bottom-0 left-0 w-full h-1 rounded bg-gradient-to-r from-lime-400 to-purple-600"></span>
          </h3>
          <ul className="space-y-2 text-sm break-words">
            <li>kod.brand@gmail.com</li>
            <li>+91 9678007291</li>
            <li>Thamarakuzhi, Up Hill, Malappuram</li>
            <li>Kerala, 676504</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="font-bold text-lg mb-3 relative inline-block pb-1">
            Newsletter
            <span className="absolute bottom-0 left-0 w-full h-1 rounded bg-gradient-to-r from-lime-400 to-purple-600"></span>
          </h3>

          <p className="text-sm text-gray-700 mb-3">
            Stay updated with our latest courses and tech insights.
          </p>

          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            />

            <button className="w-full sm:w-auto bg-gray-300 text-gray-900 px-4 py-2 rounded-md hover:bg-white transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mt-10 text-center text-xs text-gray-700 px-4">
        &copy; 2026 KOD.BRAND. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;