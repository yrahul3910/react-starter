import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from './components/App/App';

const setup = (initialPath = '/') => {
  let history;
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
    </MemoryRouter>,
    );
  return { history };
};

export default setup;
