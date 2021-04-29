import React, { useRef } from "react";
import { useGlobalContext } from "../context/context";

function SearchForm() {
  //destructure the object
  const { setSearchTerm } = useGlobalContext();
  //get ref to the dom element
  const searchValue = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="seaction search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search your favourite cocktail</label>
          <input
            type="text"
            autoFocus
            placeholder="Enter the cocktail to search"
            id="name"
            ref={searchValue}
            onChange={() => setSearchTerm(searchValue.current.value)}
          />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
