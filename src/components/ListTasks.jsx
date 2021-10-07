import React, { Component } from 'react'
import Moment from 'react-moment'

export default class ListTasks extends Component {
  constructor (props) {
    super(props)

    this.createTasks = this.createTasks.bind(this)
  }

  createTasks (note) {
    return (
      <div className='task__content' key={note.key}>
        <Moment format='MMM Do h:mm:ss a' className='task__date'>
          {note.date}
        </Moment>
        <p>{note.text}</p>
        <button
          className='btn btn-danger'
          onClick={() => this.deleteNote(note.key)}
        >
          Delete
        </button>
      </div>
    )
  }

  deleteNote (key) {
    if (window.confirm('Delete the item?')) {
      this.props.deleteNote(key)
    }
  }

  render () {
    const todoNotes = this.props.arrayNotes
    const listNotes = todoNotes.map(this.createTasks)

    return <div className='task__wrapper'>{listNotes}</div>
  }
}
