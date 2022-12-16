// import the createAsyncThunk
import { createAsyncThunk } from '@reduxjs/toolkit';
// import the check type
import { CHECK } from './categories';
// the url for the API
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/qs8Jc46MDzcDEDweZ7oe/books';
// function for the getData from tha API
const getDataCategory = createAsyncThunk(CHECK, async () => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
});
export default getDataCategory;
