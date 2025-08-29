import { Meta, StoryObj } from "@storybook/nextjs";
import Alert from "../components/auth/Alert";

const meta: Meta<typeof Alert> = {
  title: "components/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {},
};
