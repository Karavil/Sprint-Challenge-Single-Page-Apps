import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledWelcomePage = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   img {
      border-radius: 2px;
   }
`;

const StyledButton = styled.button`
   padding: 0.75rem 2rem;
   margin: 15px 0;
   border: none;
   background: black;
   color: white;
   border-radius: 15px;
   box-shadow: 5px 5px 10px;
   font-size: 1.2rem;

   transition: 0.5s;
   &:hover {
      cursor: pointer;
      background: grey;
   }
   
`

export default function WelcomePage() {
   return (
      <StyledWelcomePage>
         <h1>Welcome to the ultimate fan site!</h1>
         <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
         />
         <Link to="/characters"><StyledButton>
            View Rick & Morty Characters
         </StyledButton></Link>
      </StyledWelcomePage>
   );
}
