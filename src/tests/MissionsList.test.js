import React from 'react';
import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import MissionsList from '../components/MissionsLists';
import store from '../redux/configureStore';

const createComponent = create(
  <Provider store={store}>
    <MissionsList />
  </Provider>,
);

const renderComponent = () => {
  render(
    <Provider store={store}>
      <MissionsList />
    </Provider>,
  );
};

describe('Testing MissionsList component', () => {
  test('it renders mission title', () => {
    renderComponent();
    expect(screen.getByText('Mission')).toBeInTheDocument();
  });

  test('it renders mission description', () => {
    renderComponent();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  test('it renders mission status', () => {
    renderComponent();
    expect(screen.getByText('Status')).toBeInTheDocument();
  });

  test('the list container is a table tag', () => {
    const component = createComponent.toJSON();
    expect(component.type).toEqual('table');
  });

  test('the container first child is a tbody tag', () => {
    const component = createComponent.toJSON();
    expect(component.children[0].type).toEqual('tbody');
  });
});
