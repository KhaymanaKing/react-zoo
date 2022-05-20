import { render, screen } from '@testing-library/react';
import App from './App';

test('looks for worlds smallest eating competition', () => {
  render(<App />);
  const linkElement = screen.getByText(/Worlds Smallest Eating Competition/i);
  expect(linkElement);
});
test('looks for buttons', () => {
  render(<App />);
  const bearEatElement = screen.getByText(/The Bear Eats/i);
  expect(bearEatElement);
  const bearStealElement = screen.getByText(/The Bear steals food/i);
  expect(bearStealElement);
  const otterElement = screen.getByText(/The Otter Eats/i);
  expect(otterElement);
  const otterStealElement = screen.getByText(/The Otter steals food/i);
  expect(otterStealElement);
});
