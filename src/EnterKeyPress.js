// src/EnterKeyPress.js
import React, { useState } from "react";

const EnterKeyPress = () => {
  const [text, setText] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      alert(`You pressed Enter with the text: ${text}`);
    }
  };

  return (
    <div>
      <h1>Enter KeyPress App</h1>
      <input
        type="text"
        placeholder="Type something and press Enter"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyUp={handleKeyPress}
      />
    </div>
  );
};

export default EnterKeyPress;
