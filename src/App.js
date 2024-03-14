import React, { Component } from 'react';
import './App.css';

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
      notes: { text: 'hello' },
    };
    this.setSearchBox = this.setSearchBox.bind(this);
    this.setAddDialogue = this.setAddDialogue.bind(this);
    this.setIsEdit = this.setIsEdit.bind(this);
  }
  setSearchBox(e) {
    this.setState({ searchText: e.target.value });
  }
  setAddDialogue(e) {
    this.setState({ addDialogue: !this.state.addDialogue });
  }
  setIsEdit(e) {
    this.setState({ isEdit: e.target.id === 'cardTitle' ? true : false });
    this.setAddDialogue(e);
  }
  render() {
    return (
      <div className='App'>
        {this.state.addDialogue && (
          <div>
            <div
              className='dialogBackground'
              onClick={this.setAddDialogue}
            ></div>
            <div className='dialog'>
              <h2 className='dialogHead'>
                {this.state.isEdit ? 'Edit' : 'Add'} a Note
              </h2>
              <div className='dialogBody'>
                <textarea className='dialogText'>Hello...</textarea>
                <div className='dialogFooter'>
                  <button onClick={this.setAddDialogue}>Save</button>
                </div>
              </div>
            </div>
          </div>
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
          <div className='card'>
            <div className='cardHead'>
              <h3 id='cardTitle' onClick={this.setIsEdit}>
                Title
              </h3>
              <input type='button' value='X' />
            </div>
            <div className='cardBody'>
              <textarea className='cardText' disabled>
                Hello...
              </textarea>
            </div>
          </div>
        </div>
        <button
          id='addButton'
          className={classNames(
            'addButton',
            this.state.addDialogue
              ? 'addButtonRotate'
              : 'addButtonRotateReverse'
          )}
          onClick={this.setIsEdit}
        >
          <h1>+</h1>
        </button>
      </div>
    );
  }
}

export default App;
