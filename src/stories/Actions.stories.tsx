import { Meta, StoryObj } from "@storybook/nextjs";
import Actions from "@/components/auth/Actions";

const meta: Meta<typeof Actions> = {
  title: "Login/Actions",
  component: Actions,
  tags: ["autodocs"],
  parameters: {
    Layout: "centered",
  },
  argTypes: {
    text1: {
      control: "text",
      description: "Text for the first action",
    },
    text2: {
      control: "text",
      description: "Text for the second action",
    },
    text1ClassName: {
      control: "text",
      description: "Custom class name for the first text",
    },
    text2ClassName: {
      control: "text",
      description: "Custom class name for the second text",
    },
    actionsClassName: {
      control: "text",
      description: "Custom class name for the actions container",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Actions>;
export const Default: Story = {
  args: {
    text1: "Need help logging in?",
    text2: "Forgot Password",
    text1ClassName: "",
    text2ClassName: "",
    actionsClassName: "",
  },
};
