import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="title">Todo App</div>
      <div className="form">
        <div className="form__field">
          <input type="text" />
          <input type="button" value="ADD" />
        </div>
      </div>
      <div className="list">
        <div className="list-item">
          <div className="item-checkbox">
            <input type="checkbox" name="" id="" />
          </div>
          <div className="item-text">Learning React</div>
          <div className="item-delete">
            <input type="button" value="Delete" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
