import { Meta, StoryObj } from "@storybook/nextjs";
import Input from "../components/auth/Input";
import { UserRound, SquareAsterisk } from "lucide-react";

const meta: Meta<typeof Input> = {
  title: "Login/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text for the input field",
    },
    type: {
      control: { type: "select" },
      options: ["text", "password"],
      description: "Type of the input field",
    },
    icons: {
      control: { type: "select" },
      option: [
        <UserRound fill="#405acb" size={24} />,
        <SquareAsterisk fill="#405acb" size={24} />,
      ],
    },
    error: {
      control: { type: "text" },
      description: "Error message to display below the input field",
    },
    customClassesForInput: {
      control: { type: "text" },
      description: "Custom CSS classes to apply to the input field",
    },
    customClassesForContainer: {
      control: { type: "text" },
      description: "Custom CSS classes to apply to the container",
    },
    errorClasses: {
      control: { type: "text" },
      description: "Custom CSS classes to apply when there is an error",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;
export const Username: Story = {
  args: {
    placeholder: "Enter text",
    type: "text",
    icons: <UserRound fill="#405acb" size={24} />,
    error: "",
    customClassesForInput: "",
    customClassesForContainer: "",
    errorClasses: "",
  },
};
export const password: Story = {
  args: {
    placeholder: "Enter text",
    type: "password",
    icons: <UserRound fill="#405acb" size={24} />,
    error: "",
    customClassesForInput: "",
    customClassesForContainer: "",
    errorClasses: "",
  },
};
