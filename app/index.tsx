import { useRouter } from "expo-router";
import { Button, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Go to level one"
        onPress={() => {
          router.push("/level-one");
        }}
      />
    </View>
  );
}
