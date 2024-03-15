import './App.css';
import React from 'react';

export default function Dialog(props) {
  //add a state to control the text of the textarea
  const [text, setText] = React.useState('');
  return (
    setText(props.edit ? props.element.target.textContent : ''),
    (
      <div>
        <div
          className='dialogBackground'
          onClick={() => props.setAddDialogue()}
        ></div>
        <div className='dialog'>
          <h2 className='dialogHead'>{props.edit ? 'view' : 'Add'} a Note</h2>
          <div className='dialogBody'>
            <textarea
              className='dialogText'
              value={text}
              onChange={(e) => setText(e.target.value)}
              disabled={props.edit ? true : false}
            />
            <div className='dialogFooter'>
              <button
                //onclick, call the addItems function and pass the text state as an argument
                onClick={() => {
                  props.addItems(text);
                }}
              >
                {props.edit ? 'Close' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
