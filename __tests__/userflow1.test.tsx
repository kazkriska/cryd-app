import React from 'react';
import '@testing-library/react-native/extend-expect';
import QR_Scanner from '@/app/(userflow1)/qr-scanner';
import GetStarted from '@/app/(userflow1)/index';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { router } from 'expo-router';

jest.mock('expo-router', () => ({
  router: {
    navigate: jest.fn(),
    back: jest.fn(),
  },
}));

describe('page/get-started', () => {
  it('should render 3 buttons', () => {
    render(<GetStarted />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(3);
    expect(buttons[0]).toHaveTextContent('Scan Qr');
    expect(buttons[1]).toHaveTextContent('Enter manually');
    expect(buttons[2]).toHaveTextContent('Sign in');
  });
  it('when btn[scan-qr] is pressed, navigate to /qr-scanner', () => {
    const { getByText } = render(<GetStarted />);
    const button = getByText('Scan Qr');
    fireEvent.press(button);
    expect(router.navigate).toHaveBeenCalledWith('/qr-scanner');
  });
});
describe('page/qr-scanner', () => {
  it('should render camera preview on screen', () => {
    render(<QR_Scanner />);
    expect(screen.getByTestId('camera-preview')).toBeOnTheScreen();
  });
  it('when btn[close] is pressed => navigate to previous page', () => {
    const { getByTestId } = render(<GetStarted />);
    const cancelButton = getByTestId('cancel-button');
    expect(cancelButton).toBeOnTheScreen();
    fireEvent.press(cancelButton);
    expect(router.back).toHaveBeenCalled();
  });
  it('should render flip camera button', () => {
    render(<QR_Scanner />);
    expect(screen.getByTestId('flip-camera')).toBeOnTheScreen();
  })
  it('navigates to /voucher-auth on seeing a valid QR code', () => {
    expect(false).toBe(true);
    })
});

describe('page/voucher-auth', () => {});
describe('page/chooseOnboarding', () => {});
describe('page/newWalletConfirmation', () => {});
describe('page/walletOverview', () => {});
