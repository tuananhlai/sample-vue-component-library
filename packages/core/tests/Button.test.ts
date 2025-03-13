import { render, screen } from "@testing-library/vue";
import { expect, it } from "vitest";
import { Button } from "../src";

it("should have the correct role", () => {
  render(Button);

  expect(screen.getByRole("button")).toBeInTheDocument();
});
