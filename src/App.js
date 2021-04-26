import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import Review from "./components/Review";
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
        <Route path="/review">
          <Review />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
