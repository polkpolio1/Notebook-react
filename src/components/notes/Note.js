import React from 'react'

const Note = ({ text, onDeleteClick, startEdit }) => {
  let input

  return (
  	<li>
  	  <div  className="row">
  	    <div className="col s9">
      	  <p ref={node => { input = node }}>{text}</p>
  	    </div>
  	  	<div className="col s3">
	      <button className="waves-effect waves-light btn" onClick={onDeleteClick}><i className="material-icons right">delete</i> DELETE </button>
	      <button className="waves-effect waves-light btn" onClick={() => startEdit(input.innerText)}><i className="material-icons right">edit</i> EDIT </button>
  	  	</div>
  	  </div>
      <div className="divider"></div>
  	</li>
  )
}

export default Note