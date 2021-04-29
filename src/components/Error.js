import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>Opps! The Page is not available</h1>
        <Link to="/">Go home</Link>
      </div>
    </section>
  );
}

export default Error;
