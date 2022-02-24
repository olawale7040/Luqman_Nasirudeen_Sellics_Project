import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/extend-expect";
import store from "src/store";
// Actions
import { fetchRandomPhotos } from "src/slices/imageList";
// Samples
import { photosSample } from "src/constant/samplesData";

import HomePage from "src/pages/Home/HomePage";
import { theme } from "src/constant/theme";

describe("Home component test", () => {
  afterEach(cleanup);
  const renderComponent = (component) =>
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>{component}</ThemeProvider>
      </Provider>
    );

  test("should render right layout and loading container while loading photos", async () => {
    const { getByTestId, queryByTestId } = renderComponent(<HomePage />);
    // home page container
    expect(getByTestId("home-page-wrapper")).toBeInTheDocument();
    // Loading Div
    expect(getByTestId("loading-container")).toBeInTheDocument();

    expect(queryByTestId("current-view-image")).toBeNull();
    expect(queryByTestId("view-photo-box")).toBeNull();
  });

  test("Dispatch random photos to the store", async () => {
    store.dispatch(fetchRandomPhotos(photosSample));
    const { getByTestId, queryByTestId } = renderComponent(<HomePage />);
    // Assert array of random photos in the store
    const { imageList } = store.getState();
    expect(imageList.randomPhotos).toEqual(expect.any(Array));
    expect(imageList.randomPhotos.length).toEqual(3);
    // Loading shouldn't be in the document
    expect(queryByTestId("loading-container")).toBeNull();
    // assert view photo box
    expect(getByTestId("view-photo-box")).toBeInTheDocument();
  });

  test("Should display image when plus button is clicked", async () => {
    store.dispatch(fetchRandomPhotos(photosSample));
    const { getByTestId } = renderComponent(<HomePage />);

    expect(getByTestId("plus-button")).toBeInTheDocument();
    fireEvent.click(getByTestId("plus-button"));
  });
});
