import { Meta, StoryObj } from "@storybook/nextjs";
import CheckBox from "../components/auth/CheckBox";

const meta: Meta<typeof CheckBox> = {
  title: "Login/CheckBox",
  component: CheckBox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: "text",
      description: "Text to display next to the checkbox",
    },
    subTitle: {
      control: "text",
      description: "Subtext to display below the checkbox",
    },
    selectValues: {
      control: "object",
      description: "Array of objects to display in the checkbox",
    },
    selectConatinerClassname: {
      control: "text",
      description: "Custom class name for the checkbox container",
    },
    selectHeaderContainerClassName: {
      control: "text",
      description: "Custom class name for the checkbox header",
    },
    selectHeaderClassName: {
      control: "text",
      description: "Custom class name for the checkbox header",
    },
    selectSubHeaderClassName: {
      control: "text",
      description: "Custom class name for the checkbox sub-header",
    },

    selectBottomClassName: {
      control: "text",
      description: "Custom class name for the checkbox bottom container",
    },
    selectButtonClassName: {
      control: "text",
      description: "Custom class name for the checkbox button",
    },
    selectCheckClassName: {
      control: "text",
      description: "Custom class name for the checkbox check",
    },
    selectTitleClassName: {
      control: "text",
      description: "Custom class name for the checkbox title",
    },
  },
};
export default meta;

type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {
  args: {
    label: "Select",
    subTitle: "subtext goes here",
    selectValues: [
      { title: "Recents", isChecked: false, isDisable: false },
      { title: "Starred", isChecked: false, isDisable: false },
      { title: "Important", isChecked: false, isDisable: false },
      { title: "Sent", isChecked: false, isDisable: false },
    ],
    selectConatinerClassname: "",
    selectHeaderContainerClassName: "",
    selectHeaderClassName: "",
    selectSubHeaderClassName: "",
    selectBottomClassName: "",
    selectButtonClassName: "",
    selectCheckClassName: "",
    selectTitleClassName: "",
  },
};
