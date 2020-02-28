import React from "react";

export default function CharacterCard({ character }) {
   return (
      <div className="card">
         <h1>{character.name}</h1>
         <h2>{character.species}</h2>
         <h2>{character.origin.name}</h2>
      </div>
   );
}
