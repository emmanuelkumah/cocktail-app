import React, { useContext, useState, useEffect } from "react";
//api url
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

//create the context
const AppContext = React.createContext();

//create a context component
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  //fetch data from the api
  const fetchDrinks = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        setLoading(false);
        const newDrinks = drinks.map((drink) => {
          //extract the needed values from the drinks
          const {
            idDrink,
            strDrink,
            strAlcoholic,
            strDrinkThumb,
            strGlass,
          } = drink;
          //rename the extracted props
          return {
            id: idDrink,
            name: strDrink,
            info: strAlcoholic,
            image: strDrinkThumb,
            glass: strGlass,
          };
        });
        setLoading(false);
        //update the cocktails state
        setCocktails(newDrinks);
      } else {
        setCocktails([]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //fetch drinks anytime the searchterm changes
  useEffect(() => {
    fetchDrinks();
  }, [searchTerm]);
  return (
    <AppContext.Provider
      value={{ loading, searchTerm, setSearchTerm, cocktails }}
    >
      {children}
    </AppContext.Provider>
  );
};

//create globalcontext custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
