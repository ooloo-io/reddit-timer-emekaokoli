import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  AppContainer, AppMain, Button, H1,
  // eslint-disable-next-line comma-dangle
  Input
} from './common/SubRedditForm/SubRedditForm.style';

export default function SubRedditForm({ match }) {
  // const { subreddit } = useParams();
  const s = match.params.subreddit;
  const [input, setInput] = useState(() => 'reactjs');
  const history = useHistory();
  console.log(s);
  const handleInputChange = (e) => {
    e.persist();
    setInput(() => e.target.value);
  };

  const handleSubmit = (e) => {
    if (input === '') return;
    e.preventDefault();
    history.push(`/search/${input}`);
    // setInput(() => `${reactjs}`);
    setInput('');
  };

  return (
    <AppContainer>
      <H1>Find the best time for a subreddit</H1>
      <AppMain>
        <form onSubmit={handleSubmit}>
          r/
          {' '}
          <Input
            type="text"
            // name={input}
            onChange={handleInputChange}
            value={input}
          />
          <Button type="submit" onClick={handleSubmit}>Search</Button>
        </form>
      </AppMain>
    </AppContainer>
  );
}
