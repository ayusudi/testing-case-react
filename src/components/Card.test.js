import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';

const el = {
  image: 'https://via.placeholder.com/150',
  name: 'Test Recipe',
  rating: 4.5,
  tags: ['Tag1', 'Tag2', 'Tag3'],
  id: 1
};

test('renders the component Card & given props', () => {
  render(<Card el={el} />);

  // Check if image is rendered
  const img = screen.getByTestId(`img-recipe-${el.id}`);
  expect(img).toHaveAttribute('src', el.image);
  expect(img).toHaveAttribute('alt', el.name)

  // Check if name is rendered
  const nameRecipe = screen.getByTestId(`title-recipe-${el.id}`);
  expect(nameRecipe).toBeInTheDocument();
  expect(nameRecipe).toHaveTextContent(el.name)

  // Check if rating is rendered
  const ratingRecipe = screen.getByTestId(`rating-recipe-${el.id}`)
  expect(ratingRecipe).toBeInTheDocument();
  expect(ratingRecipe).toHaveTextContent(el.rating)

  // Check if link is rendered
  const link = screen.getByTestId(`link-recipe-${el.id}`)
  expect(link).toHaveAttribute('href', `https://dummyjson.com/recipes/${el.id}`);
});
