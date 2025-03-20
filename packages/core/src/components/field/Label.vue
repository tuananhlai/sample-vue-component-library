<script lang="ts">
export interface LabelProps {
  id?: string;
  /** True to display a required indicator. */
  required?: boolean;
  /** True to display the disabled variant of the label. */
  disabled?: boolean;
}

export interface LabelSlots {
  default(): void;
}
</script>

<script lang="ts" setup>
import { Label, useId } from "reka-ui";
import { computed, ComputedRef, onUnmounted } from "vue";
import { useFieldContext } from "./FieldContext";

const props = defineProps<LabelProps>();
const slots = defineSlots<LabelSlots>();

const labelID = useId(props.id);
const fieldContextValue = useFieldContext();
onUnmounted(fieldContextValue?.registerLabel(labelID));

const componentAs: ComputedRef<"span" | "label"> = computed(() => {
  return fieldContextValue?.formControlID.value != null ? "label" : "span";
});
</script>

<template>
  <Label
    :as="componentAs"
    :id="labelID"
    :for="fieldContextValue?.formControlID.value"
    :data-required="props.required || undefined"
    :data-disabled="props.disabled || undefined"
  >
    <slot />
  </Label>
</template>

<style lang="scss" module>
.root {
  font-weight: var(--bw-weight-medium);
}
</style>
