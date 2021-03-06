import React from 'react';
import './style.css';

import { Link } from 'react-router-dom';

function Nav({setSearchValueInput}) {

  return (
    <nav>
      <div className='A-Film'>A-Film</div>
      <div className='input'>
        <input type="text" placeholder='Search About Any Film ...' onChange={(e)=>{ 
          setSearchValueInput(e.target.value)} }/>
      </div>
      <div className='ul-nav'>
        <ul>
          <li>
            <Link to="/"> All</Link>
          </li>
          <li>
            <Link to='/favorite'> Favorite</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;




