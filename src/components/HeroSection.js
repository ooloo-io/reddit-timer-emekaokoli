import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  CTA,
  CTAContainer,
  H3,
  H4,
  Header,
  Hero,
  Li,
  Main,
  Paragraph,
  Search,
  SearchContainer,
  Section,
  Span,
  // eslint-disable-next-line comma-dangle
  Table,

  // eslint-disable-next-line comma-dangle
  Ul
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
          <Section id="how-it-works">
            <H4>How it works</H4>
            <Ul>
              <Li>
                We find the 500 top posts from the past year for a subreddit.
              </Li>
              <Li>
                The data is visualized in a heatmap grouped by weekday and hour
                of the day.
              </Li>
              <Li>See immediately when to submit your reddit post.</Li>
            </Ul>
          </Section>
          <Section id="about">
            <H4>About</H4>
            <Paragraph>
              This app was created during a course on ooloo.io with the goal to
              implement a pixel-perfect real-world application with professional
              workflows and tools like Kanban, ClickUp, Zeplin, GitHub, pull
              requests and code reviews. Click here for more information.
            </Paragraph>
          </Section>
        </Main>
      </Container>
    </>
  );
}
