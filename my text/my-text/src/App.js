// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Navabr from './components/Navabr';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
// import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Initialize with 'light' mode
  const [alert, setAlert] = useState(null); // Fixed naming to avoid conflict

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // Function to toggle between light and dark mode
  const toggleMode = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      document.body.style.backgroundColor = newMode === 'light' ? 'white' : 'grey';
      showAlert(`Dark mode has been ${newMode === 'dark' ? 'enabled' : 'disabled'}`, 'success'); // Show alert on mode change
      document.title = 'My text-Dark mode';

      return newMode;
    });
  };

  useEffect(() => {
    // Apply the background color based on the mode when the component mounts
    document.body.style.backgroundColor = mode === 'light' ? 'white' : 'grey';
  }, [mode]);

  return (
    <>
      <Router>
        <Navabr title="My Text" about="About us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Textform remarks="Enter remarks to analyze" heading="Text Converter" showAlert={showAlert} />} />
          </Routes>
        </div>
        {/* <Footer /> Add the Footer component here */}
      </Router>
    </>
  );
}

export default App;
