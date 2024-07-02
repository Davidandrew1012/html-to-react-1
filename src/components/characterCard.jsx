import React from "react"

export const CharacterCard = ({ character }) => {

   return (
      <div key={character.name} className="card">
         <div className="card-titles">
            <h3>{character.name}</h3>
            {character.nickName && <h4>{character.nickName}</h4>}
         </div>
         <img src={character.imageUrl} alt={character.name} />
         <p>{character.background}</p>
      </div>
   )
}

export default CharacterCard;