import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard'



 export default function CharacterList() {
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
},[]); 

  console.log(info)
      
  

  return (
    <div>
      <section className="character-list">
      {info.map(char => (
      <CharacterCard url={char.image}  names={char.name} gender={char.gender} local={char.location.name} species={char.species} status={char.status}/>
      ))};
      </section>
    </div>
  );
}


	