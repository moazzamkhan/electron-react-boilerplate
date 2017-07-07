// @flow


import { CREATE_NOTE, DELETE_NOTE, MODIFY_NOTE, OPEN_NOTE } from "../actions/notes";

let initialState = {
  current: "0",
  notes: [
    {
      "id": "0",
      "type": "javascript",
      "value": "var type=\"hello\"\n var r = 7 - 10;\n var r = 7 - 10;",
      lastModified: 0
    },
    {
      "id": "1",
      "type": "javascript",
      "value": "var type=\"hello\"",
      lastModified: 1
    },
    {
      "id": "2",
      "type": "markdown",
      "value": "#Hello\n##hi",
      lastModified: 2
    },
    {
      "id": "3",
      "type": "javascript",
      "value": "var type=\"hello\"",
      lastModified: 3
    }, {
      "id": "4",
      "type": "markdown",
      "value": "#Hello\n##hi",
      lastModified: 4
    }, {
      "id": 5,
      "type": "markdown",
      "value": "#Hello\n##hi",
      lastModified: 5
    }
  ]
};

function notes(state = initialState.notes, action) {
  switch (action.type) {
    case CREATE_NOTE:
      return [...notes, {
        id: action.payload.id,
        type: action.payload.type,
        value: action.payload,
        lastModified: action.payload.lastModified
      }];
    case MODIFY_NOTE:
      return notes.map(note => {
        if (note.id === action.payload.id) {
          return Object.assign({}, note, {
            value: action.payload.value,
            lastModified: action.payload.lastModified
          })
        }
        return note
      });
    case DELETE_NOTE:
      return notes.filter((note) => note.id !== action.payload.id);
    default:
      return state;

  }
}

export default function notebook(state = initialState, action) {
  switch (action.type) {
    case OPEN_NOTE:
      return Object.assign({}, state, {
        current: action.payload.id
      })
    case CREATE_NOTE:
    case MODIFY_NOTE:
    case DELETE_NOTE:
      return Object.assign({}, state, { notes: notes(state, action) })
    default:
      return state
  }
}
