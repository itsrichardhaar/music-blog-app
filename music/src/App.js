import React, { Component } from 'react';
import './App.css';
import Form from "./components/Login Form/Form";
import PlaylistCard from './components/Playlist Card/playlist';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
        <h1>HAB?TS</h1>

        <Form />

        </header>

        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        
      </div>
    );
  }
}

export default App;
