import React from 'react';
import { connect } from 'react-redux'
import { addNote } from '../actions/noteActions'

let AddNoteContainer = ({ dispatch }) => {
  let input

  let onSubmitClick = (e) => {
    e.preventDefault()
    if(input.value.trim().length < 5) {
      alert("Note must be more then 5 symbols!")
      return
    }
    if(input.value.trim().length >= 800){
      alert("Note must be less then 300 symbols!")
      return
    }
    dispatch(addNote(input.value))
    input.value = ''
    // for animation back if submitted by 'enter'
    input.focus()
    input.blur()
  }

  return (
    <div>
      <form onSubmit={onSubmitClick} autoComplete="off">
        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate" ref={node => {input = node}} />
          <label htmlFor="last_name">Last Name</label>
        </div>

        <button className="waves-effect waves-light btn" type="submit">Add Note</button>
      </form>
    </div>
  )
}

AddNoteContainer = connect()(AddNoteContainer)

export default AddNoteContainer
