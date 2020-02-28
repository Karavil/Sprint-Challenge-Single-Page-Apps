import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList(props) {
   const [characters, setCharacters] = useState([]);
   const searchFilter = useState(props.searchFilter);
   const page = useState(props.page);

   useEffect(() => {
      axios
         .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?page=${page}`)
         .then(function(response) {
            // handle success
            console.log(response);
         })
         .catch(function(error) {
            // handle error
            console.log(error);
         })
         .then(function() {
            // always executed
         });
   }, [page]);

   return (
      <section className="character-list">
         {characters.filter().map(character => {
            return (
               <CharacterCard character={character}/>
            )
         })}
      </section>
   );
}
