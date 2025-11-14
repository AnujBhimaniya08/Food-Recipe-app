import { useLocation } from "react-router-dom";
import NormalFetch from "../hooks/normalDataFetchHook";
import FoodCard from "../components/foodCard";
import SkeletonCardGroup from "../components/skeletonCardGroup";

export default function FoodList() {
  const location = useLocation();
  const { category } = location.state || {};
  const { categoryDesp } = location.state || {};
 
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  const { data, loading } = NormalFetch(url);
  console.log(data);

  return (
    <div>
      <h1 className="text-2xl m-4 font-bold flex justify-center">
        Showing list for : "{category}"
      </h1>
      <div className="w-11/12 mx-auto mb-4 border-1 rounded-xl text-md font-stretch-50% p-2">
        <h1 className="text-xl underline">About</h1>
        {categoryDesp}
      </div>
      <div>{loading && <SkeletonCardGroup />}</div>
      <div className="flex flex-wrap gap-3 justify-center">
        {data.meals && data.meals.length
          ? data.meals.map((foodItem, index) => (
              <FoodCard foodItem={foodItem} key={index} />
            ))
          : null}
      </div>
    </div>
  );
}
