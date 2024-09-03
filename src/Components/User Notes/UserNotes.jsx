import React, { useContext, useEffect } from 'react'
import "./UserNotes.css"
import NoteCard from '../Note Card/NoteCard'
import NotesContext from '../../Context/Notes/NotesContext'
import UserContext from './../../Context/User/UserContext';

const UserNotes = () => {
    const notesContext = useContext(NotesContext);
    const { notes, fetchUserNotes } = notesContext;

    const userContext = useContext(UserContext);
    const { authToken } = userContext;

    useEffect(() => {
        fetchUserNotes();
        // eslint-disable-next-line
    })
    return (
        <>
            <div className="page p-5">
                <div className="UserNotesDiv">
                    {
                        authToken === "tokennotfound" ?
                            <>
                            <p className="text4">Login to see your notes</p>
                            </> :
                            <>
                                <div className="row">
                                    {
                                        notes.length === 0 ? <p className='text4'>No Notes Found</p> :
                                            notes.map((note) => {
                                                return (
                                                    <NoteCard key={note._id} id={note._id} title={note.title} tag={note.tag} description={note.description} />
                                                )
                                            })
                                    }
                                </div>
                            </>

                    }
                </div>
            </div>
        </>
    )
}

export default UserNotes