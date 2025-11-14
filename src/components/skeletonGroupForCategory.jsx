import React from "react";
import SkeletonForCategoryCard from "./skeletonForCategoryCard";

const SkeletonGroupForCategory = () => {
  return (
    <div className="flex flex-wrap gap-3 mx-2 ">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(() => {
        return <SkeletonForCategoryCard />;
      })}
    </div>
  );
};

export default SkeletonGroupForCategory;
