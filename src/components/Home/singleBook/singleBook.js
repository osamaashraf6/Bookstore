import React from 'react';
import PropTypes from 'prop-types';
import './singleBook.css';

function SingleBook({ type, title, author }) {
  return (
    <>

      <div className="sectionone__container__contents__content">
        <div className="sectionone__container__contents__aside">
          <div className="sectionone__container__contents__aside__left">
            <div>{type}</div>
            <div>{title}</div>
            <div>{author}</div>
            <button type="button">Comments</button>
            <button type="button">Remove</button>
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
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
  ,
};
export default SingleBook;
