import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "../components/ui/provider";
import MyMenu from "../components/MyMenu";
import FooterBlock from "../components/FooterBlock";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Косметический помощник",
  description: "Сайт 'Косметический помощник'",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${roboto.variable} ${robotoMono.variable} font-sans antialiased`}
      >
        <Provider>
          <header>
            <MyMenu />
          </header>
          <main>{children}</main>
          <footer>
            <FooterBlock />
          </footer>
        </Provider>
      </body>
    </html>
  );
}
