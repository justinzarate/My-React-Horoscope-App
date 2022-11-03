import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

  const [signs, setSigns] = useState([]);
  const [selectedSign, setSelectedSign] = useState(null);

useEffect(() => {
    fetch("http://sandipbgt.com/theastrologer/api/sunsigns/")
      .then(response => response.json())
      .then(setSigns);
}, []);

  return (
    <div className="App">
      <h1>Emmi's Horoscope Signs App</h1>
      <h2>Please select desired sign</h2>
      {selectedSign}
      <div className="grid">
      {signs.map((sign) => (
          <button 
          className="sign" 
          key={sign} 
          onClick={() => setSelectedSign(sign)}
         > 
          {sign}
          </button>
        ))}
        </div>
    </div>
  );
}

export default App;
