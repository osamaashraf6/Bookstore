// the types of the action
const CHECK = 'React-BookStore/categories/Check';
// reducer for the categoryReducer
export default function categoryReducer(state = [], action) {
  switch (action.type) {
    case CHECK:
      return action.payload;
    default:
      return state;
  }
}
// the action creators for the check
export const check = () => ({
  type: CHECK,
  payload: 'Work in Progress',
});
