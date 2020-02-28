import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';
import CharacterCard from "./CharacterCard";

const List = styled.section`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: space-between;
`

export default function CharacterList(props) {
   const [characters, setCharacters] = useState([]);

   const searchFilter = props.searchFilter || "";
   const page = props.page || 1;

   useEffect(() => {
      axios
         .get(
            `https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?page=${page}`
         )
         .then(function(response) {
            const characters = response.data.results;
            setCharacters(characters);
            console.log('Got character data.');
         })
         .catch(function(error) {
            // handle error
            console.log(error);
         })
   }, [page]);

   console.log(characters);
   const characterCards = characters
      .filter(character => character.name.toLowerCase().includes(searchFilter.toLowerCase()))
      .map(character => <CharacterCard character={character} />);

   return <List>{characterCards}</List>;
}
