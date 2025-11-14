import { Suspense, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useFoodContext } from "../contexts/foodContext";
import SkeletonforDishCard from "./skeletonForDishCard";

export default function FoodCard({ foodItem }) {
  const [clickedFoodItem, setClickedFoodItem] = useState("");
  const { addTofavs, removeFavs, isFav } = useFoodContext();
  const favorite = isFav(foodItem.idMeal);
  const navigate = useNavigate();
  const altFoodImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReDmhxVyja6jn9OCb1IO-ZKELZzYvzJAXjjA&s";
  function handleClick(foodItem) {
    setClickedFoodItem(foodItem);
  }
  function onCLickingFavButton(e) {
    e.preventDefault();
    if (favorite) removeFavs(foodItem.idMeal);
    else addTofavs(foodItem);
  }
  useEffect(() => {
    if (clickedFoodItem !== "") {
      navigate("/foodItem", { state: { searchedKhana: clickedFoodItem } });
    }
  }, [clickedFoodItem]);
  return (
    <>
      <div className="border-2 hover:scale-105 hover: shadow-xl transition-all rounded-md w-85 h-100 flex gap-2 flex-col  ">
        <img
          className="w-60 relative top-6 cursor-pointer overflow-hidden object-cover rounded-lg mx-auto border-1"
          src={foodItem.strMealThumb}
          alt={foodItem.strMeal}
          onError={(e) => {
            e.currentTarget.src = altFoodImage;
            e.currentTarget.alt = "This a random dish image";
            e.currentTarget.className =
              "w-60 relative top-6 cursor-pointer overflow-hidden h-100 rounded-lg mx-auto border-1";
          }}
          onClick={() => handleClick(foodItem.strMeal)}
        />
        <div className=" mt-6  flex  h-8  justify-center w-10/12 line-clamp-1 mx-auto ">
          <h1 className="text-xl font-bold">{foodItem.strMeal}</h1>
        </div>
        <div className=" flex justify-between pt-2 w-10/12 mx-auto">
          <button
            onClick={() => handleClick(foodItem.strMeal)}
            className="cursor-pointer mb-2  w-40 bg-zinc-900 text-white  rounded-2xl"
          >
            Instructions
          </button>
          <span className="border-2  left-16 rounded-full p-2 mb-2 bg-zinc-500">
            <button
              onClick={onCLickingFavButton}
              className="text-2xl !cursor-pointer  "
            >
              {favorite ? "❤️" : "🤍"}
            </button>
          </span>
        </div>
      </div>
    </>
  );
}
