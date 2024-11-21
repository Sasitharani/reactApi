import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  // State to manage the input value and response messages
  const [inputValue, setInputValue] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [additionalValue, setAdditionalValue] = useState('');

  // Function to handle button click
  const handleButtonClick = () => {
    // Send a POST request to the server with the input value
    axios.post('http://localhost:3000/api', { value: inputValue })
      .then(response => {
        // Set the response messages to be displayed
        setResponseMessage(response.data.message);
        setAdditionalValue(response.data.message2);
      })
      .catch(error => {
        console.error('There was an error making the request!', error);
      });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Input box to take value from user */}
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Enter value"
        style={{
          padding: '10px',
          fontSize: '16px',
          marginBottom: '20px'
        }}
      />
      <br />
      {/* Button to send value to server */}
      <button 
        onClick={handleButtonClick} 
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Send Value to Server
      </button>
      {/* Display the response messages in red */}
      {responseMessage && (
        <div style={{ color: 'red', marginTop: '20px' }}>
          {responseMessage}
        </div>
      )}
      {additionalValue && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          {additionalValue}
        </div>
      )}
    </div>
  );
};

export default App;
