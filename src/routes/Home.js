import { useEffect, useState } from 'react';
import Movie from '../components/Movie';

function Home({ genre }) {
  //state
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // function
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?genre=${genre}&sort_by=download_count`)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  // useEffect
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading..</h1>
      ) : (
        <div className={`${genre} genre`}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
