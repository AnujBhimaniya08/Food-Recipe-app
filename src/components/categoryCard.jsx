import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import NormalFetch from "../hooks/normalDataFetchHook";
import { useNavigate } from "react-router-dom";

export default function CategoryCard({ category }) {
  const [query, setQuery] = useState("");
  console.log(category);
  const navigate = useNavigate();
  let url = "";
  if (query !== "") {
    url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${query}`;
  }
  const { data } = NormalFetch(url);
  if (data.length !== 0) console.log(data);
  function handleClick(searchCategory, description) {
    setQuery(searchCategory);
    navigate("/foodList", {
      state: { category: searchCategory, categoryDesp: description },
    });
  }
  const truncate = (str, length) => {
    return str.length > length
      ? str.slice(0, length) + "..." + "   Read more"
      : str;
  };
  return (
    <>
      <div className="hover:scale-105 transition-all">
        <div
          onClick={() =>
            handleClick(category.strCategory, category.strCategoryDescription)
          }
          className=" cursor-pointer border-2 p-2 m-1 w-70 rounded-2xl flex flex-row gap-2"
        >
          <img
            className="w-30 border-1 rounded-lg"
            src={category.strCategoryThumb}
            alt={category.strCategory}
          />
          <Tooltip
            title={`${truncate(category.strCategoryDescription, 150)}`}
            onClick={() =>
              handleClick(category.strCategory, category.strCategoryDescription)
            }
            arrow
            placement="top-end"
            className="cursor-pointer"
          >
            <h1 className="relative top-5 font-medium text-xl mx-auto ">
              {category.strCategory}
            </h1>
          </Tooltip>
        </div>
      </div>
    </>
  );
}
