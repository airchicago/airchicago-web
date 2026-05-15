import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('should render the App without crashing', () => {
    render(<App />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Activists in Resistance');
  });
});
