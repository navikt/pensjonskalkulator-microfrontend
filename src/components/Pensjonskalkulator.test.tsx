import { describe, expect, it } from "vitest";
import { render, screen } from "../utils/test-utils";
import Pensjonskalkulator from "./Pensjonskalkulator";

describe("Simple test for Pensjonskalkulator", () => {
  it("has a text", () => {
    render(<Pensjonskalkulator />);
    expect(screen.getByText(/Pensjonskalkulator/)).toBeDefined();
  });
});
