import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import styled from 'styled-components';

function Wrap({ background, image, title, intro, genre, runtime, year }) {
  const Wrap = styled.div`
    width: 100vw;
    height: calc(100vh - 60px);
    padding-top: 50px;
    color: #fff;
    background-image: ${(props) => `url(${props.background})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;

    .bg {
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
      height: calc(100vh - 60px);
      background-color: rgba(0, 0, 0, 0.3);
    }
    .inner {
      position: relative;
      width: 1440px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }
    .text {
      width: 55%;
      margin-top: 50px;
    }
    h1 {
      margin-top: 0;
      font-size: 40px;
    }
    p {
      font-size: 1.2em;
      line-height: 1.5em;
    }
    img {
      width: 35%;
    }
    ul {
      margin: 0;
      padding: 0;
      display: flex;
      list-style: none;
    }
    li {
      margin-right: 20px;
    }
  `;

  return (
    <Wrap background={background}>
      <div class='bg'></div>
      <div className='inner'>
        <img src={image} />
        <div className='text'>
          <h1>{title}</h1>
          <p>{intro}</p>
          <p>
            {year} / {runtime}min
          </p>
          <ul>{genre && genre.map((g) => <li key={g}>{g}</li>)}</ul>
        </div>
      </div>
    </Wrap>
  );
}

export default Wrap;
