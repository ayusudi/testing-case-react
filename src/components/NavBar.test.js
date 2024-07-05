import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBar from './NavBar';

test('renders the navbar with logo and search form', () => {
  const { getByTestId, getByPlaceholderText } = render(<NavBar search={() => { }} />);
  expect(getByTestId('logo-navbar')).toHaveTextContent('My Recipe');
  expect(getByTestId('form-search')).toBeInTheDocument();
  expect(getByPlaceholderText('Recipe Name')).toBeInTheDocument();
});

test('calls search function with input value on form submission', () => {
  const mockSearch = jest.fn();
  const { getByPlaceholderText, getByText } = render(<NavBar search={mockSearch} />);
  const input = getByPlaceholderText('Recipe Name');
  const button = getByText('Search');
  fireEvent.change(input, { target: { value: 'Pasta' } });
  expect(input.value).toBe('Pasta');
  fireEvent.click(button);
  expect(mockSearch).toHaveBeenCalledWith('Pasta');
  expect(input.value).toBe('');
});
