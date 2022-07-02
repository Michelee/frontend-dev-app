import React from 'react';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import Home from '.';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  expect(screen.getByText(/learn/i)).toBeInTheDocument();
});
