<script lang="ts">
export interface ButtonProps {
  /** @default 'primary' */
  variant?: "primary" | "secondary" | "tertiary";
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
  /** Defines a string value that labels the current element */
  "aria-label"?: string;
  /** Identifies the element(s) that labels the current element */
  "aria-labelledby"?: string;
  /** Identifies the element(s) that describes the object */
  "aria-describedby"?: string;
  /** Identifies the element that provides a detailed, extended description for the object */
  "aria-details"?: string;
}

export interface ButtonEmits {
  click: [MouseEvent];
  focus: [FocusEvent];
  blur: [FocusEvent];
  keydown: [KeyboardEvent];
  keyup: [KeyboardEvent];
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<ButtonProps>(), {
  variant: "primary",
});

const emit = defineEmits<ButtonEmits>();

const doWhileNotLoading = <T extends (...args: any[]) => any>(fn: T) => {
  return (...args: Parameters<T>): ReturnType<T> | void => {
    if (props.loading) {
      return;
    }
    return fn(...args);
  };
};
</script>

<template>
  <button
    :class="$style.root"
    :data-variant="variant"
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
    @click="doWhileNotLoading((e: MouseEvent) => emit('click', e))"
    @focus="(e) => emit('focus', e)"
    @blur="(e) => emit('blur', e)"
    @keydown="doWhileNotLoading((e: KeyboardEvent) => emit('keydown', e))"
    @keyup="doWhileNotLoading((e: KeyboardEvent) => emit('keyup', e))"
  >
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
