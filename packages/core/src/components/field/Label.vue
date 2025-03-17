<script lang="ts">
export interface LabelProps {
  id?: string;
}

export interface LabelSlots {
  default(): void;
}
</script>

<script lang="ts" setup>
import { Label } from "reka-ui";
import { useId } from "vue";
import { useFieldContext } from "./FieldContext";

const props = defineProps<LabelProps>();
const slots = defineSlots<LabelSlots>();

const finalID = props.id ?? useId();
const fieldContextValue = useFieldContext();
if (fieldContextValue != null) {
  fieldContextValue.labelID.value = finalID;
}
</script>

<template>
  <Label :id="finalID" :for="fieldContextValue?.formControlID.value">
    <slot />
  </Label>
</template>

<style lang="scss" module></style>
