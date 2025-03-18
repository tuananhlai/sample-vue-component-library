import type { Meta, StoryObj } from "@storybook/vue3";
import { useTemplateRef } from "vue";
import { TextInput } from "../src";
import { TextInputExpose } from "../src/components/input/TextInput.vue";

const meta = {
  title: "Input",
  component: TextInput,
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

// @ts-expect-error Expression produces a union type that is too complex to represent.ts(2590)
export const VisualTest: Story = {
  render: () => ({
    components: { Input: TextInput },
    setup() {
      const inputRef = useTemplateRef<TextInputExpose>("inputRef");

      const focus = () => {
        inputRef.value?.domNode?.focus();
      };

      return {
        inputRef,
        focus,
      };
    },
    template: `
    <Input ref="inputRef" placeholder="Enter your name" />
    <button @click="focus">Focus</button>
    `,
  }),
};
