import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          <li className="active">Best Match</li>
          <li>Highest Rated</li>
          <li>Most Reviewed</li>
        </ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" />
        <input placeholder="Where?" />
      </div>
      <div className="SearchBar-submit">
        <button>Let's Go</button>
      </div>
    </div>
  );
}

export default SearchBar;
