import React, {useState} from "react";
import Table from "./Table";
import Form from './Form';

function MyApp() {
  const [characters, setCharacters] = useState([]);
  
  function removeOneCharacter (index) {
    const updated = characters.filter((character, i) => {
        return i !== index
    });
  setCharacters(updated);
  }

  function updateList(person) {
    setCharacters([...characters, person]);
  }

  function fetchUsers() {
    const promise = fetch("Http://localhost:8000/users");
    return promise;
}

  return (
    <div className="container">
      <Table characterData={characters} 
              removeCharacter={removeOneCharacter}/>
      <Form handleSubmit={updateList} />
    </div>
  );
}

export default MyApp;