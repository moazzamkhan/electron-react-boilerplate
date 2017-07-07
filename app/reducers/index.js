// @flow
import { combineReducers } from 'redux';
import counter from './counter';
import notes from "./notes"

const rootReducer = combineReducers({
  counter,
  notes
});

export default rootReducer;
