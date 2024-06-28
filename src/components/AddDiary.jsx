import React, { useState } from 'react';

function AddDiary({ setShowDiary }) { // definiere States 
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');

  const handleAddDiary = () => {
    const newDiary = { title, date, image, content }; // erstellt neues Diary Objekt
    const diaries = JSON.parse(localStorage.getItem('diaries')) || {}; // Holt sich die Diaries aus dem localStorage
    
    // Verwenden des Datums als Schlüssel, um Duplikate zu vermeiden
    if (!diaries[date]) { // Prüfen, ob für das Datum bereits ein Eintrag existiert
      diaries[date] = newDiary;
      localStorage.setItem('diaries', JSON.stringify(diaries)); // Speichert das neue Diary Objekt im localStorage
      setShowDiary(true); // Triggert reload
    } else {
      alert('Ein Eintrag für dieses Datum existiert bereits.');
    }
  };

  return (
    <div className='flex flex-col gap-4 text-center'>
      <input className='' type="text" placeholder="Titel" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <input type="text" placeholder="Bild URL" value={image} onChange={(e) => setImage(e.target.value)} />
      <textarea placeholder="Inhalt" value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleAddDiary}>Eintrag hinzufügen</button>
    </div>
  );
}

export default AddDiary;