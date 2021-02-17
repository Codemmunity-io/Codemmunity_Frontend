import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders codemmunity title', () => {
  render(<App />);
  const linkElement = screen.getByText(/codemmunity/i);
  expect(linkElement).toBeInTheDocument();
});
