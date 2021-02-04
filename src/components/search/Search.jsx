import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ search, onChange }) => (
  <div>
    <label htmlFor="search"> Search </label>
    <input id="search"
      name="search"
      type="text"
      value={search}
      onChange={onChange} />
  </div>
);

Search.propTypes = {
  search: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Search;
