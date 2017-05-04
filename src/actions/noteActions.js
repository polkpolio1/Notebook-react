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

export const inputValidate = (text) => {
  if(text.length < 5) {
    alert("Note must be more then 5 symbols!")
    return false
  }
  if(text.length >= 800){
    alert("Note must be less then 800 symbols!")
    return false
  }
  return true
}