import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeData } from '../../../redux/books/books__api';
import './singleBook.css';

function SingleBook({
  // eslint-disable-next-line camelcase
  item_id, title, author, category,
}) {
  // call the state and the dispatch
  const dispatch = useDispatch();
  return (
    <>

      <div className="sectionone__container__contents__content">
        <div className="sectionone__container__contents__aside">
          <div className="sectionone__container__contents__aside__left">
            <div>{title}</div>
            <div>{author}</div>
            <div>{category}</div>
            <button type="button">Comments</button>
            <button type="button" onClick={() => dispatch(removeData(item_id))}>
              Remove
            </button>
            <button type="button">Edit</button>

          </div>
          <div className="sectionone__container__contents__aside__center">
            <div className="percent">
              <div className="loader"><div className="box">dsd</div></div>
              <div className="">
                <span id="percent__value">64%</span>
                <span id="percent__status">Completed</span>
              </div>
            </div>
          </div>
          <div className="sectionone__container__contents__aside__right">
            <p>CURRENT CHAPTER</p>
            <span>Chapter 17</span>
            <button type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </>
  );
}

SingleBook.propTypes = {
  item_id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
  ,
};
export default SingleBook;
