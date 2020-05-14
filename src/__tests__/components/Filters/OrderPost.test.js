import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import OrderPost from '~/components/Filters/OrderPost';

jest.mock('react-redux');

describe('OrderPost component', () => {
  it('should be able render post after filter', () => {
    const { getByTestId } = render(<OrderPost />);
    fireEvent.select(getByTestId('select-order-by-date'));
  });
});
