import React from "react";

export default function CharacterCard({ character }) {
   return (
      <div className="card">
         <h1>Name: {character.name}</h1>
         <h2>Species: {character.species}</h2>
         <h2>Home Planet: {character.origin.name}</h2>
         <h3>Status: {character.status}</h3>
      </div>
   );
}
