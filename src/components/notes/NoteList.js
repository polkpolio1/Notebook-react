import React from 'react'
import Note from './Note'
import EditForm from './EditForm'
import { inputValidate } from '../../actions/noteActions'

class NoteList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      editableId: null,
      editableText: null
    }
  }

  startEdit(id, text){
  	this.setState({
  	  editableId: id,
  	  editableText: text
  	})
  }

  saveEdit(id, text){
  	text = text.trim()

    if(!inputValidate(text)){
      return
    }
    
  	this.props.onEditClick(id, text)
  	this.cancelEdit()
  }

  cancelEdit(){
  	this.setState({
  	  editableId: null,
  	  editableText: null
  	})
  }

  render(){
  	const { notes, onDeleteClick } = this.props

    return (
      <ul>
        {
          notes.map(note => {
        	return (
        	  this.state.editableId !== note.id 
        	  ? <Note
                key={note.id}
                onDeleteClick={onDeleteClick.bind(null, note.id)}
                startEdit={this.startEdit.bind(this, note.id)}
                {...note}
              /> : <EditForm 
                key={note.id} 
                text={this.state.editableText}
                saveEdit={this.saveEdit.bind(this, note.id)}
                cancelEdit={this.cancelEdit.bind(this)}
              /> 
            )
          })
    	}
      </ul>
    )
  }
}

export default NoteList