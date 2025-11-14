import React from "react";
import NavBar from "./components/navBar";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeGen from "./pages/recipe";
import Category from "./pages/category";
import FoodList from "./pages/foodLibrary";
import { FoodProvider } from "./contexts/foodContext";
import FavoritesPage from "./pages/favorites";
function App() {
  return (
    <FoodProvider>
      <div>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/foodItem" element={<RecipeGen />} />
            <Route path="/category" element={<Category />} />
            <Route path="/foodList" element={<FoodList />} />
          </Routes>
        </main>
      </div>
    </FoodProvider>
  );
}

export default App;
