import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard'

 export function CharacterList() {
  // TODO: Add useState to track data from useEffect

  	const [info, setInfo]=useState([]);
  useEffect(()=> {
      axios
      //API Goes in Quotes Behind Get
      .get('https://rickandmortyapi.com/api/character/')
      .then(data => {
      console.log('API INFO HERE', data.data.results);
      setInfo(data.data.results);
  })
  .catch(error => {console.log('None for You', error);
  });
  }, []);
  console.log(info)

  return (
    <section className="character-list">
      {info.map(char => (
      <CharacterCard url={char.image}  names={char.name} gender={char.gender} local={char.location.name} species={char.species} status={char.status}/>
      ))}
    </section>
  );
}

// export const SearchForm = (info) =>{
    
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState(info);

//   useEffect(() => {
//     const results = info.filter(character => {
//     return character.toLowerCase().includes(searchTerm.toLowerCase());
//   });
//   setSearchResults(results);
// }, [searchTerm, info]);

// const handleChange = event => {
//   setSearchTerm(event.target.value);
// };
// return(
// <form>
// <label htmlFor="name">Search:</label>
//       <input
//         id="name"
//         type="text"
//         name="textfield"
//         placeholder="Search"
//         onChange={handleChange}
//         value={searchTerm}
//       />
//     </form>
  
// );
// }

// export default CharacterList;