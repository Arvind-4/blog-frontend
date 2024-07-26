import { render, screen } from '@testing-library/react';
import React from 'react';
import { expect, test } from 'vitest';

import Homepage from '../src/app/page';

test('HomePage renders the correct text', () => {
  render(<Homepage />);
  const element = screen.getByText(/Hello from Linux!/i);
  expect(element).toBeInstanceOf(HTMLElement);
});
