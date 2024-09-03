import React, { useContext, useState } from "react";
import NotesContext from "./NotesContext";
import UserContext from "../User/UserContext";
import ToastContext from '../../Context/Toast/ToastContext'


const NotesState = (props) => {
	const userContext = useContext(UserContext);
	const {authToken} = userContext;
	
	const toastContext = useContext(ToastContext)
	const {notify} = toastContext;

	const [notes, setNotes] = useState([]);

	const url = "http://localhost:5000";

	const fetchUserNotes = async () => {
		if(authToken!=="tokennotfound"){
			const response = await fetch(`${url}/api/notes/fetchusernotes`,
				{
					method: "GET",
					headers: {
						Authorization: authToken,
					},
				}
			);
			const userNotes = await response.json();
			setNotes(userNotes);
		}
	};

	const addNote = async (title, tag, description) => {
		const response = await fetch(
			`${url}/api/notes/addnote`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: authToken,
				},
				body: JSON.stringify({ title, tag, description }),
			}
		);
		if(response.ok){
			notify("Note added successfully")
		}else{
			notify("Failure: note not added")
		}
	};

	const deleteNote = async (id) => {
		const response = await fetch(
			`${url}/api/notes/deleteusernote/${id}`,
			{
				method: "DELETE",
				headers: {
					Authorization: authToken,
				},
			}
		);
		if(response.ok){
			notify("Note deleted successfully")
		}else{
			notify("Failure: note not deleted")
		}
	};

	const updateNote = async (id, title, tag, description) => {
		console.log(id, title, tag, description);
		const response = await fetch(
			`${url}/api/notes/updateusernote/${id}`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					Authorization: authToken,
				},
				body: JSON.stringify({ title, tag, description }),
			}
		);
		if(response.ok){
			notify("Note updated successfully")
		}else{
			notify("Failure: note not updated")
		}
	};

	return (
		<NotesContext.Provider value={{ notes, fetchUserNotes, addNote, deleteNote, updateNote }}>
			{props.children}
		</NotesContext.Provider>
	);
};

export default NotesState;
