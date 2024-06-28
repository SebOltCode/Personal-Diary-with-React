import React, { useState } from 'react';

// Platzhalter für das Formular damit ich unten einen return habe, muss dann noch ausgelagert 
// und erweitert werden und dann unten als Prop eingefügt werden
const DiaryEntryForm = ({ onClose }) => (
  <div className="popup">
    <div className="popup-content">
      <h2>Neuer Tagebucheintrag</h2>
      <form>
        {/* Form Inhalt */}
      </form>
      <button onClick={onClose}>Safe</button>
    </div>
  </div>
);



const DiaryButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClick = () => {
    const today = new Date().toISOString().split('T')[0]; // Datum im YYYY-MM-DD format, eventuell anpassen je nachdem wie das Format im localStorage ist
    const diaries = JSON.parse(localStorage.getItem('diaries')) || {}; // H: Holt sich die Diaries aus dem localStorage
    const diaryEntry = diaries[today]; // H: Holt sich den Eintrag für heute und prüft diesen

    if (diaryEntry) {
      alert("Eintrag für heute bereits vorhanden, komm morgen wieder.");
    } else {
      setIsPopupOpen(true);
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <button onClick={handleClick}>Tagebucheintrag hinzufügen</button>
      {isPopupOpen && <DiaryEntryForm onClose={closePopup} />}
    </div>
  );
};

export default DiaryButton;



// Für die main Seite zum einfügen der DiaryAddButton Komponente (Platzhalter):

// import React from 'react';
// import DiaryButton from './DiaryButton'; // Passe den Pfad entsprechend an

// const App = () => (
//   <div>
//     <h1>Daily Diary</h1>
//     <DiaryButton />
//   </div>
// );

// export default App;