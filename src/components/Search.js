import React, { useState } from 'react';
import { Container, Main } from './common/infosection/infoSection.style';
import { Input } from './common/SubRedditForm/SubRedditForm.style';

export default function SearchScreen() {
  const [input, setInput] = useState('');
  const handleInput = (e) => {
    setInput(e.target.value);
    e.preventDefault();
    // setInput('');
  };
  return (
    <Container>
      <Main>
        <Input
          type="text"
          placeholder="Javascript"
          name="search"
          onChange={handleInput}
          value={input}
        />
      </Main>
    </Container>
  );
}
