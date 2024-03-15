import React, { Component } from 'react';
import './App.css';
import Dialog from './dialog';

function classNames(...args) {
  return args.filter(Boolean).join(' ');
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      addDialogue: false,
      isEdit: false,
      count: 0,
      tempText: '',
      notes: [],
    };
    this.setSearchBox = this.setSearchBox.bind(this);
    this.setIsEdit = this.setIsEdit.bind(this, String);
    this.addItems = this.addItems.bind(this, String);
    this.setAddDialogue = this.setAddDialogue.bind(this);
  }
  setSearchBox(e) {
    this.setState({ searchText: e.target.value });
  }
  setAddDialogue(e) {
    this.setState({ addDialogue: !this.state.addDialogue });
  }
  setIsEdit(notUsefull, e, element) {
    this.setState({ tempText: element });
    this.setState({ isEdit: e.target.id === 'cardTitle' ? true : false });
    this.setAddDialogue(e);
  }
  addItems(e, element) {
    if (!this.state.isEdit) {
      this.setState({
        notes: [...this.state.notes, { id: this.state.count, text: element }],
      });
      this.setState({ count: this.state.count + 1 });
    }
    this.setAddDialogue(e);
  }
  render() {
    return (
      <div className='App'>
        {this.state.addDialogue && (
          <Dialog
            edit={this.state.isEdit}
            element={this.state.tempText}
            addItems={this.addItems}
          />
        )}
        <div className='heading'>
          <span>LOGO</span>
          <input
            type='search'
            name='searchBox'
            id='searchBox'
            onChange={this.setSearchBox}
            value={this.state.searchText}
          />
          <input type='button' value='search' />
        </div>
        <div className='body'>
          {this.state.notes.map((note, index) => {
            return (
              <div className='card' key={index}>
                <div className='cardHead'>
                  <h3
                    id='cardTitle'
                    onClick={(event) => this.setIsEdit(event, note.text)}
                  >
                    Note {note.id}
                  </h3>
                  <input type='button' value='X' />
                </div>
                <div className='cardBody'>
                  <textarea className='cardText' disabled>
                    {note.text}
                  </textarea>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className={classNames(
            'addButton',
            this.state.addDialogue
              ? 'addButtonRotate'
              : 'addButtonRotateReverse'
          )}
          id='addButton'
          onClick={(event) => this.setIsEdit(event, '')}
        >
          <h1>+</h1>
        </button>
      </div>
    );
  }
}

export default App;
