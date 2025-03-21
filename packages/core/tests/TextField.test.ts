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

  it("should be associated with label", async () => {
    render(TextField, {
      props: {
        label: "example",
      },
    });

    await nextTick();

    expect(
      screen.getByRole("textbox", { name: /example/i })
    ).toBeInTheDocument();
  });
});
