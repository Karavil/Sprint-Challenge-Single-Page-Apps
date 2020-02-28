import React, { useState } from "react";
import styled from 'styled-components';

const SearchInput = styled.input`
   width: 100%;
   margin: 0;
   height: 3rem;
   font-size: 1.5rem;
   padding: 0.5rem 1rem;
`
export default function SearchForm(props) {
 
  return (
    <SearchInput placeholder="Filter characters..." onChange={(event) => props.setSearchFilter(event.target.value)}/>
  );
}
