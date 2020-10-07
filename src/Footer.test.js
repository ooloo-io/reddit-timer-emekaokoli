/* eslint-disable comma-dangle */
import {
  cleanup, fireEvent, render, screen
} from '@testing-library/react';
// import { renderer } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import { theme } from './components/theme.style';

afterEach(cleanup);
test('"Ooloo" link points to the correct page', () => {
  render(
    <ThemeProvider theme={theme}>
      <Router>
        <Footer />
      </Router>
    </ThemeProvider>,
  );

  fireEvent.click(screen.getByRole('link', { name: 'ooloo.io' }));

  expect(screen.getByRole('link', { name: 'ooloo.io' })).toBeInTheDocument();
});

test('"Terms & Privacy" link points to the correct page', () => {
  render(
    <ThemeProvider theme={theme}>
      <Router>
        <Footer />
      </Router>
    </ThemeProvider>,
  );

  fireEvent.click(screen.getByRole('link', { name: 'Terms & Privacy' }));

  expect(screen.getByRole('link', { name: 'Terms & Privacy' })).toBeInTheDocument();
});

test('"/" link points to the correct page', () => {
  render(
    <ThemeProvider theme={theme}>
      <Router>
        <Footer />
      </Router>
    </ThemeProvider>,
  );

  fireEvent.click(screen.getByRole('link', { name: 'elements-sign.svg' }));
  expect(screen.getByRole('link', { name: 'elements-sign.svg' })).toBeInTheDocument();
});
