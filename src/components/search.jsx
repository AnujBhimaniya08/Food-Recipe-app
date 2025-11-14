import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
export default function Search() {
  const [search, setSearch] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");

  const navigate = useNavigate();

  function handleClick(searchedFood) {
    setSubmittedSearch(searchedFood);
  }
  useEffect(() => {
    if (submittedSearch !== "") {
      navigate("/foodItem", {
        state: { searchedKhana: submittedSearch },
      });
    }
  }, [submittedSearch]);
  return (
    <div className="flex justify-center  gap-2 pb-4 pt-4 ">
      <input
        type="text"
        className="border-2 shadow-xl hover:scale-105 transition-all rounded-2xl p-2 w-70"
        placeholder="Search your favourite dish here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="bg-zinc-900 text-white  p-2 border-2 hover:scale-105 transition-all  rounded-full cursor-pointer "
        onClick={() => handleClick(search)}
      >
        <SearchIcon fontSize="large" />
      </button>
    </div>
  );
}
