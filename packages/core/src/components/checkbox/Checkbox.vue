<script lang="ts">
export interface CheckboxProps extends CheckboxRootProps {}

export interface CheckboxEmits extends CheckboxRootEmits {}

export interface CheckboxSlots {
  default(): void;
}
</script>

<script setup lang="ts">
import { CheckIcon } from "lucide-vue-next";
import {
  CheckboxIndicator,
  CheckboxRoot,
  CheckboxRootEmits,
  CheckboxRootProps,
  Label,
  useForwardPropsEmits,
} from "reka-ui";

const props = defineProps<CheckboxProps>();
const emits = defineEmits<CheckboxEmits>();
const slots = defineSlots<CheckboxSlots>();

const forwardedPropEmits = useForwardPropsEmits(props, emits);
</script>

<template>
  <Label :class="$style.root" :data-disabled="disabled || undefined">
    <CheckboxRoot :class="$style.checkboxRoot" v-bind="forwardedPropEmits">
      <CheckboxIndicator :class="$style.checkboxIndicator">
        <CheckIcon :class="$style.checkedIcon" />
      </CheckboxIndicator>
    </CheckboxRoot>
    <slot />
  </Label>
</template>

<style lang="scss" module>
.root {
  display: flex;
  align-items: center;
  gap: var(--bw-space-2);

  &:where(:hover:not([data-disabled])) {
    cursor: pointer;
  }
}

.checkboxRoot {
  width: var(--bw-space-5);
  height: var(--bw-space-5);
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  background-color: var(--bw-color-white);
  border: 1px solid var(--bw-color-zinc-300);
  border-radius: var(--bw-space-1);
  box-shadow: var(--bw-shadow-sm);

  &:where(:hover) {
    background-color: var(--bw-color-zinc-50);
  }
}

.checkboxIndicator {
  display: flex;
  align-items: center;
  justify-content: center;
}

.checkedIcon {
  width: var(--bw-space-4);
  height: var(--bw-space-4);
}
</style>
