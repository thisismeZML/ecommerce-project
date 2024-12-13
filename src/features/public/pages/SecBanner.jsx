import React from "react";
import Image1 from "../../../assets/banner4.png";
import Image2 from "../../../assets/banner3.png";
import { Link } from "react-router-dom";

const SecBanner = () => {
  return (
    <div className="mb-[80px]">
      <div className="container">
        <div className="grid items-center gap-5">
          <div className="grid grid-cols-3 h-full gap-5">
            <div className="col-span-1 border bg-[#f3eeec] flex flex-col items-center justify-center gap-4">
              <h1 className="text-md uppercase">mid season</h1>
              <h1 className="text-3xl uppercase">Discounts</h1>
              <Link>
                <button className="border border-black bg-black text-white px-4 py-2 hover:bg-white hover:text-black duration-150">
                  SHOP NOW
                </button>
              </Link>
            </div>
            <div className="col-span-2 border flex justify-between items-center p-5 bg-[#f5f3f6]">
              <div className="flex flex-col items-center gap-4">
                <h1 className="text-3xl uppercase"> Get up to 50% off </h1>
                <Link>
                  <button className="border border-black px-4 py-2 hover:bg-secondary hover:text-white duration-150">
                    GET NOW
                  </button>
                </Link>
              </div>
              <div className="h-full flex items-center justify-center ">
                <img src={Image1} alt="" className="w-[250px] object-cover" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 h-full gap-5">
            <div className="col-span-2 border flex justify-between items-center p-5 bg-[#f5f3f6]">
              <div className="h-full flex items-center justify-center ">
                <img src={Image2} alt="" className="w-[280px] object-cover" />
              </div>
              <div className="flex flex-col items-center gap-4">
                <h1 className="text-3xl uppercase">Latest Collection</h1>
                <Link>
                  <button className="border border-black px-4 py-2 hover:bg-secondary hover:text-white duration-150">
                    GET NOW
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-span-1 border bg-[#f3eeec] flex flex-col items-center justify-center gap-4">
              <h1 className="text-md uppercase">Winter Essentials</h1>
              <h1 className="text-3xl uppercase">Cozy Up</h1>
              <Link>
                <button className="border border-black bg-black text-white px-4 py-2 hover:bg-white hover:text-black duration-150">
                  DISCOVER
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecBanner;
