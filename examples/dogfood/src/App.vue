<script setup lang="ts">
import {
  Button,
  Checkbox,
  TextField,
  type TextFieldExpose,
} from "@tuananhlai/sample-design-system";
import { ref, useTemplateRef } from "vue";

const isChecked = ref(false);

const textFieldRef = useTemplateRef<TextFieldExpose>("text-field-ref");

const focus = () => {
  textFieldRef.value?.input?.focus();
};
</script>

<template>
  <div :class="$style.root">
    <Button>Click me</Button>
    <Button variant="secondary">Click me</Button>
    <Button variant="tertiary">Click me</Button>
    <Checkbox v-model="isChecked">Check me</Checkbox>
    <TextField ref="text-field-ref" label="Enter your name" />
    <Button @click="focus">Focus</Button>
  </div>
</template>

<style lang="css" module>
.root {
  display: flex;
  gap: var(--bw-space-2);
  align-items: center;
}
</style>
