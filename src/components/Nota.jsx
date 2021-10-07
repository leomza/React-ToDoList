import React, { Component } from 'react'
import shortid from 'shortid'
import ListTasks from './ListTasks'

export default class Nota extends Component {
  constructor (props) {
    super(props)
    this.state = { notes: [] }

    this.addNote = this.addNote.bind(this)
    this.delete = this.delete.bind(this)
  }

  addNote (event) {
    if (this._inputElement.value !== '') {
      const newNote = {
        text: this._inputElement.value,
        key: shortid.generate(),
        date: new Date()
      }

      this.setState(oldState => {
        return {
          notes: [...oldState.notes, newNote]
        }
      })
      this._inputElement.value = ''
    } else {
      alert('El campo no puede estar vacio')
    }
    event.preventDefault()
  }

  delete (key) {
    const filteredNotes = this.state.notes.filter(note => {
      return note.key !== key
    })

    this.setState({
      notes: filteredNotes
    })
  }

  render () {
    return (
      <div>
        <form className='form-group' onSubmit={this.addNote}>
          <textarea
            ref={a => (this._inputElement = a)}
            className='form-control w-50 p-3'
            value={this.state.value}
            placeholder='Please enter a new note here'
          />
          <input
            className='btn btn-primary submit__button'
            type='submit'
            value='Add'
          />
        </form>
        <ListTasks arrayNotes={this.state.notes} deleteNote={this.delete} />
      </div>
    )
  }
}
