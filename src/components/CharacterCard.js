import React from "react";
import styled from "styled-components";

const Card = styled.div`
   width: 32%;
   padding: 20px 20px;
   border-radius: 10px;

   margin: 20px 0;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
   transition: 0.3s;

   text-align: center;

   &:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
   }

   h1 {
      font-size: 2rem;
      margin: 10px;
   }

   h2 {
      font-size: 1rem;
      margin: 5px;
      color: darkgrey;
   }
`;

const AliveOrOther = styled.h2`
color: ${props => console.log()}
`

const CharacterImg = styled.img`
   border-radius: 50%;
   border: 2px solid black;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

   width: 80%;
`

export default function CharacterCard({ character }) {
   return (
      <Card>
         <CharacterImg src={character.image} alt="Image of the rick and morty character"/>
         <h1>{character.name}</h1>
         <h2>Species: {character.species}</h2>
         <h2>Home Planet: {character.origin.name}</h2>
         <h2 status={character.status}>Status: {character.status}</h2>
      </Card>
   );
}
