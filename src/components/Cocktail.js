import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ name, info, image, id }) => {
  return (
    <article className="cocktail">
      <div>
        <div>
          <img src={image} width="300px" alt={name} />
        </div>

        <div className="cocktail-name">
          <h2>{name}</h2>
        </div>

        <div className="cocktail-info">
          <p>{info}</p>
        </div>
        <div className="cocktail-btn">
          <Link to={`/single-cocktail/${id}`}>
            <button className="cta"> View Details</button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Cocktail;
