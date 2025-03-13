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
  <button :class="$style.root" :data-variant="variant">
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
  --btn-hover-background-color: initial;

  &:where([data-variant="primary"]) {
    background: var(--bw-button-primary-background-color);
    color: var(--bw-button-primary-color);
    --btn-hover-background-color: var(
      --bw-button-primary-hover-background-color
    );
  }

  &:where([data-variant="secondary"]) {
    background: var(--bw-button-secondary-background-color);
    color: var(--bw-button-secondary-color);
    --btn-hover-background-color: var(
      --bw-button-secondary-hover-background-color
    );
  }

  &:where([data-variant="tertiary"]) {
    background: var(--bw-button-tertiary-background-color);
    color: var(--bw-button-tertiary-color);
    box-shadow: none;
    --btn-hover-background-color: var(
      --bw-button-tertiary-hover-background-color
    );
  }

  &:where(:hover) {
    background-color: var(--btn-hover-background-color);
  }
}
</style>
