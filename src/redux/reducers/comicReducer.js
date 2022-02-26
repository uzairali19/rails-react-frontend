import { GET_COMICS } from '../types';

const initialState = [];

const comicReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMICS:
      return action.payload;
    default:
      return state;
  }
};

export default comicReducer;
