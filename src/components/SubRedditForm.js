/* eslint-disable comma-dangle */
/* eslint-disable react/prop-types */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  AppContainer,
  AppMain,
  Button,
  H1,
  // eslint-disable-next-line comma-dangle
  Input
} from './common/SubRedditForm/SubRedditForm.style';
import { Loading } from './Loading';

export default function SubRedditForm({ history, match }) {
  // const { subreddit } = useParams();
  // const history = useHistory();
  const { subreddit } = match.params;

  const [input, setInput] = useState(() => subreddit);
  const [loading, setLoading] = useState(() => false);
  const [display, setDisplay] = useState(() => []);
  // const [postCount, setPostCount] = useState(() => 0);
  // const [fullData, setFullData] = useState(() => []);
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
    // clean up after
    return () => {
      setInput(() => '');
    };
  }, [fullData, subreddit]);

  function axiosGet(sreddit, after) {
    return axios.get(
      `https://www.reddit.com/r/${sreddit}/top.json?t=year&limit=100${after ? `&after=${after}` : ''}`
    );
  }

  // load data area
  useEffect(() => {
    async function fetchData() {
      setLoading(() => true);
      const fetchAllResults = async () => {
        let after = null;
        let dataStore = [];
        for (let i = 0; i < 5; i += 1) {
          // eslint-disable-next-line no-await-in-loop
          const results = await axiosGet(subreddit, after);

          // console.log(results.data.data);
          // console.log(results.data.data.children);

          dataStore = [...dataStore, ...results.data.data.children];
          after = results.data.after;
        }

        return dataStore;
      };
      try {
        // fetchAllResults().then((data) => setFullData(() => data));
        const response = await fetchAllResults();
        console.log(response);
        // setFullData(response);
        setDisplay(() => response);
        setLoading(() => false);
      } catch (e) {
        console.error(`An error has occured ${e}`);
      }

      return display;
    }
    fetchData();
    // clean up after
    return () => {
      setLoading(() => false);
      fetchData();
    };
  }, []);
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
        Total posts:
        {'  '}
        {loading === false
          ? display.length
          : <Loading /> || 'No data to display! '}
      </AppMain>
    </AppContainer>
  );
}
