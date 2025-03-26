<script lang="ts">
export interface ButtonBaseProps extends AriaLabellingProps {
  loading?: boolean;

  id?: string;
  /** The form element to associate the button with */
  form?: string;
  /** The URL that processes the information submitted by the button */
  formAction?: string;
  /** How to encode the form data that is submitted */
  formEncType?: string;
  /** The HTTP method used to submit the form */
  formMethod?: string;
  /** Whether to skip form validation on submit */
  formNoValidate?: boolean;
  /** Override the form target */
  formTarget?: string;
  /** Name for the button when submitted with form data */
  name?: string;
  /** Value associated with the button's name in form data */
  value?: string;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** @default 'button' */
  type?: "button" | "submit" | "reset";

  /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed */
  "aria-expanded"?: boolean | "true" | "false";
  /** Indicates the availability and type of interactive popup element that can be triggered */
  "aria-haspopup"?:
    | boolean
    | "menu"
    | "listbox"
    | "tree"
    | "grid"
    | "dialog"
    | "true"
    | "false";
  /** Identifies the element(s) whose contents or presence are controlled by the current element */
  "aria-controls"?: string;
  /** Indicates the current "pressed" state of toggle buttons */
  "aria-pressed"?: boolean | "true" | "false" | "mixed";
  /** Indicates whether this element represents the current item within a container or set of related elements */
  "aria-current"?:
    | boolean
    | "true"
    | "false"
    | "page"
    | "step"
    | "location"
    | "date"
    | "time";
}

export interface ButtonBaseEmits {
  click: [MouseEvent];
  focus: [FocusEvent];
  blur: [FocusEvent];
  keydown: [KeyboardEvent];
  keyup: [KeyboardEvent];
}

export interface ButtonBaseSlots {
  default(): void;
}
</script>

<script setup lang="ts">
import { AriaLabellingProps } from "@/utils/AriaLabellingProps";

const props = defineProps<ButtonBaseProps>();
const emit = defineEmits<ButtonBaseEmits>();
const slots = defineSlots<ButtonBaseSlots>();

const doWhileNotLoading = (fn: () => void) => {
  if (props.loading) {
    return;
  }

  fn();
};
</script>

<template>
  <button
    :data-loading="loading || undefined"
    :id="id"
    :form="form"
    :formAction="formAction"
    :formEncType="formEncType"
    :formMethod="formMethod"
    :formNoValidate="formNoValidate"
    :formTarget="formTarget"
    :name="name"
    :value="value"
    :disabled="disabled"
    :type="type"
    :aria-expanded="props['aria-expanded']"
    :aria-haspopup="props['aria-haspopup']"
    :aria-controls="props['aria-controls']"
    :aria-pressed="props['aria-pressed']"
    :aria-current="props['aria-current']"
    :aria-label="props['aria-label']"
    :aria-labelledby="props['aria-labelledby']"
    :aria-describedby="props['aria-describedby']"
    :aria-details="props['aria-details']"
    :aria-disabled="loading ? true : undefined"
    @click="(e: MouseEvent) => doWhileNotLoading(() => emit('click', e))"
    @focus="(e) => emit('focus', e)"
    @blur="(e) => emit('blur', e)"
    @keydown="(e) => doWhileNotLoading(() => emit('keydown', e))"
    @keyup="(e) => doWhileNotLoading(() => emit('keyup', e))"
  >
    <slot />
  </button>
</template>
