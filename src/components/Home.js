import React from 'react';
import styled from 'styled-components';

export default function HomeScreen() {
  return (
    <>
      <Div>
        <Section id="about">About</Section>
        <Section id="How-it-works">How it works</Section>
      </Div>
    </>
  );
}

const Div = styled.div`
height: 100vh;
`;
const Section = styled.section``;
