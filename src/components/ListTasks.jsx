import React, { Component } from 'react'
import Moment from 'react-moment'
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader
} from 'mdb-react-ui-kit'

export default class ListTasks extends Component {
  constructor (props) {
    super(props)

    this.createTasks = this.createTasks.bind(this)
  }

  createTasks (note) {
    return (
      <div>
        <MDBCard
          background='primary'
          className='text-white mb-3'
          style={{ maxWidth: '18rem' }}
        >
          <MDBCardHeader background='success'>
            <Moment format='MMM Do h:mm:ss a'>{note.date}</Moment>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>{note.title}</MDBCardTitle>
            <MDBCardText>{note.text}</MDBCardText>
          </MDBCardBody>
          <MDBCardHeader>
            <button
              className='btn btn-danger'
              onClick={() => this.deleteNote(note.key)}
            >
              Delete
            </button>
          </MDBCardHeader>
        </MDBCard>
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