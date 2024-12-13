import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import PromoSection from "../components/PromoSection";
import CategoriesSection from "../components/CategoriesSection";
import SecBanner from "./SecBanner";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <CategoriesSection/>
      <FeaturesSection />
      <PromoSection />
      <SecBanner/>
    </div>
  );
};

export default HomePage;
