import React, {useState} from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";
import SearchForm from "./components/SearchForm.js";

export default function App() {
   const [searchFilter, setSearchFilter] = useState("");
   return (
      <main>
         <Header />
         <SearchForm setSearchFilter={setSearchFilter}/>
         <CharacterList searchFilter={searchFilter} />
      </main>
   );
}
