import React from "react";
import Image1 from "../../../assets/couple-banner.png";
import Image2 from "../../../assets/women-banner.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    image: Image2,
    title: "Up to 50% off on Women's Clothing",
    description:
      "Shop the latest trends in women's fashion with discounts up to 50%. Don't miss out on this amazing sale!",
  },
  {
    id: 2,
    image: Image1,
    title: "70% off on all Products Sales",
    description:
      "Get up to 70% off on selected products. Grab your favorite items before they sell out!",
  },
];

const HeroSection = () => {
  var setting = {
    dots: true,
    infinite: true,
    speed: 800,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className=" relative overflow-hidden min-h-[550px] sm:min-h-[780px] bg-gray-100 flex justify-center items-center">
      {/* Background Pattern */}
      <div className="h-[700px] w-[700px] bg-secondary/50 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9 "></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...setting}>
          {ImageList.map(({ id, image, title, description }) => (
            <div key={id}>
              <div className="grid grid-cols-1 sm:grid-cols-2  sm:gap-4 lg:gap-0">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                    {title}
                  </h1>
                  <p className="text-sm">{description}</p>
                  <div>
                    <button className="border border-secondary py-2 px-4 rounded hover:bg-secondary hover:text-primary duration-150">
                      Shop Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div className="relative z-10">
                    <img
                      src={image}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection;
