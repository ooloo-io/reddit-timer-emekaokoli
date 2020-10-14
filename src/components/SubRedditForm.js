import React from 'react';
import {
  AppContainer, AppMain, Button, H1,
  // eslint-disable-next-line comma-dangle
  Input
} from './common/SubRedditForm/SubRedditForm.style';

export default function SubRedditForm() {
  const [input, setInput] = React.useState('javascript');
  const handleInput = (e) => {
    setInput(e.target.value);
    e.preventDefault();
    // setInput('');
  };
  return (
    <AppContainer>
      <H1>Find the best time for a subreddit</H1>
      <AppMain>
        r/
        {' '}
        <Input
          type="text"
          placeholder=""
          name="search"
          onChange={handleInput}
          value={input}
        />
        <Button>Search</Button>
      </AppMain>
    </AppContainer>
  );
}
