import React, { useState } from 'react';
import { AppContainer, Input } from './common/search/Search.style';

export default function SearchScreen() {
  const [input, setInput] = useState('');
  const handleInput = (e) => {
    setInput(e.target.value);
    e.preventDefault();
    // setInput('');
  };
  return (
    <>
      <AppContainer>
        <Input
          type="text"
          placeholder="Javascript"
          name="search"
          onChange={handleInput}
          value={input}
        />
      </AppContainer>
    </>
  );
}
