import '@testing-library/react-native/extend-expect';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import UnstyledDemo from '../components/UnstyledDemo';
import { router } from 'expo-router';

jest.mock('expo-router', () => ({
  router: {
    navigate: jest.fn(),
  }
}));

describe('UnstyledDemo', () => {
  it('renders correctly', () => {
    render(<UnstyledDemo />);
    const buttonElements = screen.getAllByRole('button');
    expect(buttonElements[0]).toHaveTextContent('Scan Qr');
    expect(buttonElements[1]).toHaveTextContent('Enter manually');
    expect(buttonElements[2]).toHaveTextContent('sign in');
  });

  it('should navigate to /qr-scanner when "Scan Qr" button is pressed', () => {
    const { getByText } = render(<UnstyledDemo />);
    const button = getByText('Scan Qr');
    fireEvent.press(button);
    expect(router.navigate).toHaveBeenCalledWith('/qr-scanner');
  });

});
