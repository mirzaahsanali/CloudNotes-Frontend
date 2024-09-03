import React , {useContext, useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./NoteForm.css"
import NotesContext from '../../Context/Notes/NotesContext'

const EditForm = (props) => {
    const notesContext = useContext(NotesContext)
    const {updateNote} = notesContext;

    const location = useLocation()

    const {id, title, tag, description} = location.state || {}

    const [newNote , setNewNote] = useState({id: id , title: title , tag: tag , description: description})

    const handleChange = (e) => {
        setNewNote({
            ...newNote,
            [e.target.name]: e.target.value
        })
    }
    
    const handleUpdateNote = (e) => {
        e.preventDefault();
        updateNote(newNote.id, newNote.title, newNote.tag, newNote.description)
    }

    return (
        <>
            <div className="page">
                <div className="middleDiv">
                    <div className="formDiv">
                        <h1 className='text4'>Edit Note</h1>
                        <form action="">
                            <p className="fieldName">Note Title</p>
                            <input className='inputField form-control' type="text" name="title" placeholder="Enter note title to update" defaultValue={title} onChange={handleChange}/>
                            <p className="fieldName">Tag</p>
                            <select defaultValue={tag} className='inputField form-control' name="tag" onChange={handleChange}>
                                <option disabled >Choose a tag</option>
                                <option value="General">General</option>
                                <option value="Todo">Todo</option>
                                <option value="Academic">Academic</option>
                                <option value="Personal">Personal</option>
                                <option value="Other">Other</option>
                            </select>
                            <p className="fieldName">Note Description</p>
                            <textarea className='inputField inputTextArea form-control' name="description" placeholder="Enter note description to update" defaultValue={description} onChange={handleChange}/>
                            <center>
                                <div className="button" onClick={handleUpdateNote}>Update Note</div>
                            </center>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditForm