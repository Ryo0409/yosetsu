import { PjText } from "@/components/pj-text";
import { PjView } from "@/components/pj-view";
import { router, useLocalSearchParams, useRouter } from "expo-router";

export default function HomeScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const currentId = parseInt(id);

  const handleNext = () => {
    if (currentId == 10) {
      router.dismissAll();
      router.replace("/");
    } else {
      console.log(currentId);
      router.push(`/quiz/${currentId + 1}`);
      // Navigate to the next quiz question
    }
  };

  return (
    <PjView>
      <PjText>quiz</PjText>
      <PjText onPress={handleNext}>Next</PjText>
    </PjView>
  );
}
