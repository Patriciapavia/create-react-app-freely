import { render, screen, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";
import Trips from "./Trips";

test("Should render Trips page", () => {
  render(
    <Provider store={store}>
      <Trips />
    </Provider>
  );
  const tripsPage = screen.getByTestId("trips");
  expect(tripsPage).toBeInTheDocument();
  expect(tripsPage).toHaveTextContent("Title:");
  expect(tripsPage).toHaveTextContent("Start Date:");
  expect(tripsPage).toHaveTextContent("End Date:");
});
