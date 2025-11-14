import { useEffect, useState } from "react";

export default function DishSearch(url) {
  const [searchedDish, setsearchedDish] = useState(null);

  useEffect(() => {
    if (!url) return;
    console.log(url);
    async function getTheDish(url) {
      try {
        const response = await fetch(url);
        if (!response) {
          throw new Error("Error occured");
        }
        const result = await response.json();
        console.log("hehe");
        console.log(result.meals[0]);
        setsearchedDish(result.meals[0]);
        console.log("hehe2");
      } catch (error) {
        console.log("here");
        console.error();
      }
    }
    getTheDish(url);
  }, [url]);

  return searchedDish;
}
