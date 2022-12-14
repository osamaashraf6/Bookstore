import { v4 as uuidv4 } from 'uuid';
// the types of the action
const ADD = 'React-BookStore/Books/Add';
const REMOVE = 'React-BookStore/Books/Remove';
// define the initial state
const initialBooks = [
  {
    id: uuidv4(),
    title: 'book1',
    author: 'osama',
  },
  {
    id: uuidv4(),
    title: 'book2',
    author: 'ashraf',
  },
  {
    id: uuidv4(),
    title: 'book3',
    author: 'gamal',
  },
  {
    id: uuidv4(),
    title: 'book4',
    author: 'salem',
  },
];
// reducer for the books
export default function bookReducer(state = initialBooks, action) {
  switch (action.type) {
    case ADD:
      return [...state, action.book];
    case REMOVE:
      return state.filter((book) => book.id !== action.book.id);
    default:
      return state;
  }
}
// the action creators for the bookReducer
export const addBook = (book) => ({
  type: ADD,
  book,
});
export const removeBook = (book) => ({
  type: REMOVE,
  book,
});
