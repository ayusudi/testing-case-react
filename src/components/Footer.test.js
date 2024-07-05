import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

test('renders the footer with correct text and links', () => {
  const { getByTestId } = render(<Footer />);

  // Check if the footer text is rendered
  expect(getByTestId('footer-text')).toHaveTextContent('© 2024 Company, Inc. All rights reserved.');

  // Check if the Facebook link is rendered and has correct href
  const facebookLink = getByTestId('link-facebook');
  expect(facebookLink).toBeInTheDocument();
  expect(facebookLink).toHaveAttribute('href', 'https://facebook.com');

  // Check if the X (formerly Twitter) link is rendered and has correct href
  const xLink = getByTestId('link-x');
  expect(xLink).toBeInTheDocument();
  expect(xLink).toHaveAttribute('href', 'https://x.com');

  // Check if the Instagram link is rendered and has correct href
  const instagramLink = getByTestId('link-instagram');
  expect(instagramLink).toBeInTheDocument();
  expect(instagramLink).toHaveAttribute('href', 'https://instagram.com/');
});
