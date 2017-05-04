import React from 'react'

const Note = ({ text, onDeleteClick, startEdit }) => {
  let input

  return (
  	<li>
      <span ref={node => { input = node }}>{text}</span>
      <button onClick={onDeleteClick}> DELETE </button>
      <button onClick={() => startEdit(input.innerText)}> EDIT </button>
    </li>
  )
}

export default Note