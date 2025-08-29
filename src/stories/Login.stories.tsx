import { Meta, StoryObj } from "@storybook/nextjs";
import Login from "../components/auth/Login";

const meta: Meta<typeof Login> = {
  title: "Login/Login",
  component: Login,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    formClassName: {
      control: {
        type: "text",
        description: "Class name for the form wrapper",
      },
      inputClassName: {
        control: {
          type: "text",
          description: "Class name for the input fields",
        },
      },
      actionClassName: {
        control: {
          type: "text",
          description: "Class name for the action buttons",
        },
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Login>;
export const Default: Story = {
  args: {
    inputClassName: "",
    formClassName: "",
    actionClassName: "",
  },
};
