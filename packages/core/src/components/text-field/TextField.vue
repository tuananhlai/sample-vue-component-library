<script lang="ts">
export interface TextFieldProps extends TextInputProps {
  label?: string;
  description?: string;
  errorMessage?: string;
}

export interface TextFieldEmits extends TextInputEmits {}

export interface TextFieldSlots {
  label?(): void;
  description?(): void;
  errorMessage?(): void;
}
</script>

<script setup lang="ts">
import { Description, ErrorMessage, Field, Label } from "../field";
import TextInput, { TextInputEmits, TextInputProps } from "./TextInput.vue";

const props = defineProps<TextFieldProps>();
const emits = defineEmits<TextFieldEmits>();
const slots = defineSlots<TextFieldSlots>();
</script>

<template>
  <Field :class="$style.root">
    <Label v-if="slots.label || props.label">
      <slot name="label" v-if="slots.label" />
      <template v-else>{{ props.label }}</template>
    </Label>
    <TextInput v-bind="$attrs" />
    <Description v-if="slots.description || props.description">
      <slot name="description" v-if="slots.description" />
      <template v-else>{{ props.description }}</template>
    </Description>
    <ErrorMessage v-if="slots.errorMessage || props.errorMessage">
      <slot name="errorMessage" v-if="slots.errorMessage" />
      <template v-else>{{ props.errorMessage }}</template>
    </ErrorMessage>
  </Field>
</template>

<style lang="scss" module>
.root {
  display: flex;
  flex-direction: column;
}
</style>
