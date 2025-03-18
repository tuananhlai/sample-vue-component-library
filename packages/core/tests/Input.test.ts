import { cleanup, fireEvent, render, screen } from "@testing-library/vue";
import { afterEach, describe, expect, it } from "vitest";
import { TextInput } from "../src";

describe("Input", () => {
  afterEach(() => {
    cleanup();
  });

  it("should have the correct role", () => {
    render(TextInput);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders with placeholder", () => {
    render(TextInput, {
      props: {
        placeholder: "Enter your name",
      },
    });

    expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();
  });

  it("renders with v-model", async () => {
    const { emitted } = render(TextInput, {
      props: {
        modelValue: "Initial value",
      },
    });

    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("Initial value");

    // Change the input value
    await fireEvent.update(input, "New value");

    // Check if update:modelValue was emitted with the new value
    expect(emitted("update:modelValue")).toBeTruthy();
    expect(emitted("update:modelValue")?.[0]).toEqual(["New value"]);
  });

  it("should be disabled when disabled prop is true", () => {
    render(TextInput, {
      props: {
        disabled: true,
      },
    });

    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
  });

  it("should be required when required prop is true", () => {
    render(TextInput, {
      props: {
        required: true,
      },
    });

    const input = screen.getByRole("textbox");
    expect(input).toBeRequired();
  });
});
