import FoodCard from "../components/foodCard";
import HomeDishesFetch from "../hooks/homefetch";
import Search from "../components/search";
import { Suspense } from "react";
import SkeletonCardGroup from "../components/skeletonCardGroup";
import SkeletonforDishCard from "../components/skeletonForDishCard";

export default function Home() {
  const url = "https://www.themealdb.com/api/json/v1/1/random.php";

  const { FoodData, loading } = HomeDishesFetch(url, {});

  return (
    <div>
      <div className="flex justify-center   ">
        {" "}
        <div className="flex justify-center   w-7/12">
          <Search />
          {/* <div className=" w-6/12 relative top-5 left-8  ">
            <form action="submit">
              <input
                placeholder="How many recommendations you want?..."
                className="border-2 p-2 w-9/12 rounded-lg transition-all hover:scale-105"
                onChange={(e) => setQuery(e.currentTarget.value)}
              />
              <button
                type="submit"
                onClick={() => giveFetchcall()}
                className="bg-black text-white px-3 transition-all hover:scale-105 py-2 mx-3 rounded-4xl"
              >
                Done
              </button>
            </form>
          </div> */}
        </div>
      </div>
      <div className="text-2xl font-bold mb-4 mx-auto underline w-50">
        Recommendations
      </div>
      <div>{loading ? <SkeletonCardGroup /> : null}</div>

      <div className="flex flex-wrap gap-3  ml-12 mb-4">
        {FoodData && FoodData.length
          ? FoodData.map((foodItem, index) => (
              <Suspense fallback={<SkeletonforDishCard />}>
                {" "}
                <FoodCard key={index} foodItem={foodItem[0]} />
              </Suspense>
            ))
          : null}
      </div>
    </div>
  );
}
