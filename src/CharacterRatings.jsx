import React from 'react';
import './character-ratings.css';
import { characters } from './fma-data';

function CharacterRatings() {
   const sortedCharacters = [...characters].sort((a, b) => b.votes - a.votes).slice(0, 5);

   return (
      <section id="character-ratings">
         <h4>Top Characters</h4>
         <table>
            <thead>
               <tr id="table-title">
                  <th>Character</th>
                  <th>Skillset</th>
                  <th>Votes</th>
               </tr>
            </thead>
            <tbody>
               {sortedCharacters.map((character, index) => (
                  <tr key={`${character.id}-${index}`} className={index % 2 === 0 ? 'dark' : 'light'}>
                     <td>{character.name}</td>
                     <td>{character.skillset}</td>
                     <td>{character.votes}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </section>
   );
}

export default CharacterRatings;
