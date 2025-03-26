<script lang="ts">
export interface CheckboxGroupFieldProps
  extends FieldComponentProps,
    CheckboxGroupProps {}

export interface CheckboxGroupFieldEmits extends CheckboxGroupEmits {}

export interface CheckboxGroupFieldSlots extends FieldComponentSlots {
  default(): void;
}
</script>

<script lang="ts" setup>
import {
  FieldComponentProps,
  FieldComponentSlots,
} from "@/utils/FieldComponent";
import { useForwardPropsEmits } from "reka-ui";
import { computed } from "vue";
import { Description, ErrorMessage, Field, Label } from "../field";
import CheckboxGroup, {
  CheckboxGroupEmits,
  CheckboxGroupProps,
} from "./CheckboxGroup.vue";

const props = defineProps<CheckboxGroupFieldProps>();
const emits = defineEmits<CheckboxGroupFieldEmits>();
const slots = defineSlots<CheckboxGroupFieldSlots>();

const checkboxGroupProps = computed<CheckboxGroupProps>(() => {
  const { label, description, errorMessage, ...rest } = props;
  return rest;
});
const checkboxGroupForwarded = useForwardPropsEmits(checkboxGroupProps, emits);
</script>

<template>
  <Field :class="$style.root">
    <Label v-if="slots.label || props.label">
      <slot name="label">
        {{ props.label }}
      </slot>
    </Label>
    <CheckboxGroup v-bind="checkboxGroupForwarded">
      <slot />
    </CheckboxGroup>
    <Description v-if="slots.description || props.description">
      <slot name="description">
        {{ props.description }}
      </slot>
    </Description>
    <ErrorMessage
      v-if="slots.errorMessage || props.errorMessage"
      :error-message="props.errorMessage"
    >
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
