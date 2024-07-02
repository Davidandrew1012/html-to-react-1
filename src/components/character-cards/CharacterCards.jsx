import React from 'react';
import './character-cards.css';
import { characters } from '../../fma-data';
import { CharacterCard } from '../characterCard';


function CharacterCards() {

   return (
      <section id="character-cards">
         {characters.map((character, index) => (
            <CharacterCard key={`${character.id}-${index}`} character={character} />
         ))}
      </section>
   );
}

export default CharacterCards;
