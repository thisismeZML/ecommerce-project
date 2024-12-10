import React from "react";
import Image from "../../../assets/ring.jpg";
import { Link } from "react-router-dom";

const PromoSection = () => {
  return (
    <div className="pb-[80px]">
      <div className="container">
        <div className="flex items-center justify-center">
          <h1 className="uppercase text-4xl">Featured</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-[80px] gap-7 md:gap-0">
          <div className="border border-secondary px-10 py-36 shadow-lg">
            <img src={Image} alt="" />
          </div>
          <div className="flex items-center justify-center px-10">
            <div className="flex flex-col gap-7 items-center">
              <h1 className="text-3xl uppercase">
                Solid Gold Petite Micropave
              </h1>
              <p className="text-zinc-500 tracking-wide">
                Satisfaction Guaranteed. Return or exchange any order within 30
                days.Designed and sold by Hafeez Center in the United States.
                Satisfaction Guaranteed. Return or exchange any order within 30
                days.
              </p>
              <Link>
                <button className="border-b border-black">Discover Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;
