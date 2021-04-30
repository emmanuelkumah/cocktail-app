import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { TiPencil } from "react-icons/ti";
import Loading from "./Loading/Loading";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  //fetch the cocktail when component renders
  const getCocktail = async () => {
    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      // console.log(data.drinks[0]);
      if (data.drinks) {
        //extract the needed values
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strVideo: video,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0];

        //create a separate ingredient array
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        //create a new object with the required values
        const newCocktail = {
          name,
          image,
          info,
          category,
          glass,
          instructions,
          video,
          ingredients,
        };
        //update the state value
        setCocktail(newCocktail);
        setLoading(false);
      } else {
        //update cocktail value to null if no cocktail was fetched
        setCocktail(null);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //fetch cocktail details when the id changes
    setLoading(true);
    getCocktail();
  }, [id]);
  //display the loading component
  if (loading) {
    return <Loading />;
  }
  //display message if cocktail value is null
  if (!cocktail) {
    return <h2 className=" section-title">No Cocktail details to display</h2>;
  }

  //destructure the cocktail object
  const { name, image, instructions, ingredients } = cocktail;
  return (
    <>
      <article className="single-card-container">
        <section className="single-card clearfix">
          <img src={image} alt={name} className="single-card-media" />
          <div className="single-card-body">
            <h2 className="single-card-title">{name}</h2>
            <section className="single-card-details">
              <h3>
                <TiPencil />
                Instructions:
              </h3>
              <span className="single-card-description">{instructions}</span>
            </section>

            <section className="single-card-ingredients">
              <span className="ingredient-data">ingredients:</span>
              {ingredients.map((item, index) => {
                return item ? (
                  <div>
                    <ul>
                      <li key={index}>{item}</li>
                    </ul>
                  </div>
                ) : null;
              })}
            </section>
          </div>
        </section>
        <Link to="/cocktail">
          <button className="single-cocktail-btn">Back to Cocktails</button>
        </Link>
      </article>
    </>
  );
}

export default SingleCocktail;
