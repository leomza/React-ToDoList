import React, { Component } from 'react'
import shortid from 'shortid'
import ListTasks from './ListTasks'
import TextareaAutosize from 'react-textarea-autosize';

export default class Nota extends Component {
  constructor (props) {
    super(props)
    this.state = { notes: [] }

    this.addNote = this.addNote.bind(this)
    this.delete = this.delete.bind(this)
  }

  addNote (event) {
    if (this._inputElementText.value !== '') {
      const newNote = {
        title: this._inputElementTitle.value,
        text: this._inputElementText.value,
        key: shortid.generate(),
        date: new Date()
      }

      this.setState(oldState => {
        return {
          notes: [...oldState.notes, newNote]
        }
      })
      this._inputElementText.value = '';
      this._inputElementTitle.value = '';
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
          <input
            type='text'
            ref={a => (this._inputElementTitle = a)}
            className='form-control w-50 p-1 form__title'
            value={this.state.value}
            placeholder='Enter a title of the note (optional)'
          />
          <TextareaAutosize
            ref={a => (this._inputElementText = a)}
            className='form-control w-50 p-5'
            value={this.state.value}
            placeholder='Please enter a new note here'
          />
          <input
            className='btn btn-success submit__button'
            type='submit'
            value='Add'
          />
        </form>
        <ListTasks arrayNotes={this.state.notes} deleteNote={this.delete} />
      </div>
    )
  }
}
