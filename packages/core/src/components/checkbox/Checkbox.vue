<script lang="ts">
export interface CheckboxProps {
  modelValue: boolean;
}

export interface CheckboxEmits {
  "update:modelValue": [boolean];
}
</script>

<script setup lang="ts">
import { CheckboxRoot } from "reka-ui";
import { useVModel } from "@vueuse/core";

const props = defineProps<CheckboxProps>();
const emits = defineEmits<CheckboxEmits>();

const value = useVModel(props, "modelValue", emits);
</script>

<template>
  <CheckboxRoot v-model="value" :class="$style.root">
    <CheckboxIndicator :class="$style.indicator" />
    <slot />
  </CheckboxRoot>
</template>

<style lang="scss" module>
.root {
  display: flex;
  align-items: center;
  gap: var(--bw-space-2);
}

.indicator {
  width: var(--bw-space-4);
  height: var(--bw-space-4);
  border-radius: var(--bw-radius-sm);
  background-color: var(--bw-color-blue-600);
}
</style>
