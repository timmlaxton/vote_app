import {createStore} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const DEFUALT_STATE = {
  error: {message: null }
}

export const store = createStore()
rootReducer,
DEFAULT_STATE
