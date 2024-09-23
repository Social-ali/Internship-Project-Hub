// src/components/Textform.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Textform(props) {
  const [text, setText] = useState('');

  const handleUppercase = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to uppercase!', 'success');
  };

  const handleLowercase = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lowercase!', 'success');
  };

  const handleClear = () => {
    setText('');
    props.showAlert('Text cleared!', 'success');
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
      .then(() => props.showAlert('Text copied to clipboard!', 'success'))
      .catch(() => props.showAlert('Failed to copy text.', 'danger'));
  };

  // Determine if there is any text
  const hasText = text.length > 0;

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleChange}
            id="MyBox"
            rows="6"
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleUppercase}
          disabled={!hasText} // Disable button if there's no text
        >
          Uppercase Converter
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleLowercase}
          disabled={!hasText} // Disable button if there's no text
        >
          Lowercase Converter
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleClear}
          disabled={!hasText} // Disable button if there's no text
        >
          Clear
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleCopy}
          disabled={!hasText} // Disable button if there's no text
        >
          Copy
        </button>
      </div>
      <div className="container mt-3">
        <h1>Text Summary</h1>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Your preview text'}</p>
      </div>
    </>
  );
}

Textform.propTypes = {
  heading: PropTypes.string.isRequired,
  remarks: PropTypes.string,
  showAlert: PropTypes.func.isRequired
};
