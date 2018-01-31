import axios from 'axios';

// ---------- ACTION TYPES ----------
const LOAD_ITEMS = 'LOAD_ITEMS';

// ---------- ACTION CREATORS ----------
const loadItems = items => ({ type: LOAD_ITEMS, items });

// ---------- INIT STATE ----------
const initState = {
  items: []
};

// ---------- DISPATCHERS ----------
export const fetchItems = () =>
  dispatch =>
    axios.get('/browse')
      .then(res => dispatch(loadItems(res.data.items || [] )))
      .catch(console.error.bind(console));

// ---------- REDUCER ----------
export default function (state = initState, action) {
  const newState = Object.assign({}, state );
  switch (action.type) {
    case LOAD_ITEMS:
      newState.items = action.items;
      break;

    default:
      return newState;
  }
  return newState;
}
