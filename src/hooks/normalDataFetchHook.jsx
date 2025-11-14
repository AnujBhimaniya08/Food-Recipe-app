import { useEffect, useState } from "react";

export default function NormalFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    if (!url) return;
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response) throw new Error("Error has occured");
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.log(error, errorMsg);
        setErrorMsg(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);
  return { data, loading, errorMsg };
}
