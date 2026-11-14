import * as Device from "expo-device";
import { Platform, StyleSheet } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>yosetsu</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
