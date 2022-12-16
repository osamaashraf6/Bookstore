import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getData } from '../../../redux/books/books__api';
import SingleBook from '../singleBook/singleBook';
import './homing.css';

function Homing() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  // call the state
  const books = useSelector((state) => state.books, shallowEqual);
  return (
    <>
      <section className="sectionone" id="sectionone">
        <div className="container">
          <div className="sectionone__container__contents">
            {books.length !== 0 ? (books.map((book) => (
              <SingleBook
                title={book.title}
                author={book.author}
                key={book.item_id}
                item_id={book.item_id}
                category={book.category}
              />
            ))) : (<p>No items in the API</p>)}
          </div>
        </div>
      </section>
    </>
  );
}

export default Homing;
