// frontend/src/App.js
import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    // Fetch message from backend
    fetch('http://localhost:5000/message')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Simple Full-Stack App</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;