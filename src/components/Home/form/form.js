import React from 'react';

function Form() {
  return (
    <>
      <hr />
      <h2>ADD NEW BOOK</h2>
      <div className="formcontrol">
        <input type="text" placeholder="Book Title" />
        <select name="" id="">
          <option value="">action</option>
          <option value="">science fiction</option>
          <option value="">economy</option>
        </select>
        <input type="submit" />
      </div>
    </>
  );
}

export default Form;
