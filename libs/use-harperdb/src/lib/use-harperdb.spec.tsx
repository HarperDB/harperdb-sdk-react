import { render } from '@testing-library/react';

import UseHarperdb from './use-harperdb';

describe('UseHarperdb', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseHarperdb />);
    expect(baseElement).toBeTruthy();
  });
});
