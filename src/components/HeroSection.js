/* eslint-disable react/prop-types */
import React from 'react';
import {
  Link
} from 'react-router-dom';
import {
  Container,
  CTA,
  CTAContainer,
  H3,
  Header,
  Hero,
  Main,
  Search,
  SearchContainer,
  Span,
  SpanCTA,
  // eslint-disable-next-line comma-dangle
  Table
} from './common/heroSection/HeroSection.style';

export default function HeroSection(props, { match }) {
  // const { id } = props.match;
  // const { subred } = useParams();
  const { subreddit } = 'js';
  console.log('================hero====================');
  console.log(props);
  console.log(props.match);
  console.log('=================sub===================');
  return (
    <>
      <Container>
        <Header>
          <Hero>No reactions to your reddit posts?</Hero>
          <H3>
            Great timing, great results! Find the best time to post on your
            subreddit.
          </H3>
        </Header>
        <Main>
          <SearchContainer>
            <Search to="/search/javascript" type="button">
              <Span> show me the best time</Span>
            </Search>
          </SearchContainer>
          <CTAContainer>
            <CTA to={`/search/${subreddit}`} type="button">
              <SpanCTA type="button" role="button">
                r/javascript
              </SpanCTA>
            </CTA>
          </CTAContainer>
          <Link to="/search/javascript" role="link">
            <Table alt="image table" aria-label="image table" role="img" />
          </Link>
        </Main>
      </Container>
    </>
  );
}
