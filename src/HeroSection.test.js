/* eslint-disable comma-dangle */
import {
  cleanup, fireEvent, render, screen
} from '@testing-library/react';
// import { renderer } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import HeroSection from './components/HeroSection';
import { theme } from './components/theme.style';

afterEach(cleanup);
test('"Heading" contains header tag', () => {
  render(
    <ThemeProvider theme={theme}>
      <Router>
        <HeroSection />
      </Router>
    </ThemeProvider>,
  );

  fireEvent.click(
    screen.getByRole('heading', { name: /No reactions to your reddit posts/i }),
  );
  expect(
    screen.getByRole('heading', { name: /No reactions to your reddit posts/i }),
  ).toBeInTheDocument();
});

test('"Header" contains h3 tag', () => {
  render(
    <ThemeProvider theme={theme}>
      <Router>
        <HeroSection />
      </Router>
    </ThemeProvider>,
  );

  fireEvent.click(screen.getByRole('heading', { name: /Great timing, great results! Find the best time to post on your subreddit/i }));
  expect(
    screen.getByRole('heading', {
      name: /Great timing, great results! Find the best time to post on your subreddit/i,
    }),
  ).toBeInTheDocument();
});
test('"Search" link points to the correct page', () => {
  render(
    <ThemeProvider theme={theme}>
      <Router>
        <HeroSection />
      </Router>
    </ThemeProvider>,
  );

  fireEvent.click(
    screen.getByRole('link', { name: /show me the best time/i }),
  );

  expect(
    screen.getByRole('link', { name: /show me the best time/i }),
  ).toBeInTheDocument();
});

test('"About" contains about ', () => {
  render(
    <ThemeProvider theme={theme}>
      <Router>
        <HeroSection />
      </Router>
    </ThemeProvider>,
  );

  fireEvent.click(screen.getByRole('heading', { name: /About/i }));
  expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument();
});
test('"how it works" contains how it works ', () => {
  render(
    <ThemeProvider theme={theme}>
      <Router>
        <HeroSection />
      </Router>
    </ThemeProvider>,
  );

  fireEvent.click(screen.getByRole('heading', { name: /how it works/i }));
  expect(
    screen.getByRole('heading', { name: /how it works/i }),
  ).toBeInTheDocument();
});
test('"/r/javascript" button contains javascript', () => {
  render(
    <ThemeProvider theme={theme}>
      <Router>
        <HeroSection />
      </Router>
    </ThemeProvider>,
  );

  fireEvent.click(screen.getByRole('button', { name: '/r/javascript' }));

  expect(
    screen.getByRole('button', { name: '/r/javascript' }),
  ).toBeInTheDocument();
});

// test('"Search link" link contains javascript', () => {
//   render(
//     <ThemeProvider theme={theme}>
//       <Router>
//         <HeroSection />
//       </Router>
//     </ThemeProvider>,
//   );

//   fireEvent.click(screen.getByRole('link', { name: 'table.svg"' }));
//   expect(
//     screen.getByRole('link', { name: 'table.svg"' }),
//   ).toBeInTheDocument();
// });
