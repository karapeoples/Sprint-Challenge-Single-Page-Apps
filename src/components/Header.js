import React from "react";
import {Route, Link} from 'react-router-dom';
import WelcomePage from './WelcomePage';
import CharacterList from './CharacterList';
import SearchForm from "./SearchForm";
import style from 'styled-components';

const Div = style.div `
font-family: 'Girassol', cursive;
background: darkseagreen;
color: firebrick;
`
const Button = style.button`
background: firebrick;
color: white;
font-family: 'Girassol', cursive;
font-size: 25px;
margin: .5%;
border-radius: 5px;
border 5px groove white;
cursor: url(http://ani.cursors-4u.net/cursors/cur-13/cur1159.png), auto;

`
const Nav = style.nav`
margin-left: 32%;
`
export default function Header() {
  return (
    <Div>
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </header>
    
    <Nav>
          <Link to='/'><Button>Welcome</Button></Link>
          <Link to='/characters'><Button>Characters</Button></Link>
          <Link to ='/search'><Button>Search</Button></Link>
    </Nav>
<Route exact path='/' component={WelcomePage}></Route>
<Route exact path='/characters' component={CharacterList}></Route>
<Route exact path='/search' component={SearchForm}></Route>
   </Div> 
    
  );
}


