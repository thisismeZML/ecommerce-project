import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import PromoSection from "../components/PromoSection";
import CategoriesSection from "../components/CategoriesSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <CategoriesSection/>
      <FeaturesSection />
      <PromoSection />
    </div>
  );
};

export default HomePage;
