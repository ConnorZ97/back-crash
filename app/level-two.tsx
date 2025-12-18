import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function LevelTwo() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Level two</Text>
    </View>
  );
}
