import React from "react";

const FeatureLoader = () => {
  return (
    <div>
      <div className="flex items-center justify-center border h-[280px] bg-gray-200 animate-pulse">
        <div className="w-28 h-28 bg-gray-300"></div>
      </div>
      <div className="flex flex-col gap-2 py-3">
        <div className="w-20 h-4 bg-gray-300 animate-pulse rounded"></div>
        <div className="w-32 h-5 bg-gray-300 animate-pulse rounded"></div>
        <div className="w-16 h-4 bg-gray-300 animate-pulse rounded"></div>
      </div>
    </div>
  );
};

export default FeatureLoader;
