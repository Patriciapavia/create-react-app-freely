import { render, screen, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";
import Home from "./Home";

test("Should render home page", () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  const homePage = screen.getByTestId("home");
  expect(homePage).toBeInTheDocument();
  expect(homePage).toHaveTextContent("welcome to Freely");
  expect(homePage).toHaveTextContent("Start Date:");
  expect(homePage).toHaveTextContent("End Date:");
  expect(homePage).toHaveTextContent("Destination:");
});
