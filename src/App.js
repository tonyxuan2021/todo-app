import { useState } from "react";
import "./App.css";
import CreateArea from "./comoenents/CreateArea";
import Header from "./comoenents/Header";
import Note from "./comoenents/Note";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
    console.log(notes);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="App">
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => {
        return <Note key={index} content={note} onDelete={deleteNote} />;
      })}
    </div>
  );
}

export default App;
