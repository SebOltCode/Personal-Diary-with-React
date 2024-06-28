import React, { useState } from 'react';

function AddDiary({setShowDiary}) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');

  const handleAddDiary = () => {
    const newDiary = { title, date, image, content }; // erstellt neues Diary Objekt
    const diaries = JSON.parse(localStorage.getItem('diaries')) || []; // Holt sich die Diaries aus dem localStorage
    diaries.push(newDiary);
    localStorage.setItem('diaries', JSON.stringify(diaries));
    setShowDiary(true);
  };

  return (
    <div className='flex flex-col gap-4 text-center'>
      <input className='input' type="text" placeholder="Titel" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input className='input' type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <input className='input' type="text" placeholder="Bild URL" value={image} onChange={(e) => setImage(e.target.value)} />
      <textarea className='textarea' placeholder="Inhalt" value={content} onChange={(e) => setContent(e.target.value)} />
      <button className='btn' onClick={handleAddDiary}>Eintrag hinzufügen</button>
    </div>
  );
}

export default AddDiary;