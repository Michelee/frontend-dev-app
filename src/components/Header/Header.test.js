import React from "react";
import { screen, render, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from ".";
import pageLinks from "../../constants/pageLinks";

describe("Header Tests", () => {
  it("Should render the page logo", () => {
    render(<Header pageLinks={pageLinks} />, { wrapper: MemoryRouter });
    expect(screen.getByTestId("page-logo")).toBeInTheDocument();
  });

  it("Should render 6 main links", () => {
    render(<Header pageLinks={pageLinks} />, { wrapper: MemoryRouter });
    const list = screen.getByRole("list", {
      name: /main-links/i,
    })
    const { getAllByRole } = within(list)
    const items = getAllByRole("listitem")
    expect(items.length).toBe(6)
  });
});
