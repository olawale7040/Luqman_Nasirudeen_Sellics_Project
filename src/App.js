import { ThemeProvider } from "styled-components";
import GlobalStyles from "src/components/styles/GlobalStyles";
import HomePage from "./pages/Home/HomePage";
import { theme } from "./constant/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HomePage />
    </ThemeProvider>
  );
};

export default App;
