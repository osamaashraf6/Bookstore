import React from 'react';
import { useSelector } from 'react-redux';
import SingleBook from '../singleBook/singleBook';
import './homing.css';

function Homing() {
  const books = useSelector((state) => state.books);
  return (
    <>
      <section className="sectionone" id="sectionone">
        <div className="container">
          <div className="sectionone__container__contents">
            {books.map((book) => (
              <SingleBook
                title={book.title}
                author={book.author}
                key={book.id}
                id={book.id}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Homing;
