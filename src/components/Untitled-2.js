  useEffect(() => {
    async function fetchData() {
      const axiosGet = async (sreddit, after) => axios.get(
        `https://www.reddit.com/r/${sreddit}/top.json?t=year&limit=100${
          after ? `&after=${after}` : ''
        }`,
      );
      const fetchAllResults = async () => {
        setLoading(() => true);
        let dataStore = [];
        let after = null;

        for (let i = 0; i < 5; i += 1) {
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