// @flow
import { combineReducers } from 'redux';
import counter from './counter';
import notebook from "./notes"

const rootReducer = combineReducers({
  counter,
  notebook
});

export default rootReducer;
