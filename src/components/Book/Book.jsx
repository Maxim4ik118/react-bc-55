import PropTypes from 'prop-types';

import { StyledBook, StyledButton } from './Book.styled';

const Book = ({
  title,
  author,
  year,
  genre,
  url,
  favourite = false,
  className = '',
}) => {
  return (
    <StyledBook 
      className={className} 
      favourite={favourite}
    >
      {/* <Button className="delete-btn">
        <b>Delete</b> &times;
      </Button> */}
      <StyledButton>
        <b>Delete</b> &times;
      </StyledButton>

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
  variant: PropTypes.string,
};

export default Book;
