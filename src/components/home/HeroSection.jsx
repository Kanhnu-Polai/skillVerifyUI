import React from "react";

const HeroSection = () => {
  const buttonStyle =
    "min-w-32 px-4 py-2 bg-blue-600 text-white rounded-md text-sm sm:text-lg hover:bg-blue-700 transition duration-300 shadow-sm";

  return (
    <section className="bg-white mt-2 py-8 sm:py-12 md:py-16 flex flex-col items-center text-center space-y-5 px-4">
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-snug text-purple-700">
        Find Your Dream
        <span className="text-blue-600"> Job</span> or Post One Today!
      </h1>

      <p className="text-sm sm:text-lg max-w-2xl text-gray-700 tracking-wide leading-relaxed">
        SkillVerify helps candidates, companies & colleges connect with
        verified skill profiles.
      </p>

      <div className="flex flex-wrap gap-3 justify-center">
        <button className={buttonStyle}>Explore Jobs</button>
        <button className={buttonStyle}>Post a Job</button>
      </div>
    </section>
  );
};

export default HeroSection;