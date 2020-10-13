/* eslint-disable comma-dangle */
import {
  cleanup, fireEvent, render, screen
} from '@testing-library/react';
// import { renderer } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import InfoSection from './components/InfoSection';
import { theme } from './components/theme.style';

afterEach(cleanup);
test('"About" contains about ', () => {
  render(
    <ThemeProvider theme={theme}>
      <Router>
        <InfoSection />
      </Router>
    </ThemeProvider>,
  );

  fireEvent.click(screen.getByRole('heading', { name: /About/i }));
  expect(screen.getByRole('heading', { name: /About/i })).toBeInTheDocument();
});
test('"how it works" contains how it works ', () => {
  render(
    <ThemeProvider theme={theme}>
      <Router>
        <InfoSection />
      </Router>
    </ThemeProvider>,
  );

  fireEvent.click(screen.getByRole('heading', { name: /how it works/i }));
  expect(
    screen.getByRole('heading', { name: /how it works/i }),
  ).toBeInTheDocument();
});
test('"about link" points to a new page', () => {
  render(
    <ThemeProvider theme={theme}>
      <Router>
        <InfoSection />
      </Router>
    </ThemeProvider>,
  );

  fireEvent.click(screen.getByRole('link', { name: 'ooloo.io' }));

  expect(
    screen.getByRole('link', { name: 'ooloo.io' }),
  ).toBeInTheDocument();
});

test('"about employers link" points to a new page ', () => {
  render(
    <ThemeProvider theme={theme}>
      <Router>
        <InfoSection />
      </Router>
    </ThemeProvider>,
  );

  fireEvent.click(screen.getByRole('link', { name: /here/i }));

  expect(
    screen.getByRole('link', { name: /here/i }),
  ).toBeInTheDocument();
});
