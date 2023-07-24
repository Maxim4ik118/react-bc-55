import PropTypes from 'prop-types';

// import Button from 'components/Button/Button';

import { StyledBook } from './Book.styled';


const Book = ({
  id,
  title,
  author,
  url,
  description,
  favourite = false,
  className = '',
}) => {

  return (
    <StyledBook className={className} $favourite={favourite}>
      <h2>
        Title: {title} {favourite ? '💖' : '🎧'}
      </h2>
      <h3>Author: {author}</h3>
      {description && <p className="par1">Description: {description}</p>}
      <img className="bookImg" src={url} alt={title} />
    </StyledBook>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string,
  favourite: PropTypes.bool,
  className: PropTypes.string,
};

export default Book;
