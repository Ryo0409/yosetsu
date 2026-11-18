import type { Meta, StoryObj } from "@storybook/react-native";
import { PjQuizView } from "./pj-quiz-view";
import { expect, userEvent } from "storybook/test";

const meta: Meta<typeof PjQuizView> = {
  title: "Components/PjQuizView",
  component: PjQuizView,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    quizId: 1,
    onNext: () => console.log("Next quiz"),
  },

  play: async ({ canvas }) => {
    // arrange
    const correctAnswer = canvas.getByTestId("correct-answer");

    // act
    await userEvent.click(correctAnswer);

    // assert
    const statusText = canvas.getByText("Correct!");
    expect(statusText).toBeTruthy();
  },
};
