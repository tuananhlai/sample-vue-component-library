import type { Meta, StoryObj } from "@storybook/vue3";
import { useTemplateRef } from "vue";
import { Input } from "../src";
import { InputExpose } from "../src/components/input/Input.vue";

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
    setup() {
      const inputRef = useTemplateRef<InputExpose>("inputRef");

      return {
        inputRef,
      };
    },
    template: `
    <Input ref="inputRef" placeholder="Enter your name" />
    <button @click="inputRef?.$el?.focus()">Focus</button>
    `,
  }),
};
