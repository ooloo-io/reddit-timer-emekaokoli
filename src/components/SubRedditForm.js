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
  const [fullData, setFullData] = useState(() => []);
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

  // load data area
  useEffect(() => {
    async function fetchData() {
      const axiosGet = async (sreddit, after) => axios.get(
        `https://www.reddit.com/r/${sreddit}/top.json?t=year&limit=100${
          after ? `&after=${after}` : ''
        }`,
      );
      const fetchAllResults = async () => {
        let dataStore = [];
        let after = null;

        for (let i = 0; i < 5; i += 1) {
          setLoading(() => true);
          // eslint-disable-next-line no-await-in-loop
          const results = await axiosGet(subreddit, after);

          console.log(results.data.data.children);

          dataStore = [...dataStore, ...results.data.data.children];
          after = results.data.after;
        }

        return dataStore;
      };

      try {
        fetchAllResults().then((f) => setFullData(() => f));

        setDisplay(() => fullData);
        setLoading(() => false);
      } catch (e) {
        console.error(`An error has occured ${e}`);
      }
      return fullData;
    }
    fetchData();
    // clean up after
    return () => {
      setLoading(() => false);
    };
  }, []);

  // const displayResult = display.map((el) => (
  //   <AppContainer key={el.data.id} as="article">
  //     <Media body>
  //       <Media heading left>{el.data.subreddit}</Media>
  //       {el.data.title}
  //       {el.data.selftext}
  //       {el.data.author_fullname}
  //     </Media>
  //   </AppContainer>
  // ));
  //
  console.log(`items in basket ${display.length}`);
  const displayResult = display.map((el, index) => {
    console.log(el.data.id);
    return (
      <div ket={el[index].data.data.children.data.id}>
        Total data:
        {'  '}
        {el.length === undefined
          ? el
          : `Record not found for the subreddit:  ${subreddit}`}
      </div>
    );
  });

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
        {display.length === 0 ? display.length : 'No data to display!'}
        {loading === false ? displayResult : <Loading />}
      </AppMain>
    </AppContainer>
  );
}
