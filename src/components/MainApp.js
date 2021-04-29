import React from "react";
import CocktailList from "./CocktailList";
import SearchForm from "./SearchForm";

function MainApp() {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
}

export default MainApp;
