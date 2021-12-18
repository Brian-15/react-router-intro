import { render } from '@testing-library/react';
import Snack from './Snack.js';

describe('Snack component', () => {
  it('should pass a smoke test', () => {
    render(<Snack name='chips' />);
  });

  it('should pass snapshot test', () => {
    const { asFragment } = render(<Snack name='chips' />);
    expect(asFragment()).toMatchSnapshot();
  });
});