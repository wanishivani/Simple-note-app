// NoteList.js
import React from 'react';

function NoteList({ notes, deleteNote }) {
  return (
    <div className="note-list">
      {notes.map(note => (
        <div key={note.id} className="note">
          <p>{note.text}</p>
          <button onClick={() => deleteNote(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
