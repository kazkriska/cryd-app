import { View, Text, Button } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

const UnstyledDemo = () => {
  return (
    <View>
      <Button title="Scan Qr" onPress={() => router.navigate('/qr-scanner')} />
      <Button title="Enter manually" />
      <Button title="sign in" onPress={() => alert('Button Clicked')} />
    </View>
  );
};

export default UnstyledDemo;
