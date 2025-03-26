<script lang="ts">
export interface TextFieldProps extends TextInputProps {
  label?: string;
  description?: string;
  errorMessage?: string;
}

export interface TextFieldEmits extends TextInputEmits {}

export interface TextFieldSlots {
  /** The label of the text field. Overrides the `label` prop. */
  label?(): void;
  /** The description of the text field. Overrides the `description` prop. */
  description?(): void;
  /** The error message of the text field. Overrides the `errorMessage` prop. */
  errorMessage?(): void;
}

export interface TextFieldExpose {
  input: HTMLInputElement | null;
}
</script>

<script setup lang="ts">
import { useForwardPropsEmits } from "reka-ui";
import { useTemplateRef } from "vue";
import { Description, ErrorMessage, Field, Label } from "../field";
import TextInput, {
  TextInputEmits,
  TextInputExpose,
  TextInputProps,
} from "./TextInput.vue";

const props = defineProps<TextFieldProps>();
const emits = defineEmits<TextFieldEmits>();
const slots = defineSlots<TextFieldSlots>();

const textInputRef = useTemplateRef<TextInputExpose>("text-input-ref");
const forwarded = useForwardPropsEmits(props, emits);

defineExpose<TextFieldExpose>({
  get input() {
    return textInputRef.value?.domNode ?? null;
  },
});
</script>

<template>
  <Field :class="$style.root">
    <Label v-if="slots.label || props.label">
      <slot name="label">
        {{ props.label }}
      </slot>
    </Label>
    <TextInput ref="text-input-ref" v-bind="forwarded" />
    <Description v-if="slots.description || props.description">
      <slot name="description">
        {{ props.description }}
      </slot>
    </Description>
    <ErrorMessage v-if="slots.errorMessage || props.errorMessage">
      <slot name="errorMessage">
        {{ props.errorMessage }}
      </slot>
    </ErrorMessage>
  </Field>
</template>

<style lang="scss" module>
.root {
  display: flex;
  flex-direction: column;
}
</style>
