import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NoteList from './components/NoteList';
import Note from './components/Note';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={NoteList} />
          <Route
            render={() => <h1>Please do not attempt to feed the animals.</h1>}
          />
        </Switch>
      </div>
    );
  }
}
// export default App;