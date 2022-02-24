import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/extend-expect";

import Footer from "src/components/Footer";
import { theme } from "src/constant/theme";
import store from "src/store";

describe("Footer component test", () => {
  const handleUpdatePhoto = jest.fn();
  afterEach(cleanup);
  const renderComponent = (component) =>
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>{component}</ThemeProvider>
      </Provider>
    );

  test("should render right layout content", async () => {
    const { getByTestId } = renderComponent(
      <Footer isImage={false} handleUpdatePhoto={handleUpdatePhoto} />
    );

    expect(getByTestId("footer-container")).toBeInTheDocument();
    expect(getByTestId("default-text-instruction")).toHaveTextContent(
      "Click on the + in order to get images recommendation"
    );
  });

  test("Should display approve and reject buttons", async () => {
    const { getByTestId, queryByTestId } = renderComponent(
      <Footer isImage={true} handleUpdatePhoto={handleUpdatePhoto} />
    );

    expect(getByTestId("reject-button")).toBeInTheDocument();
    expect(getByTestId("approve-button")).toBeInTheDocument();
    expect(queryByTestId("default-text-instruction")).toBeNull();
  });

  //
  it("should call handleUpdatePhoto prop when approve button or reject button is clicked", async () => {
    const { getByTestId } = renderComponent(
      <Footer isImage={true} handleUpdatePhoto={handleUpdatePhoto} />
    );
    // Accept button
    fireEvent.click(getByTestId("approve-button"));
    expect(handleUpdatePhoto).toHaveBeenCalled();
    // Reject button
    fireEvent.click(getByTestId("reject-button"));
    expect(handleUpdatePhoto).toHaveBeenCalled();
  });
});
