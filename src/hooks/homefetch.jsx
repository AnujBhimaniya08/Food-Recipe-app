import { useEffect, useState } from "react";

export default function HomeDishesFetch(url, options = {}) {
  const homeDishes = [];
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [FoodData, setfoodData] = useState([]);

  useEffect(() => {
    if (!url) return;
    async function fetchData() {
      setLoading(true);
      try {
        for (let i = 0; i < 10; i++) {
          const response = await fetch(url, { ...options });
          if (!response) throw new Error("Here is the error");
          const result = await response.json();
          homeDishes.push(result.meals);
        }
      } catch (error) {
        console.log(error, errorMsg);
        setErrorMsg(`${error} this is the Error occured`);
      } finally {
        setLoading(false);
      }
      setfoodData(homeDishes);
    }
    fetchData();
  }, [url]);

  return { FoodData, errorMsg, loading };
}
