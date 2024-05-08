// NoteForm.js
import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim() !== '') {
      addNote(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a note..."
        value={text}
        onChange={handleChange}
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;
