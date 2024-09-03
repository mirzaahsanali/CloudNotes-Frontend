import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import "./NoteForm.css"
import NotesContext from '../../Context/Notes/NotesContext'
import UserNotes from '../User Notes/UserNotes'
import UserContext from './../../Context/User/UserContext';

const NoteForm = () => {
    const notesContext = useContext(NotesContext)
    const { addNote } = notesContext;

    const userContext = useContext(UserContext);
    const { authToken } = userContext;

    const [newNote, setNewNote] = useState({ title: "", tag: "", description: "" })

    const handleChange = (e) => {
        setNewNote({
            ...newNote,
            [e.target.name]: e.target.value
        })
    }

    const handleAddNote = (e) => {
        e.preventDefault();
        addNote(newNote.title, newNote.tag, newNote.description)
    }

    return (
        <>
            <div className="page">
                <div className="middleDiv">
                    {
                        authToken === "tokennotfound" ?
                            <>
                                <p className="text4">Login to write a notes</p>
                            </> :
                            <>
                                <div className="formDiv">
                                    <h1 className='text4'>Write Note</h1>
                                    <form action="">
                                        <p className="fieldName">Note Title</p>
                                        <input className='inputField form-control' type="text" name="title" placeholder="Enter note title" onChange={handleChange} />
                                        <p className="fieldName">Tag</p>
                                        <select defaultValue="Choose a tag" className='inputField form-control' name="tag" onChange={handleChange}>
                                            <option disabled >Choose a tag</option>
                                            <option value="General">General</option>
                                            <option value="Todo">Todo</option>
                                            <option value="Academic">Academic</option>
                                            <option value="Personal">Personal</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        <p className="fieldName">Note Description</p>
                                        <textarea className='inputField inputTextArea form-control' name="description" placeholder="Enter note description" onChange={handleChange} />
                                        <center>
                                            <div className="button" onClick={handleAddNote}>Create Note</div>
                                        </center>
                                    </form>
                                </div>
                            </>
                    }
                </div>
            </div>
        </>
    )
}

export default NoteForm