import { render, screen } from '@testing-library/react';
import App from './App';

test('Debe renderizar componente App', () => {
  render(<App />);
  const divElement = screen.getByTestId('app-1')
  expect(divElement).toBeInTheDocument();
});
