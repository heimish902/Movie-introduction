import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  // style
  const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    padding: 0 20px;
    border-bottom: 1px solid #000;
    background-color: #000;
    h1 {
      margin: 0;
      height: 100%;
      line-height: 60px;

      a {
        text-decoration: none;
        color: red;
      }
    }
  `;

  const Nav = styled.nav`
    height: 100%;

    ul {
      height: 100%;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    li {
      list-style: none;
      padding: 0 20px;
    }

    a {
      display: block;
      width: 100%;
      height: 100%;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 600;
      color: #fff;
    }
  `;

  return (
    <Header>
      <h1 className='logo'>
        <Link to='/'>HEYFLEX</Link>
      </h1>
      <Nav>
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
      </Nav>
    </Header>
  );
}

export default Header;
