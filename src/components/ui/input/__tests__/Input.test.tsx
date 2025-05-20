import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import { ThemeProvider } from "styled-components";

import { Input } from "../Input";
import { theme } from "../../../../styles";

describe("Input suite tests", () => {
  const pureComponent = <Input label={"Input test"} onChange={vi.fn()} />;
  it("Should render Input on screen", () => {
    render(pureComponent);

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("Should render label text", () => {
    render(<Input label={"Label Test"} onChange={vi.fn()} />);

    const label = screen.getByText("Label Test");
    expect(label).toBeInTheDocument();
  });

  it("Should change Input border if error is true", () => {
    render(
      <ThemeProvider theme={theme}>
        <Input label={"Input test"} onChange={vi.fn()} error={true} />
      </ThemeProvider>
    );

    const input = screen.getByRole("textbox");
    expect(input).toHaveStyle(`border-color: ${theme.colors.danger}`);
  });

  it("Should fire onChange event", () => {
    const handleChangeMock = vi.fn();
    render(<Input label={"Label Test"} onChange={handleChangeMock} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "on change the input value" } });
    
    expect(handleChangeMock).toHaveBeenCalled();
    expect(input).toHaveValue("on change the input value");
  });
});
