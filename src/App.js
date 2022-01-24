import './style.scss';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header.js';
import Home from './routes/Home.js';
import Genre from './routes/Genre.js';
import Detail from './routes/Details.js';

function App() {
  // state
  const [genres, setGenres] = useState(['animation', 'sci-fi', 'romance']);

  // return
  return (
    <div>
      <Header />

      <Switch>
        {genres.map((genre, index) => {
          return (
            <Route path={`/movie/${genre}`}>
              <section>
                <div class='inner'>
                  <Genre key={index} genre={genre} />
                </div>
              </section>
            </Route>
          );
        })}

        <Route path='/movie/:id'>
          <Detail />
        </Route>

        <Route path='/'>
          <section>
            <Home />
          </section>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
