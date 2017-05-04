import React from 'react'

class EditForm extends React.Component{
  componentDidMount(){
    // focusing and setting cursor at the end of the text
    let el = this.refs.div
    let endNode = el.lastChild.length
    let range = document.createRange()
    let sel = window.getSelection()
    range.setStart(el.childNodes[0], endNode)
    sel.removeAllRanges()
    sel.addRange(range)
    el.focus()
  }
  render(){
    const {text, saveEdit, cancelEdit} = this.props

    return (
      <li>
        <div className="row">
          <div className="col s12 m9">
            <p className="editable" autoFocus contentEditable={true} autoComplete="off" ref="div">{text}</p>
          </div>
          <div className="col s12 m3">
            <button className="waves-effect waves-light btn" onClick={() => saveEdit(this.refs.div.innerText)}><i className="material-icons right">done</i>Save</button>
            <button className="waves-effect waves-light btn" onClick={cancelEdit}><i className="material-icons right">close</i>Cancel</button>
          </div>
        </div>
        <div className="divider"></div>
      </li>
    )
  }

}

export default EditForm