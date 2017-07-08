// @flow
import shortid from "shortid"

export const OPEN_NOTE = "OPEN_NOTE"
export const MODIFY_NOTE = "MODIFY_NOTE"
export const CREATE_NOTE = "CREATE_NEW_NOTE"
export const DELETE_NOTE = "DELETE_NOTE"

export const CREATE_FOLDER = "CREATE_FOLDER"
export const DELETE_FOLDER = "DELETE_FOLDER"

export function modifyNote(id: string, value: string) {
  return {
    type: MODIFY_NOTE,
    payload: {
      id,
      value,
      timestamp: new Date().getTime()
    }
  }
}

export function deleteNote(noteId: string) {
  return {
    type: DELETE_NOTE,
    payload: {
      id: noteId
    }
  }
}


export function openNote(noteId: string) {
  return {
    type: OPEN_NOTE,
    payload: {
      id: noteId
    }
  }
}

export function createNote() {
  return {
    type: CREATE_NOTE,
    payload: {
      id: shortid.generate(),
      timestamp: new Date().getTime(),
      type: "text",
      value: ""
    }
  }
}
