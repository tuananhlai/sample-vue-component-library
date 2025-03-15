<script lang="ts">
export interface InputProps {
  modelValue?: string;
  invalid?: boolean;
  type?:
    | "text"
    | "search"
    | "url"
    | "tel"
    | "email"
    | "password"
    | (string & {});
  placeholder?: string;
  name?: string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  autofocus?: boolean;
  autocomplete?: AutoFill;
  minlength?: number;
  maxlength?: number;
  pattern?: string;
  spellcheck?: boolean;
  enterkeyhint?:
    | "enter"
    | "done"
    | "go"
    | "next"
    | "previous"
    | "search"
    | "send";
  inputmode?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";
}

export interface InputEmits {
  "update:modelValue": [value: string];
  blur: [event: FocusEvent];
  focus: [event: FocusEvent];
  change: [event: Event];

  keydown: [event: KeyboardEvent];
  keyup: [event: KeyboardEvent];
  keypress: [event: KeyboardEvent];
}
</script>

<script setup lang="ts">

defineProps<InputProps>();

const emits = defineEmits<InputEmits>();

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emits("update:modelValue", target.value);
};
</script>

<template>
  <div :class="$style.root">
    <input
      :invalid="invalid"
      :class="$style.input"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :required="required"
      :autofocus="autofocus"
      :autocomplete="autocomplete"
      :minlength="minlength"
      :maxlength="maxlength"
      :pattern="pattern"
      :spellcheck="spellcheck"
      :enterkeyhint="enterkeyhint"
      :inputmode="inputmode"
      @input="onInput"
      @blur="(e) => emits('blur', e)"
      @change="(e) => emits('change', e)"
      @focus="(e) => emits('focus', e)"
      @keydown="(e) => emits('keydown', e)"
      @keyup="(e) => emits('keyup', e)"
      @keypress="(e) => emits('keypress', e)"
    />
  </div>
</template>

<style lang="scss" module>
.root {
  display: flex;
}

.input {
  width: 100%;
  padding: var(--bw-space-2) var(--bw-space-3);
  border-radius: var(--bw-radius-md);
  border: 1px solid var(--bw-color-zinc-300);
  font-size: var(--bw-font-base);
  line-height: var(--bw-line-normal);
  background: var(--bw-color-white);
  color: var(--bw-color-zinc-900);

  &::placeholder {
    color: var(--bw-color-zinc-400);
  }

  &:focus {
    outline: 2px solid var(--bw-color-primary);
    outline-offset: -2px;
    border-color: var(--bw-color-primary);
  }
}
</style>
