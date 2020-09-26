import React from 'react';
import styled from 'styled-components';

export default function SearchScreen() {
  return (
    <Wrapper>
      <Paragraph>
        • We find the 500 top posts from the past year for a subreddit.
      </Paragraph>
      <Paragraph>
        • The data is visualized in a heatmap grouped by weekday and hour of
        the. day
      </Paragraph>
      <Paragraph>• See immediately when to submit your reddit post.</Paragraph>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  // width: 70vmax;
  margin: 0 auto;
  text-align: left;
`;
const Paragraph = styled.p``;
