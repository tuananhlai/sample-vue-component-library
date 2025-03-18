<script lang="ts">
export interface LabelProps {
  id?: string;
}

export interface LabelSlots {
  default(): void;
}
</script>

<script lang="ts" setup>
import { Label, useId } from "reka-ui";
import { computed, ComputedRef, onMounted } from "vue";
import { useFieldContext } from "./FieldContext";

const props = defineProps<LabelProps>();
const slots = defineSlots<LabelSlots>();

const labelID = useId(props.id);
const fieldContextValue = useFieldContext();
onMounted(() => fieldContextValue?.registerLabel(labelID));

const componentAs: ComputedRef<"span" | "label"> = computed(() => {
  return fieldContextValue?.formControlID.value != null ? "label" : "span";
});
</script>

<template>
  <Label
    :as="componentAs"
    :id="labelID"
    :for="fieldContextValue?.formControlID.value"
  >
    <slot />
  </Label>
</template>

<style lang="scss" module></style>
