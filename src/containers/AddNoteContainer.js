import React, { Component } from 'react';
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
    if(input.value.trim().length >= 300){
      alert("Note must be less then 300 symbols!")
      return
    }

    dispatch(addNote(input.value))
    input.value = ''
  }

  return (
    <div>
      <form onSubmit={onSubmitClick}>
        <input ref={node => {input = node}}/>
        <button type="submit">Add Note</button>
      </form>
    </div>
  )
}

AddNoteContainer = connect()(AddNoteContainer)

export default AddNoteContainer
