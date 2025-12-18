import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
  anchor: "index",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: true, headerTitle: "Home" }}
        />
        <Stack.Screen
          name="level-one"
          options={{ headerShown: true, headerTitle: "Level one" }}
        />
        <Stack.Screen
          name="level-two"
          options={{ headerShown: true, headerTitle: "Level two" }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
