import PropTypes from 'prop-types';

const Book = ({ title, author, year, genre, url, favourite = false }) => {
  return (
    <li>
      <h2>
        Title: {title} {favourite ? '💖' : '🎧'}
      </h2>
      <h3>Author: {author}</h3>
      <p>year: {year}</p>
      <p>Genre: {genre}</p>
      <img src={url} alt={title} />
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  url: PropTypes.string,
  favourite: PropTypes.bool,
};

export default Book;
