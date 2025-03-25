import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import { Button } from "../src";

describe("Button", () => {
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

  it("should trigger `click` event when clicked", async () => {
    const { emitted } = render(Button);

    await userEvent.click(screen.getByRole("button"));

    expect(emitted("click")).toBeTruthy();
  });
});
