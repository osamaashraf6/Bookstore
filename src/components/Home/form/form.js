import React from 'react';
import './form.css';

function Form() {
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
          />
          <input
            type="text"
            className="input-text"
            placeholder="Add author"
            name="author"
          />
        </div>
      </form>

    </>
  );
}

export default Form;
