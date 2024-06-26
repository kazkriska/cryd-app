import { fireEvent, render, screen } from '@testing-library/react-native';
import '@testing-library/react-native/extend-expect';
import GetStarted from './app/(userflow1)/index';
import { router } from 'expo-router';

describe('User Flow (1)', () => {
  describe('page/get-started', () => {
    render(<GetStarted />);
    it('should render 3 buttons', () => {
      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(3);
      expect(buttons[0]).toHaveTextContent('Scan QR');
      expect(buttons[1]).toHaveTextContent('Enter manually');
      expect(buttons[2]).toHaveTextContent('Sign in');
    });
    describe('button/scan-qr OnClick() ', () => {
      it('should navigate to /qr-scanner', () => {
        const spy = jest.spyOn(router, 'navigate' || 'push'); //! possible error
        fireEvent.press(screen.getByText('Scan QR'));
        expect(spy).toHaveBeenCalledWith('/qr-scanner');
      });
    });
  });
  describe('page/qr-scanner', () => {
    it('should render a qr scanner', () => {
      // render the component
      // expect to see a qr scanner
      // default to back camera
      // have a flip camera switch
      // have a cancel/go-back button (top left)
      //* on seeing a valid qr code, navigate to /voucher-auth
      //. have a flash toggle
      //. on seeing a qr code, but invalid, show an error message
      //. on seeing a valid qr code, but expired, navigate to /voucher-expired
    });
  });
  describe('page/voucher-auth', () => {
    it('should render a page with prefilled data from QR scan and input fields', () => {
      // render a prefilled, editable(false) inputArea = Voucher Serial Number
      // render a secret key named inputArea(password-style)
      // render a referral code named inputArea
      // render a submit button
      //* on valid submit, navigate to /chooseOnboarding
    });
  });
  describe('page/chooseOnboarding', () => {
    // have 2 radio buttons
    // the top one should be selected by default
    // have a next button which navigates to /newWalletConfirmation
  });
  describe('page/newWalletConfirmation', () => {
    // have a prefilled, editable(false) inputArea for SRP
    // have a copy button for SRP
    // have a prefilled, editable(false) inputArea for Private Key
    // have a copy button for Private Key
    // have a prefilled, editable(false) inputArea for Wallet Address
    // have a copy button for Wallet Address
    // have an export button that initiates a download of a JSON file with the same SRP, Private Key, Wallet Address
  });
});
