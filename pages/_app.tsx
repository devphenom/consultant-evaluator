import "@/styles/globals.css";

import type { AppProps } from "next/app";
import MainLayout from "@/components/layout/MainLayout";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}
