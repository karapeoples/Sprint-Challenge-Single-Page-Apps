import React from "react";
import style from 'styled-components';

const Div = style.div `
background: darkseagreen;
color: firebrick;
fontWeigh: 900;
display: flex;
margin: 5%;
border-radius: 15%;
padding: 2%;
font-family: 'Girassol', cursive;
border: 5px double white;
font-size: 25px;
`
const Img= style.img`
border-radius: 50%;
width: 100%;
`


const Div2 = style.div`
margin: 0 auto;
width: 50%;

border-radius: 100%;
`

const Div3 = style.div`
margin: 15% auto;
width: 50%;
text-align: center;


`


export default function CharacterCard({url, names, gender, local, species, status}) {

  return (
    <Div>
      <Div2>
        <Img src={url} alt='character'/>
      </Div2>
      <Div3>
        <h1>{names}-{status}</h1>
      
        <li>Gender: {gender}</li>
        <li>Area: {local}</li>
        <li>Species: {species}</li>
      
      </Div3>
    </Div>
  );
}
