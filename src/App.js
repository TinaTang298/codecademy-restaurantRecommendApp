import React from 'react';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ravenous</h1>
      </header>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
