import { Meta, StoryObj } from "@storybook/nextjs";
import Dialog from "../components/auth/Dialog";

const meta: Meta<typeof Dialog> = {
  title: "Login/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    buttonLabel: {
      control: "text",
      description: "Text to display on the button",
    },
    buttonClassName: {
      control: "text",
      description: "Custom class name for the button",
    },
    headerTitle: {
      control: "text",
      description: "Header title",
    },
    headerSubTitle: {
      control: "text",
      description: "Header subtitle",
    },
    innerContainerClassname: {
      control: "text",
      description: "Custom class name for the inner container",
    },
    headerContainerClassName: {
      control: "text",
      description: "Custom class name for the header",
    },
    headerTitleClassName: {
      control: "text",
      description: "Custom class name for the header title",
    },
    headerSubTitleClassName: {
      control: "text",
      description: "Custom class name for the header subtitle",
    }
  },
};
export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    buttonLabel: "Share",
    buttonClassName: "",
    headerTitle: "Share link",
    headerSubTitle: "Anyone who has link will be able to view this",
    innerContainerClassname: "",
    headerContainerClassName: "",
    headerTitleClassName: "",
    headerSubTitleClassName: "",
  },
};
