import { Meta, StoryObj } from "@storybook/nextjs";
import Switch from "../components/auth/Switch";

const meta: Meta<typeof Switch> = {
  title: "Login/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    buttonClassName: {
      control: "text",
      description: "Custom class name for the button",
    },
    isAnimated: {
      control: "boolean",
      description: "Toggle animation",
    },
    circleClassName: {
      control: "text",
      description: "Custom class name for the circle",
    }
  },
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    buttonClassName: "",
  },
};
export const animated: Story = {
  args: {
    buttonClassName: "",
    isAnimated: true,
    circleClassName: "",
  },
  
};
