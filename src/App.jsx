import React from 'react';
import Header from './components/header/Header';
import CharacterCards from './components/character-cards/CharacterCards';
import CharacterRatings from './CharacterRatings';
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
