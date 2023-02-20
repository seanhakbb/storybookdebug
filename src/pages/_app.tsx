import "@styles/global.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import { Roboto } from "@next/font/google";
const fontRoboto = Roboto({
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const fontIcon = localFont({
  src: [
    {
      path: '../../fonts/fontello.woff2',
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-demo",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${fontRoboto.variable} ${fontIcon.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
