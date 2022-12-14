import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { check } from '../../../redux/categories/categories';
import './booking.css';

function Booking() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);
  return (
    <>
      <button id="catButton" type="submit" onClick={() => dispatch(check())}>Check Status</button>
      <p>{status}</p>
    </>
  );
}

export default Booking;
