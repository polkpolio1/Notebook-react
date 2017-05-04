import * as types from '../constants/actionTypes'

let initialState = [
  {
    id: 0,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, explicabo adipisci voluptas animi alias quis vitae porro culpa debitis temporibus qui pariatur voluptates sint cupiditate nesciunt nobis laborum totam laudantium! Quos id corporis quaerat, rerum inventore doloremque autem molestias, iste repudiandae eum ad voluptatum cumque eaque placeat obcaecati fugit vel perspiciatis nostrum sit ullam unde laborum pariatur, accusantium ducimus sed."
  },
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo nisi incidunt quaerat consequatur, eaque ad. Esse odio mollitia deserunt voluptatibus eius ex ab praesentium voluptatum consectetur quod inventore, delectus! Perspiciatis."
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo nisi incidunt quaerat consequatur, eaque ad. Esse odio mollitia deserunt voluptatibus eius ex ab praesentium voluptatum consectetur quod inventore, delectus! Perspiciatis."
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, explicabo adipisci voluptas animi alias quis vitae porro culpa debitis temporibus qui pariatur voluptates sint cupiditate nesciunt nobis laborum totam laudantium! Quos id corporis quaerat, rerum inventore doloremque autem molestias, iste repudiandae eum ad voluptatum cumque eaque placeat obcaecati fugit vel perspiciatis nostrum sit ullam unde laborum pariatur, accusantium ducimus sed."
  }
]

let counter = initialState.length || 0;

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

const notes = (state=initialState, action) => {
  switch (action.type){
    case types.ADD_NOTE:
      return [
        note(undefined, action),
        ...state
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