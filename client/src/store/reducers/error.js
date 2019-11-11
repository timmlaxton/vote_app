import {ADD_ERROR, REMOVE_ERROR} '../actionTypes';

export default (state = {message: null}, action) => {
  switch(action.types) {
    case Add_ERROR:
    return {...state, message: action.error};
    case RMOVE_ERROR:
    return {...state, message: null};
    default: return state;
  }
};
