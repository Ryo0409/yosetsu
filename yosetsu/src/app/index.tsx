import * as Device from "expo-device";
import { Platform, StyleSheet } from "react-native";
import { PjText } from "@/components/pj-text";
import { PjView } from "@/components/pj-view";
import { router, useRouter } from "expo-router";
import { use } from "react";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <PjView>
      <PjText type="title">yosetsu</PjText>
      <PjView style={{ height: "60%" }}>
        <PjText
          onPress={() => {
            router.push("/quiz/1");
          }}
        >
          go to quiz
        </PjText>
      </PjView>
    </PjView>
  );
}
