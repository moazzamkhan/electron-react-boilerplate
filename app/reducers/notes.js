// @flow

import { combineReducers } from 'redux'

import { CREATE_NOTE, DELETE_NOTE, MODIFY_NOTE, OPEN_NOTE } from "../actions/notes";

const noteList = [
  {
    "id": "0",
    "type": "javascript",
    "value": "var type=\"hello\"\n var r = 7 - 10;\n var r = 7 - 10;",
    lastModified: 0
  }, {
    "id": "1",
    "type": "markdown",
    "value": "#Hello\n##hi",
    lastModified: 5
  }
];


function notes(state = noteList, action) {
  switch (action.type) {
    case CREATE_NOTE:
      return [...state, {
        id: action.payload.id,
        type: action.payload.type,
        value: action.payload,
        lastModified: action.payload.timestamp
      }];
    case MODIFY_NOTE:
      return state.map(note => {
        if (note.id === action.payload.id) {
          return Object.assign({}, note, {
            value: action.payload.value,
            lastModified: action.payload.timestamp
          })
        }
        return note
      });
    case DELETE_NOTE:
      return state.filter((note) => note.id !== action.payload.id);
    default:
      return state;

  }
}

export function current(state = noteList[0].id, action) {
  switch (action.type) {
    case OPEN_NOTE:
      return action.payload.id
    default:
      return state
  }
}

const notebook = combineReducers({ current, notes })
export default notebook
