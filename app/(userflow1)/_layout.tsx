import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="qr-scanner" />
        <Stack.Screen name="voucher-auth" />
        <Stack.Screen name="chooseOnboarding" />
        <Stack.Screen name="newWalletConfirmation" />
      </Stack>
  );
}
