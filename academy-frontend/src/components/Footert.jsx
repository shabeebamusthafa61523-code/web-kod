import React from "react";

const Footert = () => {
  return (
    <footer
      className="relative z-10 w-full text-gray-300 py-12 sm:py-16 font-medium"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.68)),
          url('/KOD.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-10 text-center">

        {/* ABOUT */}
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-gray-100 text-lg mb-3 relative inline-block pb-1">
            About Us
            <span className="absolute bottom-0 left-0 h-[1px] w-full rounded-full bg-white/50" />
          </h3>

          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Our Story</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="flex flex-col items-center">
          <h3 className="text-gray-100 font-bold text-lg mb-3 relative inline-block pb-1">
            Contact Us
            <span className="absolute bottom-0 left-0 h-[1px] w-full rounded-full bg-white/50" />
          </h3>

          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">kod.brand@gmail.com</li>
            <li className="hover:text-white cursor-pointer">+91 9678007291</li>
            <li className="hover:text-white cursor-pointer">Thamarakuzhi, Up Hill</li>
            <li className="hover:text-white cursor-pointer">Malappuram, Kerala - 676504</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mt-10 text-center text-xs text-gray-400 px-4">
        &copy; 2026 KOD.BRAND. All rights reserved.
      </div>
    </footer>
  );
};

export default Footert;