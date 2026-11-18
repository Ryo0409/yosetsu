import { PjText } from "@/components/pj-text";
import { PjView } from "@/components/pj-view";
import { getQuizData } from "@/utils/getQuiz";
import { useState } from "react";

type PjQuizViewProps = {
  quizId: number;
  onNext: () => void;
};

export function PjQuizView({ quizId, onNext }: PjQuizViewProps) {
  const [status, setStatus] = useState<"correct" | "incorrect" | null>(null);

  const quizData = getQuizData();
  const currentQuiz = quizData[quizId - 1];

  const checkAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setStatus("correct");
    } else {
      setStatus("incorrect");
    }
  };

  return (
    <PjView>
      <PjText>{currentQuiz.question}</PjText>

      {currentQuiz.options.map((option) => (
        <PjText
          testID={option.isCorrect ? "correct-answer" : "incorrect-answer"}
          key={option.value}
          onPress={() => checkAnswer(option.isCorrect)}
        >
          {option.value}
        </PjText>
      ))}

      <PjText>
        {status === "correct"
          ? "Correct!"
          : status === "incorrect"
            ? "Incorrect!"
            : null}
      </PjText>

      <PjText onPress={onNext}>Next</PjText>
    </PjView>
  );
}
