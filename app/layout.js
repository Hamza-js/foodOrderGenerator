"use client";
import { Providers } from "./Redux/provider";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body>{children}</body>
      </Providers>
    </html>
  );
}
