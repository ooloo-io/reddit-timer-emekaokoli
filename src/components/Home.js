import React from 'react';
import { AppContainer } from '../App.style';
import HeroSection from './HeroSection';
import InfoSection from './InfoSection';

export default function HomeScreen() {
  return (
    <>
      <AppContainer>
        <HeroSection />
        <InfoSection />
      </AppContainer>
    </>
  );
}
