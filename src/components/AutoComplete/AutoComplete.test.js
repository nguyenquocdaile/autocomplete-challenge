import { render, screen } from '@testing-library/react';
import AutoComplete from './AutoComplete';

test('renders list item', () => {
  render(<AutoComplete />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});