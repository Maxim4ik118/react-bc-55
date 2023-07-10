import PropTypes from 'prop-types';

import { getRandomHecColor } from 'helpers/getRandomHexColor';
import Button from 'components/Button/Button';

import { StyledBook } from './Book.styled';

const Book = ({
  id,
  title,
  author,
  year,
  genre,
  url,
  favourite = false,
  className = '',
  onRemoveBook,
}) => {
  const bgColor = "biedge";
  return (
    <StyledBook $bgColor={bgColor} className={className} $favourite={favourite}>
      <Button variant="secondary" onClick={() => onRemoveBook(id)}>
        <b>Delete</b> &times;
      </Button>

      <h2>
        Title: {title} {favourite ? '💖' : '🎧'}
      </h2>
      <h3>Author: {author}</h3>
      <p className="par1">year: {year}</p>
      <p className="par2">Genre: {genre}</p>
      <img className="bookImg" src={url} alt={title} />
    </StyledBook>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  url: PropTypes.string,
  favourite: PropTypes.bool,
  className: PropTypes.string,
  onRemoveBook: PropTypes.func.isRequired,
};

export default Book;
