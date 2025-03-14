import type { Meta, StoryObj } from "@storybook/vue3";
import { Input } from "../src";

const meta = {
  title: "Input",
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

//@ts-expect-error Expression produces a union type that is too complex to represent.ts(2590).
export const VisualTest: Story = {
  render: () => ({
    components: { Input },
    template: `<Input placeholder="Enter your name" />`,
  }),
};
