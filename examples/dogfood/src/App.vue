<script setup lang="ts">
import {
  Button,
  Checkbox,
  Input,
  type InputExpose,
} from "@tuananhlai/sample-design-system";
import { ref, useTemplateRef } from "vue";

const isChecked = ref(false);

const inputRef = useTemplateRef<InputExpose>("inputRef");

const focus = () => {
  inputRef.value?.$el?.focus();
};
</script>

<template>
  <div :class="$style.root">
    <Button>Click me</Button>
    <Button variant="secondary">Click me</Button>
    <Button variant="tertiary">Click me</Button>
    <Checkbox v-model="isChecked">Check me</Checkbox>
    <Input ref="inputRef" placeholder="Enter your name" />
    <Button @click="focus">Focus</Button>
  </div>
</template>

<style lang="css" module>
.root {
  display: flex;
  gap: var(--bw-space-2);
}
</style>
