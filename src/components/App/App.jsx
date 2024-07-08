import React from 'react';
import Header from '../header/Header';
import CharacterCards from '../character-cards/CharacterCards';
import CharacterRatings from '../character-ratings/CharacterRatings';
import './App.css';



function App() {
  return (
    <div className="App">
      <Header />
      <CharacterRatings />
      <CharacterCards />
    </div>
  );
}

export default App;
