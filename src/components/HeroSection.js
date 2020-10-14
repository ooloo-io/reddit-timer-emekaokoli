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
        <Header>
          <Hero>No reactions to your reddit posts?</Hero>
          <H3>
            Great timing, great results! Find the best time to post on your
            subreddit.
          </H3>
        </Header>
        <Main>
          <SearchContainer>
            <Search to="/subredditform/javascript" type="button">
              <Span> show me the best time</Span>
            </Search>
          </SearchContainer>
          <CTAContainer>
            <CTA to="/subredditform/javascript">/r/javascript</CTA>
          </CTAContainer>
          <Link to="/subredditform/javascript">
            <Table alt={Table} />
          </Link>
        </Main>
      </Container>
    </>
  );
}
