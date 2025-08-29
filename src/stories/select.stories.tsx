import { Meta, StoryObj } from "@storybook/nextjs";
import Select from "../components/auth/Select";

const meta: Meta<typeof Select> = {
  title: "Login/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: "text",
      description: "Label for the select field",
    },
    options: {
      control: "object",
      description: "Options for the select field",
    },
    onChange: {
      action: "change",
      description: "Function to be called when the select field is changed",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the select field",
    },
    labelClassName: {
      control: "text",
      description: "Custom class name for the label",
    },
    dropDownContainerClassName: {
      control: "text",
      description: "Custom class name for the drop down container",
    },
    dropDownHeaderClassName: {
      control: "text",
      description: "Custom class name for the drop down lable",
    },
    dropDownHeader: {
      control: "text",
      description: "Custom class name for the drop down header",
    },
    dropDownClassName: {
      control: "text",
      description: "Custom class name for the drop down",
    },
    dropDownOptionClassName: {
      control: "text",
      description: "Custom class name for the drop down option",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: "Select ",
    options: ["Option 1", "Option 2", "Option 3"],
    placeholder: "Select an option",
    labelClassName: "",
    dropDownContainerClassName: "",
    dropDownHeaderClassName: "",
    dropDownHeader: "fruits",
    dropDownClassName: "",
    dropDownOptionClassName:"",
    onChange: () => {},
  },
};
