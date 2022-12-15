import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addData } from '../../../redux/books/books__api';
import './form.css';

function Form() {
  // call the dispatch
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const post = () => {
    if (title === '' || author === '' || category === '') {
      // eslint-disable-next-line no-alert
      alert('Please enter the data');
    } else {
      dispatch(addData({
        item_id: uuidv4(), title, author, category,
      }));
      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };
  return (
    <>
      <hr />
      <h2>ADD NEW BOOK</h2>
      <form action="">
        <div className="formcontrol">
          <input
            type="text"
            className="input-text"
            placeholder="Add title"
            name="title"
            value={title}
            onChange={(e) => { setTitle(e.target.value); }}
          />
          <input
            type="text"
            className="input-text"
            placeholder="Add author"
            name="author"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
          <input
            type="text"
            className="input-text"
            placeholder="Add Category"
            name="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <button
            type="button"
            onClick={post}
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
