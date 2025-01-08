import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "../components/ui/provider";
import MyMenu from "../components/MyMenu";
import FooterBlock from "../components/FooterBlock";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
