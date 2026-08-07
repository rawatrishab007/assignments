import React, { useState, useEffect } from 'react';
const List = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);
const handleSearch = () => {
    fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => setResult(data.products));
  };
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setResult(data.products));
  }, []);
  return (
    <div>
      <input  placeholder="Enter your search here" type="text" value={query} onChange={(e) => setQuery(e.target.value)}/>
      <button onClick={handleSearch}>Search</button>
      <ul>
        {result.map((item) => (
          <li key={item.id} >
            <img src={item.thumbnail} alt={item.title}/>
            {item.id}
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;