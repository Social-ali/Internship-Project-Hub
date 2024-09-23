import React, { useState } from 'react';

export default function About() {
  // State for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode function
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Styles based on dark mode
  const containerStyle = {
    color: isDarkMode ? 'white' : 'black',
    backgroundColor: isDarkMode ? '#333' : '#f8f9fa'
  };

  const buttonStyle = {
    color: isDarkMode ? '#333' : 'white',
    backgroundColor: isDarkMode ? 'white' : '#333'
  };

  const accordionButtonStyle = {
    color: isDarkMode ? 'white' : 'black',
    backgroundColor: isDarkMode ? '#555' : '#e9ecef'
  };

  const accordionBodyStyle = {
    color: isDarkMode ? '#e0e0e0' : '#212529',
    backgroundColor: isDarkMode ? '#222' : '#ffffff'
  };

  return (
    <div className="container" style={containerStyle}>
      <button
        type="button"
        className="btn mx-2"
        style={buttonStyle}
        onClick={toggleDarkMode}
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={accordionButtonStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Info 1
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
            style={accordionBodyStyle}
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={accordionButtonStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Info 2
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
            style={accordionBodyStyle}
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
