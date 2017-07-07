// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import notes from "./notes"

const rootReducer = combineReducers({
  counter,
  notes,
  router,
});

export default rootReducer;
