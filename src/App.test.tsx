import React from "react";
import { render, screen } from "@testing-library/react";
import AppSelector from "./AppSelector";

test("renders initial count", () => {
  render(<AppSelector />);
  const zero = screen.getByText("0");
  expect(zero).toBeInTheDocument();
});
