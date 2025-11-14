import { createContext, useContext, useEffect, useState } from "react";

const FoodContext = createContext();
export const useFoodContext = () => useContext(FoodContext);

export const FoodProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) {
      setFavorites(JSON.parse(storedFavs));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  const addTofavs = (food) => {
    setFavorites((prev) => [...prev, food]);
  };
  const removeFavs = (foodId) => {
    setFavorites((prev) => prev.filter((food) => food.idMeal !== foodId));
  };
  const isFav = (foodId) => {
    return favorites.some((foodItem) => foodItem.idMeal === foodId);
  };
  const value = {
    favorites,
    addTofavs,
    removeFavs,
    isFav,
  };
  return <FoodContext.Provider value={value}>{children}</FoodContext.Provider>;
};
