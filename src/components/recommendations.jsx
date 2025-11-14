import React from "react";
import { useState } from "react";
const Recommendations = () => {
  const [query, setQuery] = useState(null);
  return (
    <div className=" w-6/12 relative top-5 left-8  ">
      <form action="submit">
        <input
          placeholder="How many recommendations you want?..."
          className="border-2 p-2 w-9/12 rounded-lg transition-all hover:scale-105"
          onChange={(e) => setQuery(e)}
        />
        <button
          type="submit"
          className="bg-black text-white px-3 transition-all hover:scale-105 py-2 mx-3 rounded-4xl"
        >
          Done
        </button>
      </form>
    </div>
  );
};

export default Recommendations;
