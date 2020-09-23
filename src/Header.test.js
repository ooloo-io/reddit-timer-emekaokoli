// import { renderer } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import * as renderer from 'react-test-renderer';
import Header from './components/Header';

// test('render header component', () => {
//   expect(Footer()).toBeDefined();
// });

// test('there is a new flavor idea', () => {
//   expect(fetchNewFlavorIdea()).toBeDefined();
// });

// test('renders header component', () => {
//   const { getByText } = render(<Header />);
//   const linkElement = getByText(/how-it-works/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('Checks header component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Header />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
