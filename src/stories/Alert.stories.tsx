import { Meta, StoryObj } from "@storybook/nextjs";
import Alert from "../components/auth/alertComponents/Alert";
import { title } from "process";
import { Layout } from "lucide-react";

const meta: Meta<typeof Alert> = {
  title: "login/AlertComponent/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    Layout: "centered",
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Alert>;
export const Default: Story = {
  args: {},
};
