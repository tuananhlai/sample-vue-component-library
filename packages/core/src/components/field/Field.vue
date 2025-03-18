<script lang="ts">
export interface FieldSlots {
  default(): void;
}
</script>

<script setup lang="ts">
import { useField } from "./FieldContext";

const slots = defineSlots<FieldSlots>();

useField();
</script>

<template>
  <div>
    <slot />
  </div>
</template>
