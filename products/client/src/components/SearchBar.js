import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './styles/searchbar.css';

const SearchBar = ({handleSearch}) => {
  
  const handleSubmit = () => {
    // Fetch the current value of the search input and pass it to handleSearch
    const currentQuery = document.querySelector('.search-input').value;
    handleSearch(currentQuery); // Call the handleSearch function with the current query
  };

  return (
    <div className="search-bar-container">
      <h1 className="search-bar-title">Search Bar</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
        />
        <button className="search-button" onClick={handleSubmit}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
