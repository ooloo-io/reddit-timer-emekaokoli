import { cleanup, render } from '@testing-library/react';
// import { renderer } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';

afterEach(cleanup);
it('containts search link', async () => {
  const { getByTestId } = render(
    <ThemeProvider>
      <Router>
        <Header />
      </Router>
    </ThemeProvider>,
  );
  expect(getByTestId('search')).toHaveTextContent('Search');
});
it('containts how it works in the link', async () => {
  const { getByTestId } = render(
    <ThemeProvider>
      <Router>
        <Header />
      </Router>
    </ThemeProvider>,
  );
  expect(getByTestId('howitworks')).toHaveTextContent('How it works');
});
it('containts about link', async () => {
  const { getByTestId } = render(
    <ThemeProvider>
      <Router>
        <Header />
      </Router>
    </ThemeProvider>,
  );
  expect(getByTestId('about')).toHaveTextContent('About');
});
// describe('Checks header component', () => {
//   it('renders correctly', () => {
//     const tree = renderer
//       .create(
//         <Router>
//           <Header />
//         </Router>,
//       )
//       .toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
