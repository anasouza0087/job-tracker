import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";

import { Text } from "../Text";

describe("Text component suite tests", () => {
  it("should render Text component on screen", () => {
    render(
      <Text color={"yellow"} size={"20px"} as={"h2"}>
        Testeeee
      </Text>
    );

    const text = screen.getByText("Testeeee");
    expect(text).toBeInTheDocument();
  });

  it("should render component as the prop", () => {
    render(
      <Text color={"yellow"} size={"20px"} as={"p"}>
        Teste com parágrafo
      </Text>
    );

    const text = screen.getByRole("paragraph");
    expect(text).toBeInTheDocument();
  });
});
