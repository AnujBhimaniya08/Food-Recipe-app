import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NormalFetch from "../hooks/normalDataFetchHook";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SkeletonForRecipe from "../components/skeletonForRecipe";
import CategoryHook from "../hooks/categoryHook";
export default function RecipeGen() {
  // let index = 1;
  const [category, setCategory] = useState("");
  const [categoryDespFull, setCategoryDesp] = useState("");
  const [flag, setFlag] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { searchedKhana } = location.state || {};
  const dishUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedKhana}`;

  const { data: dishData, loading, error } = NormalFetch(dishUrl);
  const { categoryData } = CategoryHook();
  const altFoodImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReDmhxVyja6jn9OCb1IO-ZKELZzYvzJAXjjA&s";

  // if (error) return <p>Something went wrong</p>;

  function extractIngredients(meal) {
    console.log(meal);
    const Ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (
        meal[`strIngredient${i}`] !== null &&
        meal[`strMeasure${i}`] !== null
      ) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (
          ingredient.trim() !== "" &&
          measure.trim() !== "" &&
          ingredient &&
          measure
        ) {
          Ingredients.push({ ingredient, measure });
        }
      }
    }
    return Ingredients;
  }

  function goingForCatgory(category) {
    setCategory(category);
    const categoryMain = categoryData.categories.find(
      (categoryItem) => categoryItem.strCategory === category
    );
    console.log(categoryMain); //object hona chaiye
    setCategoryDesp(categoryMain.strCategoryDescription);
    setFlag(true);
  }
  useEffect(() => {
    if (flag) {
      navigate("/foodList", {
        state: { category: category, categoryDesp: categoryDespFull },
      });
    }
  }, [flag]);
  return (
    <>
      {" "}
      {loading && <SkeletonForRecipe />}
      {error && <p>Error has happened ⚠️</p>}{" "}
      <div>
        {dishData && dishData.meals ? (
          <div>
            {" "}
            <div className="flex justify-center mb-8 text-2xl font-medium">
              Showing results for :"
              <h1 className="underline ">{searchedKhana}</h1>"
            </div>
            <div className="text-3xl w-5/12 px-4 relative left-8  font-extrabold flex justify-between mb-6  mx-auto ">
              <h3>{dishData.meals[0].strMeal}</h3>
              <div>
                <span
                  className="bg-red-200 text-xl  px-4 py-2 font-bold cursor-pointer hover:scale-105 transition-all rounded-xl "
                  onClick={() => goingForCatgory(dishData.meals[0].strCategory)}
                >
                  {dishData.meals[0].strCategory}
                </span>
              </div>
            </div>
            <div className="flex my-2 justify-between gap-2">
              <div className="flex flex-col  h-100 relative top-7 right-10 ml-20 ">
                <img
                  className="w-70 border-2 h-75 hover:cursor-pointer "
                  src={dishData.meals[0].strMealThumb}
                  alt={dishData.meals[0].strMeal}
                  onError={(e) => (e.currentTarget.src = altFoodImage)}
                  onClick={() => {
                    <a
                      href={dishData.meals[0].strYoutube}
                      target="_blank"
                      rel="noopener noreferrer"
                    ></a>;
                  }}
                />
                <button className="bg-blue-400 hover:cursor-pointer  text-white rounded-md p-2 border-2 border-black w-7/12 mx-auto  mt-2">
                  <a
                    href={dishData.meals[0].strYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Watch the Video{" "}
                  </a>
                </button>
              </div>
              <div className=" w-2/12 relative top-5 h-130  ">
                <div className="font-bold  ">
                  Instruction for making :{" "}
                  <h1 className="underline font-medium">
                    {dishData.meals[0].strMeal}
                  </h1>
                </div>
                {extractIngredients(dishData.meals[0]).map((item, idx) => (
                  <p key={idx}>
                    {item.ingredient}-{item.measure}
                  </p>
                ))}
              </div>
              <div className=" w-7/12 flex flex-col   ">
                <div className="">
                  <Typography variant="h3" component="span">
                    Instructions
                  </Typography>
                  <br />
                  <div className="mx-2">
                    {dishData.meals[0].strInstructions
                      .split(".")
                      .map((item, index) => {
                        return item !== "" ? (
                          <p>{`${index + 1}. ${item}`}</p>
                        ) : null;
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
