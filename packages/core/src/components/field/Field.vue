<script lang="ts">
export interface FieldProps {}

export interface FieldEmits {}

export interface FieldSlots {
  default(): void;
}
</script>

<script setup lang="ts">
import { ref } from "vue";
import { provideFieldContext } from "./FieldContext";

const props = defineProps<FieldProps>();
const emits = defineEmits<FieldEmits>();
const slots = defineSlots<FieldSlots>();

provideFieldContext({
  labelID: ref<string | undefined>(),
  descriptionID: ref<string | undefined>(),
  formControlID: ref<string | undefined>(),
  errorMessageID: ref<string | undefined>(),
});
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
