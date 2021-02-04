require('dotenv').config();
global.fetch = require('node-fetch');
import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import NewsSearch from './NewsSearch';
import userEvent from '@testing-library/user-event';

describe('NewsSearch component', () => {
  it('renders NewsSearch', () => {
    render(<NewsSearch />);
    const search = screen.getByPlaceholderText('Search');
    userEvent.type(search, 'cats');
    return waitFor(() => {
      expect(screen.getByTestId('display')).not.toBeEmptyDOMElement();
    });
  });
});
