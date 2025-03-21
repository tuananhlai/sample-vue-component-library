import { cleanup, render, screen } from "@testing-library/vue";
import { afterEach, describe, expect, it } from "vitest";
import { nextTick } from "vue";
import { TextField } from "../src";

describe("TextField", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render", () => {
    render(TextField);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should render a label and associate it with the input when `label` prop is passed", async () => {
    render(TextField, {
      props: {
        label: "example",
      },
    });

    // Wait for `onMounted` to finish before continuing with
    // the assertions.
    // TODO: Figure out a way to avoid having to called `nextTick`.
    await nextTick();

    expect(
      screen.getByRole("textbox", { name: /example/i })
    ).toBeInTheDocument();
  });
});
