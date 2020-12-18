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
import Heatmap from './Heatmap';
import { Loading } from './Loading';

export default function SubRedditForm({ history, match }) {
  const { subreddit } = match.params;

  const [input, setInput] = useState(() => subreddit);
  const [loading, setLoading] = useState(() => false);
  const [display, setDisplay] = useState(() => []);

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
  }, [subreddit]);

  function axiosGet(sreddit, after) {
    return axios.get(
      `https://www.reddit.com/r/${sreddit}/top.json?t=year&limit=100${
        after ? `&after=${after}` : ''
      }`,
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

          dataStore = [...dataStore, ...results.data.data.children];
          after = results.data.data.after;
        }

        return dataStore;
      };
      try {
        const response = await fetchAllResults();
        setDisplay(() => response);
        setLoading(() => false);
      } catch (e) {
        // eslint-disable-next-line no-console
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        {'  '}
        {loading === false ? (
          <Heatmap display={display} />
        ) : (
          <Loading /> || 'Loading data... '
        )}
      </AppMain>
    </AppContainer>
  );
}
