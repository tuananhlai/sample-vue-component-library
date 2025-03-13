<script setup lang="ts">
import { Button } from "@tuananhlai/sample-design-system";
</script>

<template>
  <div :class="$style.root">
    <Button>Click me</Button>
    <Button variant="secondary">Click me</Button>
    <Button variant="tertiary">Click me</Button>
  </div>
</template>

<style lang="css" module>
.root {
  display: flex;
  gap: var(--bw-space-2);
}
</style>
