import Document, {Html, Head, Main, NextScript} from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Wizard css */}
          <link rel="canonical" href="https://keenthemes.com/metronic" />
          <link
            href="/assets/css/pages/wizard/wizard-3.css?v=7.0.5"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="/assets2/css/pages/wizard/wizard-61ff3.css?v=7.1.2"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="/assets2/plugins/global/plugins.bundle1ff3.css?v=7.1.2"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="/assets2/plugins/custom/prismjs/prismjs.bundle1ff3.css?v=7.1.2"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="/assets2/css/style.bundle1ff3.css?v=7.1.2"
            rel="stylesheet"
            type="text/css"
          />
          {/* Overview css */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"
          />
          <link
            href="/assets/css/pages/login/classic/login-4.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="/assets/plugins/global/plugins.bundle.css?v=7.0.5"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="/assets/plugins/custom/prismjs/prismjs.bundle.css?v=7.0.5"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="/assets/css/style.bundle.css?v=7.0.5"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="/assets/css/themes/layout/header/base/light.css?v=7.0.5"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="/assets/css/themes/layout/header/menu/light.css?v=7.0.5"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="/assets/css/themes/layout/brand/dark.css?v=7.0.5"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="/assets/css/themes/layout/aside/dark.css?v=7.0.5"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="/assets/plugins/custom/fullcalendar/fullcalendar.bundle.css?v=7.0.5"
            rel="stylesheet"
            type="text/css"
          />
          <link rel="shortcut icon" href="/assets/media/logos/favicon.ico" />
          {/* Script */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-5FS8GGP"
              height="0"
              width="0"
              style={{display: "none", visibility: "hidden"}}
            ></iframe>
          </noscript>
        </Head>
        <body
          id="kt_body"
          className="header-fixed header-mobile-fixed header-bottom-enabled subheader-enabled page-loading"
          style={{background: "#EEF0F8"}}
        >
          <Main />
          <NextScript />
          <script src="/assets/js/jquery.min.js"></script>
          <script src="/assets2/plugins/global/plugins.bundle1ff3.js?v=7.1.2"></script>
          <script src="/assets2/plugins/custom/prismjs/prismjs.bundle1ff3.js?v=7.1.2"></script>
          <script src="/assets2/js/scripts.bundle1ff3.js?v=7.1.2"></script>
          <script src="/assets2/js/pages/custom/wizard/wizard-61ff3.js?v=7.1.2"></script>
          {/* Overview script */}
          <script src="/assets/plugins/global/plugins.bundle.js?v=7.0.5"></script>
          <script src="/assets/plugins/custom/prismjs/prismjs.bundle.js?v=7.0.5"></script>
          <script src="/assets/js/scripts.bundle.js?v=7.0.5"></script>
          <script src="/assets/plugins/custom/fullcalendar/fullcalendar.bundle.js?v=7.0.5"></script>
          <script src="/assets/js/pages/widgets.js?v=7.0.5"></script>
          <script src="/assets/js/pages/custom/login/login-general.js?v=7.0.5"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
