import { connect } from 'react-redux'
import { deleteNote, editNote } from '../actions/noteActions'

import NoteList from '../components/NoteList'

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteClick: (id) => {
      dispatch(deleteNote(id))
    },
    onEditClick: (id, text) => {
      dispatch(editNote(id, text))
    }
  }
}

const Notes = connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList)

export default Notes;