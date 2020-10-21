import React from 'react';
import {
  Container,
  H4,
  Li, Links,
  Main, Paragraph,
  Section,
  // eslint-disable-next-line comma-dangle
  Ul, WrapSection
} from './common/infosection/infoSection.style';

export default function InfoSection() {
  return (
    <>
      <Container>
        <Main>
          <WrapSection>
            <Section id="how-it-works">
              <H4>How it works</H4>
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
              <H4>About</H4>
              <Paragraph>
                This app was created during a course on
                {' '}
                <Links as="a" href="https://ooloo.io">
                  ooloo.io
                </Links>
                {' '}
                with the goal to implement a pixel-perfect real-world
                application with professional workflows and tools like Kanban,
                ClickUp, Zeplin, GitHub, pull requests and code reviews.
                <Links as="a" href="https://ooloo.io/employers">
                  Click here for more information.
                </Links>
              </Paragraph>
            </Section>
          </WrapSection>
        </Main>
      </Container>
    </>
  );
}
