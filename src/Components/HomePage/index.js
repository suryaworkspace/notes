import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesItem from "../NotesItem";
import "./index.css";

function HomePage() {
  const [newNote, setNewNote] = useState("");
  const [notesList, setNotesList] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("notesdata"));
    setNotesList(storedData);
  }, []);
  const updateStateInput = (event) => {
    setNewNote(event.target.value);
  };
  const appendData = () => {
    if (newNote.length !== 0) {
      setNotesList([...notesList, { id: nanoid(), note: newNote }]);

      setNewNote("");
    }
  };
  const saveData = () => {
    localStorage.setItem("notesdata", JSON.stringify(notesList));
  };
  const deleteNote = (id) => {
    const filteredList = notesList.filter((e) => e.id !== id);
    setNotesList(filteredList);
  };

  return (
    <div className="app-container">
      <textarea
        value={newNote}
        onChange={updateStateInput}
        className="notes-input"
        rows="5"
        cols="28"
        placeholder="Enter notes"
      />
      <button type="button" onClick={appendData} className="add-button">
        Add Notes
      </button>
      <button type="button" onClick={saveData} className="add-button">
        Save Notes
      </button>
      <ul className="list-of-notes">
        {notesList.map((eachNote) => {
          return (
            <NotesItem
              key={eachNote.id}
              deleteNote={deleteNote}
              noteData={eachNote}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default HomePage;
