import { Meta, StoryObj } from "@storybook/nextjs";
import Footer from "../components/auth/Footer";
import { Layers } from "lucide-react";

const meta: Meta<typeof Footer> = {
  title: "Login/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    Layout: "centered",
  },
  argTypes: {
    text1: {
      control: "text",
      description: "The first text to display in the footer",
    },
    text2: {
      control: "text",
      description: "The second text to display in the footer, optional",
    },
    text1ClassName: {
      control: "text",
      description: "Custom class name for the first text",
    },
    text2ClassName: {
      control: "text",
      description: "Custom class name for the second text, optional",
    },
    footerClassName: {
      control: "text",
      description: "Custom class name for the footer container",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    text1: "Do you have an account?",
    text2: "Sign in",
    text1ClassName: "",
    text2ClassName: "",
    footerClassName: "",
  },
};
