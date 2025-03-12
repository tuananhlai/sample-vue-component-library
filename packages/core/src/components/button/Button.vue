<script lang="ts">
export interface ButtonProps {
  /** @default 'primary' */
  variant?: "primary" | "secondary" | "tertiary";
}
</script>

<script setup lang="ts">
withDefaults(defineProps<ButtonProps>(), {
  variant: "primary",
});
</script>

<template>
  <button :class="$style.root">
    <slot />
  </button>
</template>

<style lang="scss" module>
.root {
  border-radius: var(--bw-radius-md);
  font-size: var(--bw-font-base);
  font-weight: var(--bw-weight-medium);
  line-height: var(--bw-line-normal);
  padding: var(--bw-space-2) var(--bw-space-4);
  cursor: pointer;
  border: none;
  box-shadow: var(--bw-shadow-sm);

  &:where([data-variant="primary"]) {
    background: var(--bw-color-blue-600);
    color: var(--bw-color-white);
  }

  &:where([data-variant="secondary"]) {
    background: var(--bw-color-zinc-200);
    color: var(--bw-color-zinc-800);
  }

  &:where([data-variant="tertiary"]) {
    background: transparent;
    color: var(--bw-color-blue-600);
    box-shadow: none;
  }
}
</style>
