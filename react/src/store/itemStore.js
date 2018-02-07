import axios from 'axios';

// ---------- ACTION TYPES ----------
const LOAD_ITEMS = 'LOAD_ITEMS';
const GET_ITEM = 'GET_ITEM';
const GET_FAVORITE = 'GET_FAVORITE';
const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

// ---------- ACTION CREATORS ----------
const loadItems = itemData => ({ type: LOAD_ITEMS, itemData });
const getItem = item => ({ type: GET_ITEM, item });
const getFavorite = id => ({ type: GET_FAVORITE, id });
const removeFavorite = id => ({ type: REMOVE_FAVORITE, id });


// ---------- INIT STATE ----------
const initState = {
  items: [],
  totalItems: 0,
  item: {},
};

// ---------- DISPATCHERS ----------
export const fetchItems = payload =>
  dispatch =>
    axios.get(`/browse?start=${payload.start}`)
      .then(res => dispatch(loadItems(res.data || {} )))
      .catch(console.error.bind(console));

export const fetchItem = id =>
  dispatch =>
    axios.get(`/item/${id}`)
      .then(res => dispatch(getItem(res.data || {} )))
      .catch(console.error.bind(console));

export const addFavorite = id =>
  dispatch =>
    axios.post(`/session/addFavorite/${id}`)
    .then(() => dispatch(getFavorite(id)))
    .catch(console.error.bind(console));

export const deleteFavorite = id =>
  dispatch =>
    axios.delete(`/session/deleteFavorite/${id}`)
    .then(() => dispatch(removeFavorite(id)))
    .catch(console.error.bind(console));

// ---------- REDUCER ----------
export default function (state = initState, action) {
  const newState = Object.assign({}, state );
  let favorite;
  switch (action.type) {
    case LOAD_ITEMS:
      newState.items = action.itemData.items ?
        [...state.items, ...action.itemData.items]
        : state.items;
      newState.totalItems = action.itemData.totalItems ?
        action.itemData.totalItems
        : 0;
      break;
    case GET_ITEM:
      newState.item = action.item;
      break;
    case GET_FAVORITE:
      newState.items = newState.items.map(item => {
        if (item.id === action.id) {
          item.favorite = true;
        }
        return item;
      });
      favorite =
        newState.item.id === action.id ?
        true : newState.item.favorite;
      newState.item = Object.assign({}, newState.item, { favorite });
      break;
    case REMOVE_FAVORITE:
      newState.items = newState.items.map(item => {
        if (item.id === action.id) {
          item.favorite = false;
        }
        return item;
      });
      favorite =
        newState.item.id === action.id ?
        false : newState.item.favorite;
      newState.item = Object.assign({}, newState.item, { favorite });
      break;

    default:
      return newState;
  }
  return newState;
}
