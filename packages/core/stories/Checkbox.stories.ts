import type { Meta, StoryObj } from "@storybook/vue3";

import { Checkbox } from "../src";

const meta = {
  title: "Checkbox",
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { Checkbox },
    template: '<Checkbox>Accept terms and conditions</Checkbox>',
  }),
};
