import { cleanup, render, screen } from "@testing-library/vue";
import { afterEach, describe, expect, it } from "vitest";
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

    expect(
      screen.getByRole("textbox", { name: /example/i })
    ).toBeInTheDocument();
  });
});
