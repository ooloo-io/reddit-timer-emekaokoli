import React, { useState } from 'react';
import './search.css';

export default function SearchScreen() {
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setInput(() => ({ [name]: value }));
    e.preventDefault();
  };
  return (
    <>
      <div className="app">
        <input
          type="text"
          placeholder="Javascript"
          // value={input}
          onChange={handleInput}
          name="search"
        />
      </div>
    </>
  );
}
