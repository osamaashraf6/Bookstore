// import the createAsyncThunk
import { createAsyncThunk } from '@reduxjs/toolkit';
// import the types of actions
import { GET, ADD, REMOVE } from './books';
// the url for the API
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/qs8Jc46MDzcDEDweZ7oe/books';
// function for the getData from tha API
export const getData = createAsyncThunk(GET, async () => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
});
// function for the addData from tha API
export const addData = createAsyncThunk(ADD, async (book) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
});
// function for the removeData from tha API
export const removeData = createAsyncThunk(REMOVE, async (itemId) => {
  await fetch(`${url}/${itemId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
});
