import './character-cards.css';
import { characters } from './fma-data';

function CharacterCards() {
   return (
      <section id="character-cards">
         {characters.map((character, index) => (
            <div key={character.name} className="card">
               <div className="card-titles">
                  <h3>{character.name}</h3>
                  {character.nickName && <h4>{character.nickName}</h4>}
               </div>
               <img src={character.imageUrl} alt={character.name} />
               <p>{character.background}</p>
            </div>
         ))}
      </section>
   );
}

export default CharacterCards;
