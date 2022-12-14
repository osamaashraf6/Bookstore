import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../../../redux/books/books';
import './form.css';

function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
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
            onChange={(e) => { setTitle(e.target.value); }}
          />
          <input
            type="text"
            className="input-text"
            placeholder="Add author"
            name="author"
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
          <button
            type="button"
            onClick={() => {
              dispatch(addBook({ id: uuidv4(), title, author }));
              setTitle('');
              setAuthor('');
            }}
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
