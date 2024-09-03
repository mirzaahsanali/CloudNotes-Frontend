import React, { useContext } from 'react'
import "./NoteCard.css"
import NotesContext from '../../Context/Notes/NotesContext'
import { useNavigate } from 'react-router-dom'

const NoteCard = (props) => {
    const navigate = useNavigate();
    const notesContext = useContext(NotesContext)
    const {deleteNote} = notesContext;

    const handleUpdate = () => {
        navigate("/editusernote", {
            state:{
                id: props.id,
                title: props.title,
                tag: props.tag,
                description: props.description,
            }
        })
    }

    const handleDelete = () => {
        deleteNote(props.id)
    }
    
    return (
        <>
            <div className="col-lg-4 p-2">
                <div className="noteCard">
                    <div className="cardTop">
                        <div className="noteTitle">{props.title}</div>
                        <div className="noteIcons">
                                <i className="bi bi-pencil-square" onClick={handleUpdate}></i>
                                <i className="bi bi-trash" onClick={handleDelete}></i>
                        </div>
                    </div>
                    <div className="cardMid">
                        {props.tag}
                    </div>
                    <div className="cardBottom">
                        {props.description}
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoteCard