import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  AppContainer, AppMain, Button, H1,
  // eslint-disable-next-line comma-dangle
  Input
} from './common/SubRedditForm/SubRedditForm.style';

export default function SubRedditForm() {
  const [input, setInput] = React.useState('javascript');
  const history = useHistory();

  const handleInputChange = (e) => {
    setInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    history.push(`/search/${input}`);
  };

  return (
    <AppContainer>
      <H1>Find the best time for a subreddit</H1>
      <AppMain>
        <form>
          r/
          {' '}
          <Input
            type="text"
            name={input}
            onChange={handleInputChange}
            value={input}
          />
          <Button type="submit" onClick={handleSubmit}>
            Search
          </Button>
        </form>
      </AppMain>
    </AppContainer>
  );
}
