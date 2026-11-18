import { useLocalSearchParams, useRouter } from "expo-router";
import { PjQuizView } from "@/components/pj-quiz-view";

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
    }
  };

  return <PjQuizView quizId={currentId} onNext={handleNext} />;
}
