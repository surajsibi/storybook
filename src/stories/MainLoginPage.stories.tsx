import { Meta, StoryObj } from "@storybook/nextjs";
import MainLoginPage from "../app/(auth)/login/page";

const meta: Meta<typeof MainLoginPage> = {
  title: "Pages/Login",
  component: MainLoginPage,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    mainContainerClassName: {
      control: {
        type: "text",
        description: "Class name for the main container",
      },
    },
    leftContainerClassName: {
      control: {
        type: "text",
        description: "Class name for the left container",
      },
    },
    rightContainerClassName: {
      control: {
        type: "text",
        description: "Class name for the right container",
      },
    },
    middleContainerClassName: {
      control: {
        type: "text",
        description: "Class name for the middle container",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MainLoginPage>;

export const Default: Story = {
  args: {
    mainContainerClassName: "",
    leftContainerClassName: "",
    rightContainerClassName: "",
    middleContainerClassName: "",
  },
};
