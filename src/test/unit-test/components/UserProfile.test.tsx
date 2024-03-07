import React from 'react';
import { render } from '@testing-library/react';
import UserProfile from '../../../app/components/UserProfile';

describe('UserProfile', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<UserProfile username="loki" email="loki@test.com" />);
    expect(asFragment()).toMatchSnapshot();
  });
});