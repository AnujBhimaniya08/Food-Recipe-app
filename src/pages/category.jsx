import CategoryCard from "../components/categoryCard";
import SkeletonCardGroup from "../components/skeletonCardGroup";

import SkeletonGroupForCategory from "../components/skeletonGroupForCategory";
import CategoryHook from "../hooks/categoryHook";

export default function Category() {
  const { categoryData, loading } = CategoryHook();
  return (
    <div className="">
      <h1 className="text-4xl font-bold flex justify-center mb-6  mt-4  ">
        Food Categories
      </h1>
      {loading && <SkeletonGroupForCategory/>}
      <div className="flex flex-wrap gap-2 mx-auto">
        {categoryData &&
        categoryData.categories &&
        categoryData.categories.length
          ? categoryData.categories.map((categoryItem, index) => (
              <CategoryCard category={categoryItem} key={index} />
            ))
          : null}
      </div>
    </div>
  );
}
