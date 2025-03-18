import type { Meta, StoryObj } from "@storybook/vue3";
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
    template: `<Field>
      <Label>Label</Label>
      <TextInput />
    </Field>`,
  }),
};
