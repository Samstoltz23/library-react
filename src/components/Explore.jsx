import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Explore = () => {
  const { books } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [books]);

  return (
    <section id="explore">
      <div className="container">
        <div className="row row__column">
          <h2>
            Explore more <span className="purple">Books</span>
          </h2>
          <Link to="/books">
            <button className="btn">Explore books</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Explore;
