import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { render as rtlRender, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';

const render = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return rtlRender(ui, { wrapper: Router });
};

describe('Testing routes', () => {
  test('it renders rockets page', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 2 }, 'Rockets')).toBeInTheDocument();
  });

  test('it renders mission page', () => {
    render(<App />);
    expect(screen.getByText('Missions')).toBeInTheDocument();

    userEvent.click(screen.getByText(/Missions/i));

    expect(screen.getByText(/Description/i)).toBeInTheDocument();
  });

  test('it renders my profile page', () => {
    render(<App />);
    expect(screen.getByText('My Profile')).toBeInTheDocument();

    userEvent.click(screen.getByText(/My Profile/i));

    expect(screen.getByText(/My Missions/i)).toBeInTheDocument();
  });
});
