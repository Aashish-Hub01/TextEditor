import React, { useState } from 'react';
import ContentEditable from 'react-contenteditable';

const TextEditor = () => {
  const [content, setContent] = useState('');

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSelection = (event) => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const newNode = document.createElement('span');
    if (event.target.name === 'bold') {
      newNode.style.fontWeight = 'bold';
    } else if (event.target.name === 'italic') {
      newNode.style.fontStyle = 'italic';
    }
    range.surroundContents(newNode);
  };

  return (
    <div className='container mt-4'>
      <div className='row justify-content-center'>
        <div className='col-md-8'>
          <div className='card'>
            <div className='card-body'>
              <div className='btn-group mb-2'>
                <button
                  className='btn btn-primary'
                  name='bold'
                  onClick={handleSelection}
                >
                  Bold
                </button>
                <button
                  className='btn btn-primary'
                  name='italic'
                  onClick={handleSelection}
                >
                  Italic
                </button>
              </div>
              <ContentEditable
                className='form-control'
                html={content}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
