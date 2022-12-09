import React from 'react';
import SingleBook from '../singleBook/singleBook';
import './homing.css';

function Homing() {
  const books = [
    {
      id: 1,
      type: 'action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      type: 'action',
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: 3,
      type: 'action',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
    },
  ];
  return (
    <>
      <section className="sectionone" id="sectionone">
        <div className="container">
          <div className="sectionone__container__contents">
            {books.map((book) => (
              <SingleBook
                type={book.type}
                title={book.title}
                author={book.author}
                key={book.id}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Homing;
