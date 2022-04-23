import Header from "../components/header";
import { useTheme, ThemeProvider, withTheme } from "@emotion/react";
import "../styles/globals.css";
import GlobalStyles from "../components/component/GlobalStyles/GlobalStyles";

const theme = {
  colors: {
    primary: "#efefef",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
