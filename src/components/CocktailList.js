import React from "react";
import Loading from "./Loading/Loading";
import { useGlobalContext } from "../context/context";
import Cocktail from "./Cocktail";

function CocktailList() {
  const { cocktails, loading } = useGlobalContext();

  //display the loading screen
  if (loading) {
    return <Loading />;
  }
  //display message if no cocktail was returned
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">Sorry, no cocktail matched your search </h2>
    );
  }
  return (
    <section className="section">
      <h1 className="section-title">Make An Awesome Cocktail</h1>
      <h4 className="section-title">
        Choose from a large collection of time-tested cocktail recipes
      </h4>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

export default CocktailList;
