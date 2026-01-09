import React from "react";
import { render } from "@testing-library/react";
import App from "../src/components/App";
describe("App component", () => {
  it("renders", () => {
    const result = render(<App />);
    expect(result.getByText("Fitzrovia")).toBeInTheDocument();
    expect(result.getByText("6 Restaurants")).toBeInTheDocument();
  });
});