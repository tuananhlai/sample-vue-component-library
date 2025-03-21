import userEvent from "@testing-library/user-event";
import {
  cleanup,
  render,
  RenderOptions,
  RenderResult,
  screen,
} from "@testing-library/vue";
import { afterEach, describe, expect, it, vi } from "vitest";
import { nextTick } from "vue";
import { TextField } from "../src";

describe("TextField", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render", async () => {
    await renderTextField({});

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should render a label and associate it with the input when `label` prop is passed", async () => {
    await renderTextField({
      props: {
        label: "example",
      },
    });

    expect(
      screen.getByRole("textbox", { name: /example/i })
    ).toBeInTheDocument();
  });

  it("should render a description when `description` prop is passed", async () => {
    await renderTextField({
      props: {
        description: "example",
      },
    });

    const input = screen.getByRole("textbox");
    expect(input).toHaveAccessibleDescription("example");
  });

  it("should render an error message when `errorMessage` prop is passed", async () => {
    await renderTextField({
      props: {
        errorMessage: "error",
      },
    });

    const input = screen.getByRole("textbox");
    expect(input).toHaveAccessibleDescription("error");
  });

  it("should work with `v-model`", async () => {
    const onUpdate = vi.fn();

    await renderTextField({
      props: {
        modelValue: "example",
        "onUpdate:modelValue": onUpdate,
      },
    });

    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("example");

    await userEvent.type(input, "test");

    expect(onUpdate).toHaveBeenCalledWith("exampletest");
  });
});

const renderTextField = async (
  opts: RenderOptions<typeof TextField>
): Promise<RenderResult> => {
  const renderResult = render(TextField, opts);

  // Wait for `onMounted` to finish before continuing with
  // the assertions.
  // TODO: Figure out a way to avoid having to called `nextTick`.
  await nextTick();

  return renderResult;
};
