import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import Home from "./Components/homepage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/login and signup/LoginPage";
import SignupPage from "./Components/login and signup/SignupPage";
import NoteForm from "./Components/Note Form/NoteForm";
import EditForm from "./Components/Note Form/EditForm";
import PageNotFound from "./Components/Page Not Found/PageNotFound";
import UserNotes from "./Components/User Notes/UserNotes";
import NotesState from "./Context/Notes/NotesState";
import UserState from "./Context/User/UserState";
import Toast from "./Components/Toast/Toast";
import ToastState from './Context/Toast/ToastState';

function App() {
	return (
		<>
			<ToastState>
			<UserState>
			<NotesState>
				<Router>
					<Navbar />
					<Toast/>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/login" element={<LoginPage />} />
						<Route exact path="/signup" element={<SignupPage />} />
						<Route exact path="/writeusernote" element={<NoteForm />} />
						<Route exact path="/usernotes" element={<UserNotes />} />
						<Route exact path="/editusernote" element={<EditForm />} />
						<Route exact path="/deleteusernote" element={<EditForm />} />
						<Route exact path="/*" element={<PageNotFound/>} />
					</Routes>
				</Router>
			</NotesState>
			</UserState>
			</ToastState>
		</>
	);
}

export default App;
