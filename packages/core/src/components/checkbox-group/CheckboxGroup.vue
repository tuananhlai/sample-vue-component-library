<script lang="ts">
export interface CheckboxGroupProps extends CheckboxGroupRootProps {
  /**
   * The orientation of the checkboxes within this group.
   * @default "vertical"
   */
  orientation?: "horizontal" | "vertical";

  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
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
import clsx from "clsx";
import {
  CheckboxGroupRoot,
  CheckboxGroupRootEmits,
  CheckboxGroupRootProps,
  useForwardPropsEmits,
} from "reka-ui";
import { useFieldContext } from "../field/FieldContext";

const props = withDefaults(defineProps<CheckboxGroupProps>(), {
  orientation: "vertical",
});
const emits = defineEmits<CheckboxGroupEmits>();
const slots = defineSlots<CheckboxGroupSlots>();

const forwarded = useForwardPropsEmits(props, emits);

const fieldContextValue = useFieldContext();
</script>

<template>
  <CheckboxGroupRoot
    :class="$style.root"
    :data-orientation="orientation"
    v-bind="forwarded"
    :aria-label="props['aria-label']"
    :aria-labelledby="
      clsx(props['aria-labelledby'], fieldContextValue?.labelledBy.value) ||
      undefined
    "
    :aria-describedby="
      clsx(props['aria-describedby'], fieldContextValue?.describedBy.value) ||
      undefined
    "
  >
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
