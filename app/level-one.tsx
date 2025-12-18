import { Button, View } from "react-native";
import { useRouter } from "expo-router";

export default function LevelOne() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Go to level two"
        onPress={() => {
          router.push("/level-two");
        }}
      />
    </View>
  );
}
