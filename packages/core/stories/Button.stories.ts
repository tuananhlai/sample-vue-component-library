import type { Meta, StoryObj } from "@storybook/vue3";

import { useTemplateRef, watch } from "vue";
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
    setup() {
      const buttonRefVar = useTemplateRef("button-ref");

      watch(buttonRefVar, (value) => {
        console.log(value);
      });

      return {
        buttonRef: buttonRefVar,
      };
    },
    template: `<div style="display: flex; gap: 1rem;">
      <Button ref="button-ref">Click me</Button>
      <Button variant="secondary">Click me</Button>
      <Button variant="tertiary">Click me</Button>
    </div>`,
  }),
};
