import React, {useState, useEffect} from "react";
import {Route, Link} from 'react-router-dom';
import WelcomePage from './WelcomePage';
import {CharacterList} from './CharacterList';







export default function Header() {
  return (
    <div>
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </header>
    
    <nav>
          <Link to='/welcome'>Welcome   </Link>
          <Link to='/characters'>Characters   </Link>
    </nav>
<Route exact path='/welcome' component={WelcomePage}></Route>
<Route exact path='/characters' component={CharacterList}></Route>
   </div> 
    
  );
}


