import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
export default function App() {
  let getHits = null;
  const [results, setResults] = useState([]);
  const [userSearch, setUserSearch] = useState('react hooks');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const searchInputRef = useRef();
  useEffect(() => {
    getHits();
  }, [getHits]);

  getHits = async () => {
    setIsLoading(true);
    try {
      const request = await axios.get(
        `http://hn.algolia.com/api/v1/search?query=${userSearch}`
      );
      setResults(request.data.hits);
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  };

  const handleSearch = event => {
    event.preventDefault();
    getHits();
  };

  const handleClearSearch = () => {
    setUserSearch('');
    searchInputRef.current.focus();
  };
  return (
    <div className="container max-w-md mx-auto p-4 m-2 bg-purple-200 shadow-lg rounded">
      <img src="https://icon.now.sh/react/c0c" alt="React-Logo" className="float-right h-12" />
      <h1 className="text-grey-darkest font-thin">Tech News</h1>
      <form onSubmit={handleSearch} className="mb-2"> 
        <input
          value={userSearch}
          type='text'
          onChange={event => setUserSearch(event.target.value)}
          ref={searchInputRef}
          className="border p-1 rounded"
        />
        <button type='submit' className="bg-orange-400 rounded m-1 p-1">Search</button>
        <button type='button' onClick={handleClearSearch} className="bg-teal-400 text-white p-1 rounded">
          Clear
        </button>
      </form>
      {isLoading ? (
        <p className="font-bold text-orange-dark">Loading...</p>
      ) : (
        <ul className="leading-normal">
          {results.map(result => (
            <li key={result.objectID}>
              <a href={result.url} className="text-indigo-500 hover:text-indigo-800">{result.title}</a>
            </li>
          ))}
        </ul>
      )}
      {error && <p className="text-red-400 font-nold">{error.message}</p>}
    </div>
  );
}
