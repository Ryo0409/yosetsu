import type { Meta, StoryObj } from "@storybook/react-native";
import { PjText } from "./pj-text";

const meta: Meta<typeof PjText> = {
  title: "Components/PjText",
  component: PjText,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Hello Storybook!",
  },
};

export const Title: Story = {
  args: {
    children: "Title Text",
    type: "title",
  },
};

export const Code: Story = {
  args: {
    children: "Code Text",
    type: "code",
  },
};

export const Link: Story = {
  args: {
    children: "Link Text",
    type: "link",
  },
};
