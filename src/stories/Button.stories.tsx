import { Meta, StoryObj } from "@storybook/nextjs";
import Button from "../components/auth/Button";

const meta: Meta<typeof Button> = {
  title: "Login/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: "text",
      description: "Text to display on the button",
    },
    type: {
      control: "select",
      options: ["button", "submit"],
      description: "Type of the button",
    },
    disabled: {
      control: "boolean",
      description: "Disable the button",
    },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;
export const Default: Story = {
  args: {
    label: "Click Me",
    type: "submit",
    disabled: false,
  },
};
