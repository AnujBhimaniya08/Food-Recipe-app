import FoodCard from "../components/foodCard";
import SkeletonForRecipe from "../components/skeletonForRecipe";
import { useFoodContext } from "../contexts/foodContext";
import { Link } from "react-router-dom";
export default function FavoritesPage() {
  const { favorites } = useFoodContext();
  if (favorites) {
    
    <div>
      <h2>your favorites</h2>
      <div>
        {favorites.map((foodItem = favorites.length - 1) => (
          <FoodCard foodItem={foodItem} key={foodItem.idMeal} />
        ))}
      </div>
    </div>;
  }
  return (
    <>
      <div>
        {favorites.length > 0 ? (
          <div>
            {" "}
            <h2 className="text-3xl font-bold w-100 my-4 mx-auto  ">
              Your favorite dishes{" "}
            </h2>{" "}
            <div className="flex flex-wrap justify-start mx-8 gap-4 p-2 w-full ">
              {favorites.map((foodItem) => (
                <FoodCard foodItem={foodItem} key={foodItem.idMeal} />
              ))}
            </div>{" "}
          </div>
        ) : (
          <div className="flex flex-col w-5/12 mx-auto ">
            <h2 className="text-5xl my-4 ">No favorites dishes here...🥲</h2>{" "}
            <p className="text-lg text-red-400 w-6/12 mx-auto">
              Add your favorites dishes{" "}
              <Link
                className="bg-blue-400 cursor-pointer text-white px-2 py-1 rounded-3xl"
                to="/"
              >
                NOW!
              </Link>
            </p>
          </div>
        )}
      </div>
   
    </>
  );
}
