import { NativeTabs } from "expo-router/native-tabs";
import { useColorScheme } from "react-native";

import { Colors } from "@/constants/theme";
import { Stack } from "../../.expo/types/router";

export default function AppTabs() {
  const scheme = useColorScheme();
  const colors = Colors[scheme === "dark" ? "dark" : "light"];

  return (
    <Stack.Screen
      name="home"
      options={{ headerShown: false }}
      component={HomeScreen}
    />
  );
}
