import type { Meta, StoryObj } from "@storybook/vue3";

import { Button } from "../src";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Button",
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => ({
    components: { Button },
    template: `<div style="display: flex; gap: 1rem;">
      <Button>Click me</Button>
      <Button variant="secondary">Click me</Button>
      <Button variant="tertiary">Click me</Button>
    </div>`,
  }),
};
