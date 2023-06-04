"use client";

import "./globals.css";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });
// Redux
import store from "@/redux/store";
import { Provider } from "react-redux";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={jost.className}>{children}</body>
      </html>
    </Provider>
  );
}
