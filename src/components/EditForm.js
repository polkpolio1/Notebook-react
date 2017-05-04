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
          <div autoFocus contentEditable={true} autoComplete="off" ref="div">{text}</div>
          <button onClick={() => saveEdit(this.refs.div.innerText)}>Save</button>
          <button onClick={cancelEdit}>Cancel</button>
      </li>
    )
  }

}

export default EditForm