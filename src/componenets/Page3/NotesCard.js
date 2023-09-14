import { useEffect, useState } from "react";
import "./NotesCard.css";

function NotesCard() {
  const [NotesData, setNotesData] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("NotesData");
    if (savedData) {
      setNotesData(savedData);
    }
  }, []);

  const handleChange = (e) => {
    const data = e.target.value;
    setNotesData(data);
    localStorage.setItem("NotesData", NotesData);
  };
  return (
    <div className="notesCard">
      <h3>All Notes</h3>
      <div className="notes">
        <textarea
          className="ip"
          type="text"
          value={NotesData}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default NotesCard;
