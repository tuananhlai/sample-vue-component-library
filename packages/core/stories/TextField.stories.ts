import type { Meta, StoryObj } from "@storybook/vue3";
import { TextField } from "../src";

const meta = {
  title: "TextField",
  component: TextField,
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    description: "Description",
    errorMessage: "Error Message",
  },
};

export const VisualTest: Story = {
  render: () => ({
    components: {
      TextField,
    },
    template: `<TextField label="Label" description="Description" errorMessage="Error Message" />`,
  }),
};
