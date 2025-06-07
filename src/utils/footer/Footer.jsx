import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#06213F] text-white py-10 px-6 md:px-16 m-1">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <div className="h-2 w-28 bg-cyan-400 rounded-full mx-auto md:mx-0 mb-4"></div>
          <ul className="space-y-2 font-medium">
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Trending</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Sign Up</a></li>
            <li><a href="#">News</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Resources</h3>
          <div className="h-2 w-40 bg-cyan-400 rounded-full mx-auto md:mx-0 mb-4"></div>
          <ul className="space-y-2 font-medium">
            <li><a href="#">Tech News</a></li>
            <li><a href="#">Resume Tips</a></li>
            <li><a href="#">Interview Guide</a></li>
            <li><a href="#">Help Center</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <div className="h-2 w-28 bg-cyan-400 rounded-full mx-auto md:mx-0 mb-4"></div>
          <p className="text-cyan-400 font-semibold  cursor-pointer">support@skillverify.com</p>
          <p className="mt-2 font-medium">Bhubaneswar, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;