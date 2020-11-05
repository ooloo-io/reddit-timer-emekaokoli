axios
          .get(
            `https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=100`,
          )
          .then((response) => {
            setFullData(response.data.data.children);
            // console.log(fullData);
            flag += postCount + response.data.data.children.length;
            console.log('flag/postcount', flag, postCount);
            setPostCount(flag);
            axios
              .get(
                `//www.reddit.com/r/${subreddit}/top.json?t=year&limit=100&after=${response.after}`,
              )
              .then((response) => {
                setFullData(response.data.data.children);
                // fullData.push(response.data.data.children);
                console.log(fullData);
                flag += postCount + response.data.data.children.length;
                console.log('flag/postcount', flag, postCount);
                setPostCount(flag);
                axios
                  .get(
                    `//www.reddit.com/r/${subreddit}/top.json?t=year&limit=100&after=${response.after}`,
                  )
                  .then((response) => {
                    setFullData(response.data.data.children);
                    console.log(fullData);
                    flag += postCount + response.data.data.children.length;
                    console.log('flag/postcount', flag, postCount);
                    setPostCount(flag);
                    axios
                      .get(
                        `//www.reddit.com/r/${subreddit}/top.json?t=year&limit=100&after=${response.after}`,
                      )
                      .then((response) => {
                        setFullData(...response.data.data.children);
                        console.log(fullData);
                        flag += postCount + response.data.data.children.length;
                        console.log('flag/postcount', flag, postCount);
                        setPostCount(flag);
                        axios
                          .get(
                            `//www.reddit.com/r/${subreddit}/top.json?t=year&limit=100&after=${response.after}`,
                          )
                          .then((response) => {
                            setFullData([...response.data.data.children]);
                            console.log(fullData);
                            flag
                              += postCount + response.data.data.children.length;
                            console.log('flag/postcount', flag, postCount);
                            setPostCount(flag);

                            setDisplay(() => fullData);
                            setLoading(() => false);
                            return fullData;
                          });
                      });
                  });
              });
          });