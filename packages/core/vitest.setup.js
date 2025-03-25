import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/vue";
import { afterEach } from "vitest";

// Call `cleanup()` to reset the JSDOM environment after each test.
afterEach(() => {
  cleanup();
});
