import React, { useState } from 'react';
import AddDiary from './AddDiary';




const DiaryButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClick = () => {
    const today = new Date().toISOString().split('T')[0]; // Datum im YYYY-MM-DD format, eventuell anpassen je nachdem wie das Format im localStorage ist
    const diaryEntry = localStorage.getItem(today);

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
      {isPopupOpen && <AddDiary onClose={closePopup} />}
    </div>
  );
};

export default DiaryButton;



