import React from 'react'
import Note from './Note'
import EditForm from './EditForm'

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
  	if(text.length < 5) {
      alert("Note must be more then 5 symbols!")
      return
    }
    if(text.length >= 800){
      alert("Note must be less then 300 symbols!")
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