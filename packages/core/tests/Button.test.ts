import { cleanup, render, screen } from "@testing-library/vue";
import { afterEach, describe, expect, it } from "vitest";
import { Button } from "../src";

describe("Button", () => {
  afterEach(() => {
    cleanup();
  });

  it("should have the correct role", () => {
    render(Button);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should be disabled when `loading` prop is true", () => {
    render(Button, {
      props: {
        loading: true,
      },
    });

    expect(screen.getByRole("button")).toHaveAttribute("aria-disabled", "true");
  });
});
