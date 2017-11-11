import {
  GET_HOTELS,
  ADD_TO_FAV
} from './constants';

export function get_allHotels () {};

export function add_toFav (hotel) {
  if (typeof hotel !== 'object') return {};

  return {
    action: ADD_TO_FAV,
    payload: hotel,
  }
};
