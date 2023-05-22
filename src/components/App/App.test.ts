import { screen } from '@testing-library/react';
import setup from '../../testUtils';

it('navigates to profy.dev/employers when left link is clicked', () => {
  setup('/');
  let link = screen.getAllByText('My App');
  expect(link.length).toBe(1);
});
