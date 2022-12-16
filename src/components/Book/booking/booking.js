import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getDataCategory from '../../../redux/categories/categories__api';
import './booking.css';

function Booking() {
  // call the state and the dispatch
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getDataCategory());
  }, [dispatch]);
  return (
    <div id="ulcategory">
      {status.length > 0 ? (status.map((book) => <li id="category" key={book.item_id}>{book.category}</li>))
        : (<p>No categories</p>)}
    </div>
  );
}

export default Booking;
