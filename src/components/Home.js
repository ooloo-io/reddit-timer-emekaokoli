import React from 'react';
import styled from 'styled-components';

export default function HomeScreen() {
  return (
    <>
      <Div>
        home page
        <Section>
          <a href="#about">About</a>
        </Section>
        <Section>
          <a href="#how-it-works">How it works</a>
        </Section>
      </Div>
    </>
  );
}

const Div = styled.div`
height: 100vh;
`;
const Section = styled.section``;
