import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import dynamic from "next/dynamic";

// Dynamically import PromoNotification with SSR disabled
const PromoNotification = dynamic(
  () => import("./components/common/flotingBars/promoNotification"),
  {
    ssr: false,
  },
);
const Chatbot = dynamic(
  () => import("./components/common/flotingBars/chatBot"),
  {
    ssr: false,
  },
);

import Navbar from "./components/nav/header";
import Footer from "./components/nav/footer";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Navbar />
        <main className=" pt-16  flex-grow">{children}</main>
        <Footer />

        <Chatbot />
        <PromoNotification />
      </body>
    </html>
  );
}
