export const CHECK = 'React-BookStore/categories/Check';

// reducer
export default function categoryReducer(state = [], action) {
  switch (action.type) {
    case `${CHECK}/fulfilled`:
      return Object.keys(action.payload).map((key) => {
        const { category } = action.payload[key][0];
        return {
          item_id: key,
          category,
        };
      });
    default:
      return state;
  }
}

// action creators
export const check = (book) => ({
  type: CHECK,
  book,
});
