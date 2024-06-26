import { Stack } from 'expo-router';
import { TamaguiProvider } from 'tamagui';
import config from '../tamagui.config';
// https://youtu.be/Z20nUdAUGmM?t=1062

export default function RootLayout() {
  return (
    <TamaguiProvider config={config}>
      <Stack>
        <Stack.Screen name="(userflow1)" />
      </Stack>
    </TamaguiProvider>
  );
}
