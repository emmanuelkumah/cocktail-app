import React from "react";
import CocktailList from "../components/CocktailList";
import HeroSection from "../components/HeroSection";
import SearchForm from "../components/SearchForm";

function Home() {
  return (
    <main>
      <HeroSection />
      <SearchForm />
      <CocktailList />
    </main>
  );
}

export default Home;
