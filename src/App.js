import React from 'react';
import PhotosScreen from './containers/photos'
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Photos List</h1>
      </header>
      <div className="App-content">
        <PhotosScreen/>
      </div>
    </div>
  );
}

export default App;
