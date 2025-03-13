import type { Meta, StoryObj } from "@storybook/vue3";

import { Button } from "../src";

const meta = {
  title: "Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { Button },
    template: `<div style="display: flex; gap: 1rem;">
      <Button>Click me</Button>
      <Button variant="secondary">Click me</Button>
      <Button variant="tertiary">Click me</Button>
    </div>`,
  }),
};
