import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import { Button } from "../Button";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../../styles";

describe("button suite tests", () => {
  it("should render button component on screen", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button variant={"primary"} label={"Click me"} onClick={vi.fn} />
      </ThemeProvider>
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
