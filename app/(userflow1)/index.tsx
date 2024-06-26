import React from 'react';
import { Text, View, Button } from 'react-native';
import { router } from 'expo-router';

const GetStarted = () => {
  return (
    <View>
      <Button title="Scan Qr" onPress={() => router.navigate('/qr-scanner')} />
      <Button title="Enter manually" />
      <Button title="Sign in" onPress={() => alert('Button Clicked')} />
    </View>
  );
};

export default GetStarted;
