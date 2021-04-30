import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainApp from "./components/MainApp";
import NavBar from "./components/NavBar";
import SingleCocktail from "./components/SingleCocktail";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cocktail">
          <MainApp />
        </Route>
        <Route path="/single-cocktail/:id">
          <SingleCocktail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
