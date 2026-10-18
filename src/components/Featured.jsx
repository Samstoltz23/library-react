import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Featured = () => {
  return(
    <div>
      <section id="featured">
        <div className="container">
          <div className="row">
            <h2 className="section__title">
              Featured <span className="purple">Books</span>
            </h2>
            <div className="books">
              <Book />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Featured;