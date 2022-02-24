import { render, cleanup } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom/extend-expect";
import Header from "src/components/Header";
import { theme } from "src/constant/theme";

describe("Header component test", () => {
  afterEach(cleanup);
  const renderComponent = (component) =>
    render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);

  test("should render right layout", async () => {
    const { getByTestId } = renderComponent(<Header />);
    expect(getByTestId("app-header")).toBeInTheDocument();
    expect(getByTestId("header-brand-name")).toHaveTextContent(
      "IMAGE APPROVAL APPLICATION"
    );
  });
});
