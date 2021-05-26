/* eslint-disable comma-dangle */
/* eslint-disable react/prop-types */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  AppContainer,
  AppMain,
  Button,
  ErrorMessage,
  H1,

  // eslint-disable-next-line comma-dangle
  Input
} from './common/SubRedditForm/SubRedditForm.style';
import Heatmap from './Heatmap';
import { Loading } from './Loading';

export default function SubRedditForm({ history, match }) {
  const MAX_PAGE_NUMBER = 500;
  const INIT_PAGE_NUMBER = 100;
  const { subreddit } = match.params;

  const [input, setInput] = useState(subreddit);
  const [loading, setLoading] = useState(false);
  const [postResult, setPostsResult] = useState([]);
  const [postError, setPostError] = useState(null);
  const [postPerDay, setPostPerDay] = useState([]);

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
      `https://www.reddit.com/r/${sreddit}/top.json?t=year&limit=${INIT_PAGE_NUMBER}${
        after ? `&after=${after}` : ''
      }`,
    );
  }

  async function groupPostsPerDayAndHour(posts) {
    const postsPerDay = Array(7)
      .fill()
      .map(() => Array(24)
        .fill()
        .map(() => []),);

    posts.forEach((post) => {
      const createdAtDate = new Date(post.data.created_utc * 1000);
      const dayOfWeek = createdAtDate.getDay();
      const hour = createdAtDate.getHours();

      postsPerDay[dayOfWeek][hour].push({
        createdAt: createdAtDate,
        title: post.data.title,
        url: `https://reddit.com${post.data.permalink}`,
        score: post.data.score,
        numComments: post.data.num_comments,
        author: post.data.author,
      });
    });

    return { postsPerDay };
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
          const posts = await axiosGet(subreddit, after);

          dataStore = [...dataStore, ...posts.data.data.children];
          after = posts.data.data.after;
        }
        const response = groupPostsPerDayAndHour(dataStore);
        setPostPerDay(response);
        return response;
      };
      try {
        const posts = await fetchAllResults();
        setPostsResult(() => posts.postsPerDay);
        setLoading(() => false);
      } catch (err) {
        setPostError(() => err.message);
      }
    }
    fetchData();
    // clean up after
    return () => {
      setLoading(() => false);
      fetchData();
    };
  }, [subreddit]);

  function ErrorMess() {
    return (
      <ErrorMessage>
        Oops,
        {' '}
        {postError}
      </ErrorMessage>
    );
  }
  const postData = postResult.map((post, i) => post[i][i]);
  // const postsPerDay = postPerDay.map((el, index) => el);
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
          <Button>Search</Button>
        </form>
        {'  '}

        {
          // eslint-disable-next-line no-nested-ternary
          // loading === false ? (
          //   <Heatmap postResult={postResult} />
          // ) : <Loading /> ? (
          //   postError
          // ) : (
          //   <ErrorMess /> : 'Error'
          // )
          (() => {
            if (postError) {
              return <ErrorMess />;
            }
            if (loading === false) {
              return <Heatmap postResult={postData} postsPerDay={postPerDay} />;
            }
            return <Loading />;
          })()
        }
      </AppMain>
    </AppContainer>
  );
}
