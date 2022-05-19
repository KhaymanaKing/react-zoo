import { fireEvent, render, screen } from '@testing-library/react';

import App from './App';

test('when animal is click it should appear on screen', () => {
  render(<App/>);
  const startEmoji = screen.queryAllByText(/🦒/i);
  expect(startEmoji.length).toBe(1);
  const addGiraffe = screen.getByText(/giraffe/i);
  fireEvent.click(addGiraffe);
  const endEmoji = screen.queryAllByText(/🦒/i);
  expect(endEmoji.length).toBe(2);

});
test('when animal is click it should appear on screen', () => {
  render(<App/>);
  const startEmoji = screen.queryAllByText(/🦒/i);
  expect(startEmoji.length).toBe(1);
  const addGiraffe = screen.getByText(/giraffe/i);
  fireEvent.click(addGiraffe);
  const removeAnimal = screen.getByText(/Remove Last?/i);
  fireEvent.click(removeAnimal);
  const endEmoji = screen.queryAllByText(/🦒/i);
  expect(endEmoji.length).toBe(1);
  
});