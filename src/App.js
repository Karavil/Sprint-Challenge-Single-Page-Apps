import React, { useState } from "react";
import {Route} from 'react-router-dom';
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";
import SearchForm from "./components/SearchForm.js";

export default function App() {
   const [searchFilter, setSearchFilter] = useState("");
   return (
      <main>
         <Route path="/">
            <Header />
         </Route>
         <Route exact path="/">
            <WelcomePage/>
         </Route>
         <Route path="/characters">
            <SearchForm setSearchFilter={setSearchFilter} />

            <CharacterList searchFilter={searchFilter} />
         </Route>
      </main>
   );
}
