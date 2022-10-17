import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store/index";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import theme from "../utils/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
