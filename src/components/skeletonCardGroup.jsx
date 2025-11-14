import React from "react";
import SkeletonforDishCard from "./skeletonForDishCard";

const SkeletonCardGroup = () => {
  return (
    <div className="flex flex-wrap gap-3 max-w-full mx-4 px-4  ">
      {[
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
      ].map(() => {
        return <SkeletonforDishCard />;
      })}
    </div>
  );
};

export default SkeletonCardGroup;
