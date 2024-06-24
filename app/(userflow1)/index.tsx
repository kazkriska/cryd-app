import { Text, View } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import { Button } from 'tamagui';

const GetStarted = () => {
  return (
    <View>
      <Text>Get Started</Text>
      <Button onPress={() => router.push('qr-scanner')}>Scan QR code</Button>
      <Button>Enter manually</Button>
      <Button>Sign in</Button>
    </View>
  );
};

export default GetStarted;
