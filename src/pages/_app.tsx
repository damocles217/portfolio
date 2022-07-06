import "../styles/globals.scss";
import "../assets/fonts/style.css";
import "react-phone-number-input/style.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
