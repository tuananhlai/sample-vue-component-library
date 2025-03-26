import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import { Checkbox, CheckboxGroup, CheckboxGroupField } from "../src";

const meta = {
  title: "CheckboxGroup",
  component: CheckboxGroup,
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    setup() {
      const selected = ref<string[]>([]);

      return {
        selected,
      };
    },
    template: `<CheckboxGroup v-model="selected">
      <Checkbox value="1">Option 1</Checkbox>
      <Checkbox value="2">Option 2</Checkbox>
      <Checkbox value="3">Option 3</Checkbox>
    </CheckboxGroup>
    <pre>{{ selected }}</pre>
    `,
    components: { CheckboxGroup, Checkbox },
  }),
};

export const Field: Story = {
  render: () => ({
    setup() {
      const selected = ref<string[]>([]);

      return {
        selected,
      };
    },
    template: `<CheckboxGroupField v-model="selected" label="Checkbox Group" description="This is a description" errorMessage="This is an error message">
      <Checkbox value="1">Option 1</Checkbox>
      <Checkbox value="2">Option 2</Checkbox>
      <Checkbox value="3">Option 3</Checkbox>
    </CheckboxGroupField>
    <pre>{{ selected }}</pre>
    `,
    components: { CheckboxGroupField, Checkbox },
  }),
};
