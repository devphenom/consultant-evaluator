import { Head, Html, Main, NextScript } from "next/document";

import { ThemeProvider } from "@/components/ThemeProvider";

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head />
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Main />
          <NextScript />
        </ThemeProvider>
      </body>
    </Html>
  );
}
