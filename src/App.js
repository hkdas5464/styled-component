import { Container } from "./Component/styles/Container.styled";
import { ThemeProvider } from "styled-components";
import Footer from "./Component/Footer";
import { GlobalStyle } from "./Component/styles/Global";
import Header from "./Component/Header";
import Card from "./Component/Card";
import content from "../src/Component/content";
export default function App() {
  const theme = {
    colors: {
      header: "#ebfbff",
      body: "#fff",
      footer: "#003333"
    },
    mobile: "768"
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}
