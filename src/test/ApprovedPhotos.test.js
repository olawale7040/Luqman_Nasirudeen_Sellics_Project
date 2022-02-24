import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/extend-expect";

import ApprovedPhotos from "src/components/ApprovedPhotos";
import { theme } from "src/constant/theme";
import store from "src/store";
// Actions
import { fetchRandomPhotos, updatePhotos } from "src/slices/imageList";
// Samples
import { photosSample, updatePhotoSample } from "src/constant/samplesData";

describe("ApprovedPhotos component test", () => {
  const handleShowImage = jest.fn();

  afterEach(cleanup);
  const renderComponent = (component) =>
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>{component}</ThemeProvider>
      </Provider>
    );

  test("Default approved photos should be 0", async () => {
    const { getByTestId } = renderComponent(<ApprovedPhotos />);

    expect(getByTestId("section-title")).toBeInTheDocument();
    expect(getByTestId("total-approved-photos")).toHaveTextContent("0");
  });

  test("Approved photos should not be in the document", async () => {
    const { queryByTestId, getByTestId } = renderComponent(<ApprovedPhotos />);
    expect(getByTestId("get-image-btn")).toBeInTheDocument();
    expect(queryByTestId("approved-photos")).toBeNull();
  });

  it("should call handleShowImage prop when plus button is clicked", async () => {
    const { getByTestId } = renderComponent(
      <ApprovedPhotos handleShowImage={handleShowImage} />
    );
    expect(getByTestId("get-image-btn")).toBeInTheDocument();
    fireEvent.click(getByTestId("plus-btn"));
    expect(handleShowImage).toHaveBeenCalled();
  });

  //   Should display list of approved -photos
  test("Should display list of approved -photos", async () => {
    jest.spyOn(React, "useEffect").mockImplementation((f) => f());
    store.dispatch(fetchRandomPhotos(photosSample));
    store.dispatch(updatePhotos(updatePhotoSample));
    const { getByTestId } = renderComponent(
      <ApprovedPhotos handleShowImage={handleShowImage} />
    );
    const { imageList } = store.getState();
    expect(imageList.approvedPhotos).toEqual(expect.any(Array));
    expect(getByTestId("approved-photos")).toBeInTheDocument();
    expect(getByTestId("total-approved-photos")).toHaveTextContent("1");
  });
});
