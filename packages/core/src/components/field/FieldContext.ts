import { inject, provide, Ref } from "vue";

const contextKey = Symbol("FieldContext");

export type FieldContextValue = {
  labelID: Ref<string | undefined>;
  descriptionID: Ref<string | undefined>;
  formControlID: Ref<string | undefined>;
  errorMessageID: Ref<string | undefined>;
};

export const provideFieldContext = (value: FieldContextValue) => {
  provide(contextKey, value);
};

export const useFieldContext = (): FieldContextValue | undefined => {
  return inject<FieldContextValue>(contextKey);
};
