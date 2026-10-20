import React from 'react';
import { books } from '../data';

const Discounted = () => {
  return (
<section id="recent">
  <div className="container">
    <div className="row">
      <div className="section__title">
        <h2>
          Discounted <span className="purple">Books</span>
        </h2>
      </div>
      <div className="books">
        {books
        .filter(book => book.salePrice)
        .map((book) => (
        <book book={book} key={book.id}/>
        ))}
      </div>
    </div>
  </div>
</section>
  );
}

export default Discounted;