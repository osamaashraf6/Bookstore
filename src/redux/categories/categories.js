const CHECK = 'React-BookStore/categories/Check';
export default function categoryReducer(state = [], action) {
  switch (action.type) {
    case CHECK:
      return action.payload;
    default:
      return state;
  }
}
export const check = () => ({
  type: CHECK,
  payload: 'Work in Progress',
});
