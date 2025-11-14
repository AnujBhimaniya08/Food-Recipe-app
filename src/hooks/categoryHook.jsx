import { useEffect, useState } from "react";

export default function CategoryHook() {
  const [categoryData, setCategoryData] = useState([]);
  const [errormsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
  async function fetchData(url) {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response) throw new Error("Error has occured");
      const result = await response.json();
      setCategoryData(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setErrorMsg(`${error} This error has occured`);
    }
  }
  useEffect(() => {
    fetchData(url);
  }, [url]);
  return { categoryData, errormsg, loading };
}
