import React from "react";
import Image1 from "../../../assets/cat1.jpg";
import Image2 from "../../../assets/cat2.jpg";
import Image3 from "../../../assets/cat3.jpg";
import Image4 from "../../../assets/cat4.jpg";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    image: Image1,
    title: "Men's Clothing",
  },
  {
    id: 2,
    image: Image2,
    title: "Women's Clothing",
  },
  {
    id: 3,
    image: Image3,
    title: "Jewelery",
  },
  {
    id: 4,
    image: Image4,
    title: "Electronics",
  },
];

const CategoriesSection = () => {
  return (
    <div className="pt-[80px]">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {categories.map(({ id, image, title }) => (
            <div
              key={id}
              className="flex items-center justify-between border h-[150px] px-7 shadow"
            >
              <div className="flex flex-col gap-2">
                <p className="font-bold">{title}</p>
                <Link>
                  <button className="border-b border-black">
                    Explore more
                  </button>
                </Link>
              </div>
              <div>
                <img src={image} alt="" className="w-24 h-w-24" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
