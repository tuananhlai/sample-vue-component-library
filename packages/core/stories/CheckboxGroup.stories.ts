import type { Meta, StoryObj } from '@storybook/vue3';
import { CheckboxGroup } from '../src';

const meta = {
  title: 'CheckboxGroup',
  component: CheckboxGroup,
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const VisualTest: Story = {
  render: () => ({
    components: { CheckboxGroup },
    template: `<div>

    </div>`,
  })
}