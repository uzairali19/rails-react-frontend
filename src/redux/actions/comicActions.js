import { GET_COMICS } from '../types';
import * as api from '../../api';

export const getComics = () => async (dispatch) => {
  const { data } = await api.getComics();
  try {
    const action = { type: GET_COMICS, payload: data };
    dispatch(action);
  } catch (err) {
    console.log(err);
  }
};
