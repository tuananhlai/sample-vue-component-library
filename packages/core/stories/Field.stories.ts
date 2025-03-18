import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import { Description, Field, Label, TextInput } from "../src";

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
    components: { Field, Label, TextInput, Description },
    setup() {
      const showLabel = ref(true);
      const showDescription = ref(true);

      return { showLabel, showDescription };
    },
    template: `<Field>
      <Label v-if="showLabel">Label</Label>
      <TextInput />
      <Description v-if="showDescription">Description</Description>
      <button @click="showLabel = !showLabel">Toggle label</button>
      <button @click="showDescription = !showDescription">
        Toggle description
      </button>
    </Field>`,
  }),
};
