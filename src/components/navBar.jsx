import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-zinc-800 text-white flex  mt-1 justify-between w-360 mx-auto font-bold border-2 rounded-xl shadow-xl">
      <div className="bg-amber-700  rounded-lg mx-3 my-2">
        <Link to="/">
          <button className=" p-2 cursor-pointer ml-2 mt-2 flex justify-between gap-1 ">
            <h1 className="text-xl"> Food Recipe App</h1>

            <h1 className="text-4xl  relative bottom-3">🍔</h1>
          </button>
        </Link>
      </div>
      <div className="flex flex-row relative   right-20 gap-6">
        <Link to="/" className="">
          <h3 className="text-2xl  relative top-5">Home</h3>
        </Link>
        <Link to="/favorites" className="">
          <h3 className="text-2xl relative top-5">Favorites</h3>
        </Link>
        <Link to="/category">
          <h3 className="text-2xl relative top-5">Categories</h3>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
