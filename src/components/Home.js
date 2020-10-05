import React from 'react';
import { ThemeProvider } from 'styled-components';
import HeroSection from './HeroSection';
import { theme } from './theme.style';

export default function HomeScreen() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <HeroSection />
      </ThemeProvider>
    </>
  );
}
