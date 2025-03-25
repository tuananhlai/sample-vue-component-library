<script lang="ts">
export interface CheckboxGroupProps extends CheckboxGroupRootProps {
  /**
   * The orientation of the checkboxes within this group.
   * @default "vertical"
   */
  orientation?: "horizontal" | "vertical";
}

export interface CheckboxGroupEmits extends CheckboxGroupRootEmits {}

export interface CheckboxGroupSlots {
  default(): void;
}

/**
 * @example
 * <CheckboxGroup orientation="horizontal">
 *   <Checkbox>Option 1</Checkbox>
 *   <Checkbox>Option 2</Checkbox>
 *   <Checkbox>Option 3</Checkbox>
 * </CheckboxGroup>
 */
export default {};
</script>

<script lang="ts" setup>
import {
  CheckboxGroupRoot,
  CheckboxGroupRootEmits,
  CheckboxGroupRootProps,
} from "reka-ui";

const props = withDefaults(defineProps<CheckboxGroupProps>(), {
  orientation: "vertical",
});
const emits = defineEmits<CheckboxGroupEmits>();
const slots = defineSlots<CheckboxGroupSlots>();
</script>

<template>
  <CheckboxGroupRoot :class="$style.root" :data-orientation="orientation">
    <slot />
  </CheckboxGroupRoot>
</template>

<style lang="scss" module>
.root {
  display: flex;
  flex-direction: column;
  gap: var(--bw-space-2);

  &:where([data-orientation="horizontal"]) {
    flex-direction: row;
    gap: var(--bw-space-4);
  }
}
</style>
