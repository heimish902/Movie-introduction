import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1 className='logo'>
        <Link to='/'>Heyflex</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to='/movie/animation'>Animation</Link>
          </li>
          <li>
            <Link to='/movie/sci-fi'>Science Fiction</Link>
          </li>
          <li>
            <Link to='/movie/romance'>Romance</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
