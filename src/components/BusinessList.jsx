import React from 'react';
import './BusinessList.css';
import Business from './Business';

function BusinessList() {
  return (
    <div className="BusinessList">
      <Business />
      <Business />
      <Business />
    </div>
  );
}

export default BusinessList;
