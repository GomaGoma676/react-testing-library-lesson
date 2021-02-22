import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ClickRender from "./ClickRender";

afterEach(() => cleanup());

describe("User Event test", () => {
  it("Should increment by 1 per click", () => {
    render(<ClickRender />);
    expect(screen.getByRole("heading")).toHaveTextContent(0);
    userEvent.click(screen.getByText("Click"));
    userEvent.click(screen.getByText("Click"));
    expect(screen.getByRole("heading")).toHaveTextContent(2);
  });
});
