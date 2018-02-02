import axios from 'axios';

// ---------- ACTION TYPES ----------
const LOAD_ITEMS = 'LOAD_ITEMS';

// ---------- ACTION CREATORS ----------
const loadItems = itemData => ({ type: LOAD_ITEMS, itemData });

// ---------- INIT STATE ----------
const initState = {
  items: [],
  totalItems: 0,
};

// ---------- DISPATCHERS ----------
export const fetchItems = (payload) =>
  dispatch =>
    axios.get(`/browse?start=${payload.start}`)
      .then(res => dispatch(loadItems(res.data || {} )))
      .catch(console.error.bind(console));

// ---------- REDUCER ----------
export default function (state = initState, action) {
  const newState = Object.assign({}, state );
  switch (action.type) {
    case LOAD_ITEMS:
      newState.items = [...state.items, ...action.itemData.items];
      newState.totalItems = action.itemData.totalItems;
      break;

    default:
      return newState;
  }
  return newState;
}
