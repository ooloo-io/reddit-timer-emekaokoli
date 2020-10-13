import React from 'react';
import { Link } from 'react-router-dom';
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
  // eslint-disable-next-line comma-dangle
  Table
} from './common/heroSection/HeroSection.style';

export default function HeroSection() {
  return (
    <>
      <Container>
        <Header id="about">
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
            <CTA>/r/javascript</CTA>
          </CTAContainer>
          <Link to="/search/javascript">
            <Table alt={Table} />
          </Link>
        </Main>
      </Container>
    </>
  );
}
