import App from "next/app";
import {ThemeProvider} from "@emotion/react";
import theme from "../theme/theme.js";
// import SEO from "../next-seo.config";
import {Provider} from "react-redux";
import store from "../store/store";
import "antd/dist/antd.css";
class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props;

    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default MyApp;
