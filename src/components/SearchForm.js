import React, {useState, useEffect} from "react";
import CharacterCard from './CharacterCard';
import axios from 'axios';
import style from 'styled-components';

const Label = style.label`
font-family: 'Girassol', cursive;
font-size: 25px;
`
const Form = style.form`
margin: 5%;
margin-left: 40%;


`
export default function SearchForm() {

  const [characters, setCharacter] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(characters);
  const handleChange = event => {
      setSearchTerm(event.target.value);
    };

useEffect(()=> {
    axios
    //API Goes in Quotes Behind Get
    .get('https://rickandmortyapi.com/api/character/')
    .then(data => {
    setCharacter(data.data.results);
})
.catch(error => {console.log('None for You', error);
});
  const results = characters.filter(character => {
  return character.name.toLowerCase().includes(searchTerm.toLowerCase());
});
setSearchResults(results);

}, [searchTerm]);


  
  return (
    <section className="search-form">
  <Form>
  <Label htmlFor="name">Search: </Label>
        <input
          id="name"
          type="text"
          name="search"
          placeholder="Search..."
          onChange={handleChange}
          value={searchTerm}
        />
      </Form>
      {searchResults.map(char => (
      <CharacterCard url={char.image}  names={char.name} gender={char.gender} local={char.location.name} species={char.species} status={char.status}/>
      ))}
    </section>
  );
}
    
