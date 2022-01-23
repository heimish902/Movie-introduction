import ProTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ coverImg, title, summary, genres, id }) {
  return (
    <div className='movie'>
      <img src={coverImg} />
      <div class='text'>
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{summary}</p>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.ProTypes = {
  coverImg: ProTypes.string.isRequired,
  title: ProTypes.string.isRequired,
  summary: ProTypes.string.isRequired,
  genres: ProTypes.arrayOf(ProTypes.string).isRequired,
};
export default Movie;
