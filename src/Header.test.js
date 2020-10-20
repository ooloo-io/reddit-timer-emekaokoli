import { cleanup, render } from '@testing-library/react';
// import { renderer } from '@testing-library/react';
import React from 'react';
import App from './App';

afterEach(cleanup);
it('has search link', async () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('search')).toHaveTextContent('Search');
});
it("it should have 'how it works' in the link", async () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('howitworks')).toHaveTextContent('How it works');
});
it("should hav 'about' link", async () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('about')).toHaveTextContent('About');
});
