import { SET_FAVS, ADD_TO_FAV } from "./constants";

const HOTELS = { };

export default (state = HOTELS, action) => {
    switch (action.type) {
       case SET_FAVS:
        return Object.assign({}, action.payload);

       case ADD_TO_FAV:
        return Object.assign({}, state, action.payload);
 
       default:
          return state;
    }
}