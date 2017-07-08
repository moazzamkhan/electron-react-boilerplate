// @flow

import { combineReducers } from 'redux'
import shortid from "shortid"

import { CREATE_NOTE, DELETE_NOTE, MODIFY_NOTE, OPEN_NOTE } from "../actions/notes";

function createNew() {
  let o = {
    current: "",
    notes: [createNote()]
  }
  o.current = o.notes[0].id
  return o;
}

function createNote() {
  return {
    id: shortid.generate(),
    type: "text",
    value: "",
    lastModified: new Date().getTime()
  }
}

function notebook(state = createNew(), action) {
  switch (action.type) {
    case OPEN_NOTE:
      return Object.assign({}, { current: action.payload.id, notes: [...state.notes] })
    case CREATE_NOTE:
      const n = createNote()
      return Object.assign({}, {
        current: n.id, notes: [n, ...state.notes]
      })

    case MODIFY_NOTE:
      return Object.assign({}, {
        current: state.current,
        notes: state.notes.map(note => {
          if (note.id === action.payload.id) {
            return Object.assign({}, note, {
              value: action.payload.value,
              lastModified: action.payload.timestamp
            })
          }
          return note
        }).sort((a, b) => a.lastModified < b.lastModified)
      })
    case DELETE_NOTE:
      if (state.notes.length === 1) {
        return createNew()
      }

      const index = state.notes.findIndex((note) => note.id === action.payload.id)
      const notes = state.notes.filter((note) => note.id !== action.payload.id)
      const current = notes[Math.min(notes.length - 1, index)].id

      return Object.assign({}, {
        current: current,
        notes: notes.filter((note) => note.id !== action.payload.id)
      })
    default:
      return state;
  }
}


// const notebook = combineReducers({ current, notes })
export default notebook
