import * as types from '../constants/actionTypes'

let counter = 0;

const note = (state={}, action) => {
  switch (action.type){
    case types.ADD_NOTE:
      return {
        id: counter++,
        text: action.text
      }
    case types.DELETE_NOTE:
      return state.id !== action.id
    case types.EDIT_NOTE:
      return state.id !== action.id 
        ? state
        : Object.assign({}, state, {
            text: action.text
          })
    default:
      return state
  }
}

const notes = (state=[], action) => {
  switch (action.type){
    case types.ADD_NOTE:
      return [
        ...state,
        note(undefined, action)
      ]
    case types.DELETE_NOTE:
      return state.filter((item) => 
        note(item, action)
      )
    case types.EDIT_NOTE:
      return state.map((item) => 
        note(item, action)
      )
    default:
      return state
  }
}

export default notes