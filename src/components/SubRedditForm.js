import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  AppContainer, AppMain, Button, H1,
  // eslint-disable-next-line comma-dangle
  Input
} from './common/SubRedditForm/SubRedditForm.style';

export default function SubRedditForm({ match }) {
  const { subreddit } = useParams();
  // const { subreddit } = match.params;
  const [input, setInput] = useState(() => subreddit);
  const history = useHistory();
  const handleInputChange = (e) => {
    e.persist();
    setInput(() => e.target.value);
  };

  const handleSubmit = (e) => {
    if (input === '') return;
    e.preventDefault();
    history.push(`/search/${input}`);
  };
  useEffect(() => {
    setInput(() => `${subreddit}`);
  }, [subreddit]);

  return (
    <AppContainer>
      <H1>Find the best time for a subreddit</H1>
      <AppMain>
        <form onSubmit={handleSubmit}>
          r/
          {' '}
          <Input
            type="text"
            name={input}
            onChange={handleInputChange}
            value={input}
          />
          <Button type="submit">Search</Button>
        </form>
      </AppMain>
    </AppContainer>
  );
}
