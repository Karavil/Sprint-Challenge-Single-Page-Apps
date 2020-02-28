import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';

const HeroHeader = styled.h1`
   color: black;
   font-size: 3rem;
   
   a {
      color: black;
   }
`
export default function Header() {
  return (
    <header className="ui centered">
      <HeroHeader>
         <Link to="/">
            Rick &amp; Morty Fan Page
         </Link>
      </HeroHeader>
    </header>
  );
}
