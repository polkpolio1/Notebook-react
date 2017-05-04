import * as types from '../constants/actionTypes'

export const addNote = (text) => {
  return {
    type: types.ADD_NOTE,
  	text
  }
}

export const deleteNote = (id) => {
  return {
    type: types.DELETE_NOTE,
    id
  }
}

export const editNote = (id, text) => {
  return {
    type: types.EDIT_NOTE,
    id,
    text
  }
}