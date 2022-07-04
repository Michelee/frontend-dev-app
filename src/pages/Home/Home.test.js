import React from "react";
import { Router } from "react-router-dom";
import { screen, render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import Home from ".";

test("renders learn react link", () => {
  const history = createMemoryHistory();

  render(
    <Provider store={store}>
      <Router location={history.location} navigator={history}>
        <Home />
      </Router>
    </Provider>
  );

  expect(screen.getByText(/A selection of projects/i)).toBeInTheDocument();
});
