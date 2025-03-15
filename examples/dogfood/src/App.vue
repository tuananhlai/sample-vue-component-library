<script setup lang="ts">
import { Button, Checkbox, Input } from "@tuananhlai/sample-design-system";
import { ref } from "vue";

const isChecked = ref(false);
</script>

<template>
  <div :class="$style.root">
    <Button>Click me</Button>
    <Button variant="secondary">Click me</Button>
    <Button variant="tertiary">Click me</Button>
    <Checkbox v-model="isChecked">Check me</Checkbox>
    <Input placeholder="Enter your name" />
  </div>
</template>

<style lang="css" module>
.root {
  display: flex;
  gap: var(--bw-space-2);
}
</style>
