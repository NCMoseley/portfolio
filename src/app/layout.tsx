import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Toaster } from "~/components/ui/toaster";

export const metadata: Metadata = {
  title: "Nathan Moseley",
  description: "A Portfolio built with Next.js",
  icons: [{ url: "/swirl.svg", rel: "icon" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} dark`}>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
