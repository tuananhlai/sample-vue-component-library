import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import { Field, Label, TextInput } from "../src";

const meta = {
  title: "Field",
  component: Field,
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

// @ts-expect-error Expression produces a union type that is too complex to represent.ts(2590)
export const VisualTest: Story = {
  render: () => ({
    components: { Field, Label, TextInput },
    setup() {
      const showLabel = ref(true);

      return { showLabel };
    },
    template: `<Field>
      <Label v-if="showLabel">Label</Label>
      <TextInput />
      <button @click="showLabel = !showLabel">Toggle label</button>
    </Field>`,
  }),
};
