import { render, screen } from '@testing-library/react';
import App from './App';

test('renders starter content', () => {
  render(<App />);
  const element = screen.getByText(/MDT/);
  expect(element).toBeInTheDocument();
});
