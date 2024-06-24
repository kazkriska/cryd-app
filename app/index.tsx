import { router } from "expo-router";
import { Text, View } from "react-native";
import { Button } from "tamagui";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button onPress={() => router.navigate('/get-started')}>Edit app/index.tsx to edit this screen.</Button>
    </View>
  );
}
