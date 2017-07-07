// @flow


import { CREATE_NOTE, DELETE_NOTE, MODIFY_NOTE } from "../actions/notes";

let notes = [
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
];

export default function counter(state = notes, action) {
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
