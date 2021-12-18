import { render } from '@testing-library/react';
import VendingMachine from './VendingMachine';

describe('VendingMachine component', () => {
  it('should pass a smoke test', () => {
    render(<VendingMachine />);
  });

  it('should pass a snapshot test', () => {
    const { asFragment } = render(<VendingMachine />);
    expect(asFragment()).toMatchSnapshot(); 
  });
});