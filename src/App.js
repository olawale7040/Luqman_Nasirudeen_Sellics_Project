import { ThemeProvider } from "styled-components";
import GlobalStyles from "src/components/styles/GlobalStyles";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import { Button } from "./components/styles/Button.styled";
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
      <div>
        <Header />
        <Container>
          <Button>Approve Image</Button>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default App;
