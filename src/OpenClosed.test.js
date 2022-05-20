import { fireEvent, render, screen } from '@testing-library/react';

import App from './App';

test('when clicked sign should read as Welcome to the Zoo', () => {
  render(<App/>);
  const openButton = screen.queryByText(/Open?/i);
  const closeButton = screen.queryByText(/Close it Down!/i);
  fireEvent.click(openButton);
  const openElement = screen.getByText(/Welcome to the Zoo!!!/i);  
  expect(openElement).toBeInTheDocument();
  fireEvent.click(closeButton);
  const closeElement = screen.getByText(/Get Out we are closed!/i);  
  expect(closeElement).toBeInTheDocument();

});