<script lang="ts">
export interface FieldProps {}

export interface FieldEmits {}

export interface FieldSlots {
  default(): void;
}
</script>

<script setup lang="ts">
import { useField } from "./FieldContext";

const props = defineProps<FieldProps>();
const emits = defineEmits<FieldEmits>();
const slots = defineSlots<FieldSlots>();

useField();
</script>

<template>
  <div :class="$style.root">
    <slot />
  </div>
</template>

<style lang="scss" module>
.root {
}
</style>
