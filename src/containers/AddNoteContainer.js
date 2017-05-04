import React from 'react';
import { connect } from 'react-redux'
import { addNote, inputValidate } from '../actions/noteActions'

let AddNoteContainer = ({ dispatch }) => {
  let input

  let onSubmitClick = (e) => {
    e.preventDefault()
    let text = input.value.trim()

    if(!inputValidate(text)){
      return
    }
    
    dispatch(addNote(text))
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
