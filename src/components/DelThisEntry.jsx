import React, { useState } from "react";

/* Diese Komponente übernimmt eine ID und löscht das zugehörige Objekt im localStorage
-- Sie muss an der Stelle eingefügt werden wo man den Löschbutton haben möchte
-- className / Tailwind für das Styling hinzufügen
-- der Key muss noch zugeteilt werden 
-- muss useState noch genutzt werden?

--  */

const [inputStorage, setInputStorage] = useState("");

const DelThisEntry = (id) => {
  const removeThisItem = (id) => {
    const userConfirmed = window.confirm("Eintrag löschen?");

    if (userConfirmed) {
      const getStorage = JSON.parse(localStorage.getItem("diaries")) || [];
      /* objArray muss durch - Key - Name des localStorage getauscht werden  */

      const updArray = getStorage.filter((item) => item.date !== id.id);

      localStorage.setItem("diaries", JSON.stringify(updArray));
    } else {
      return;
    }
  };

  return (
    <>
      <button
        class="rounded-full bg-red-500 px-4 py-2 text-white shadow-md"
        onClick={() => removeThisItem(id)}
      >
        {/* id ist das zu löschenden Elements eines objekts im localstorage arrays  */}
        Eintrag löschen
      </button>
    </>
  );
};

export default DelThisEntry;
