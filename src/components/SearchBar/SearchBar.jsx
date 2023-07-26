import React from 'react';

function SearchBar({ title, onFilter, searchValue }) {

  const handleInputChange = event => {
    onFilter(event.target.value);
  };
  return (
    <section>
      <h2>{title}</h2>
      <input
        onChange={handleInputChange}
        value={searchValue}
        type="text"
        name="search"
      />
    </section>
  );
}

export default SearchBar;

// SearchBar.propTypes = {
//   onFilter: PropTypes.func.isRequired,
//   searchValue: PropTypes.string.isRequired,
// };
