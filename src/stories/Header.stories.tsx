import { Meta, StoryObj } from "@storybook/nextjs";
import Header from "../components/auth/Header";

const meta: Meta<typeof Header> = {
  title: "Login/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      control: "text",
      description: "The main title of the header",
    },
    subtitle: {
      control: "text",
      description: "The subtitle of the header",
    },
    titleClassName: {
      control: "text",
      description: "Custom class name for the title",
    },
    subtitleClassName: {
      control: "text",
      description: "Custom class name for the subtitle",
    },
    containerClassName: {
      control: "text",
      description: "Custom class name for the container",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: "Login",
    subtitle: "Login to your Account",
    titleClassName: "",
    subtitleClassName: "",
    containerClassName: "",
  },
};
