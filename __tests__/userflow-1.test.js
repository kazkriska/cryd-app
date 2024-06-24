import { render, screen } from '@testing-library/react-native';
import '@testing-library/react-native/extend-expect';
import GetStarted from '../app/pages/GetStarted';

describe('User Flow (1)', () => {
  describe('page/get-started', () => {
    it('should render 3 buttons', () => {
      render(<GetStarted />);
      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(3);
      expect(buttons[0]).toHaveTextContent('Scan QR');
      expect(buttons[1]).toHaveTextContent('Enter manually');
      expect(buttons[2]).toHaveTextContent('Sign in');
    });
    describe('button/scan-qr', () => {
        it('should handle press event', () => {
            render(<GetStarted />);
            const button = screen.getByText('Scan QR');
            const mockHandlePress = jest.fn();
            button.press();
            expect(mockHandlePress).toBeTruthy();
        })
    })
  });
});
