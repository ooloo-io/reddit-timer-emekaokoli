import React from 'react';
import styled from 'styled-components';

export default function HomeScreen() {
  return (
    <>
      <Div>
        home page
        <Section>
          <a href="#about">ABOUT</a>
        </Section>
      </Div>
    </>
  );
}

const Div = styled.div`
height: 100vh;
`;
const Section = styled.section``;
