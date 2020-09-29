import React from 'react';
import styled from 'styled-components';
import Table from './images/table.svg';

export default function HeroSection() {
  return (
    <>
      <Container>
        <Wrap>
          <Header id="about">
            <Hero>No reactions to your reddit posts?</Hero>
            <Greatthings>
              Great timing, great results! Find the best time to post on your
              subreddit.
            </Greatthings>
          </Header>
          <Main>
            <SearchContainer>
              <Search>show me the best time</Search>
            </SearchContainer>
            <CTAContainer>
              <CTA>/r/javascript</CTA>
            </CTAContainer>
            <ImgContainer>
              <Img src={Table} alt={Table} />
            </ImgContainer>
            <Section id="how-it-works">
              <H1>How it works</H1>
              <Ul>
                <Li>
                  We find the 500 top posts from the past year for a subreddit.
                </Li>
                <Li>
                  The data is visualized in a heatmap grouped by weekday and
                  hour of the day.
                </Li>
                <Li>See immediately when to submit your reddit post.</Li>
              </Ul>
            </Section>
            <Section id="about">
              <H1>About</H1>
              <Paragraph>
                This app was created during a course on ooloo.io with the goal
                to implement a pixel-perfect real-world application with
                professional workflows and tools like Kanban, ClickUp, Zeplin,
                GitHub, pull requests and code reviews. Click here for more
                information.
              </Paragraph>
            </Section>
          </Main>
        </Wrap>
      </Container>
    </>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.main`
  height: 100%;
  width: auto;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
`;
const Wrap = styled.div`
  width: 110vmin;
  min-height: 100vh;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
`;
const Section = styled.div`
  text-align: center;
  margin: 3rem 0 7rem 0;
`;
const Header = styled.header``;
const SearchContainer = styled.div`
  margin: 2rem;
  padding: 1rem;
  text-align: center;
`;
const CTAContainer = styled.div`
  text-align: center;
  margin: 2rem;
`;
const Hero = styled.h1`
  min-width: 616px;
  height: 46px;
  font-family: Bitter;
  font-size: 38px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
  margin: 1rem;
`;
const H1 = styled.h4`
  font-family: Bitter;
  font-size: 1.5rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  margin: 0.5rem;
`;
const Greatthings = styled.h3`
  font-family: Montserrat;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: var(--gray-base);
`;
const Ul = styled.ul``;
const Li = styled.li`
  text-align: left;
  line-height: 1.5;
  font-size: 1rem;
`;
const Paragraph = styled.p`
  font-family: Montserrat;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: var(--gray-base);
  text-align: left;
  margin: 1rem 0 1rem 0;
  padding: 1rem;
`;
const Search = styled.button`
width: 217px;
  height: 36px;
  border-radius: 4px;
  background-color: var(--primary);
}
//   width: 187px;
//   height: 70px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.64;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  background-color: #e1b36d;
  text-transform:uppercase;
  border:0;
  cursor: pointer;
 
`;
const CTA = styled.button`
  width: 107px;
  height: 29px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: var(--gray-base);
  border: 0;
  cursor: pointer;
`;
const Img = styled.img`
  width: 831px;
  height: 320px;
  // min-width: auto;
  // min-height: auto;
  object-fit: contain;
  margin: 0 10px 0 10px;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
`;
const ImgContainer = styled.div`
  max-height: auto;
  width: auto;
`;
