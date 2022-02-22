import { ThemeProvider } from "styled-components";
import GlobalStyles from "src/components/styles/GlobalStyles";
import HomePage from "./pages/Home";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HomePage />
    </ThemeProvider>
  );
};

export default App;
