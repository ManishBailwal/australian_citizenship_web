import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.citizenshiptestau.com"),

  title: {
    default: "Australian Citizenship Test Practice & Mock Tests",
    template: "%s | Aussie Citizenship Test",
  },

  description:
    "Prepare for the Australian Citizenship Test with realistic practice questions, mock tests and study guides based on Our Common Bond.",

  openGraph: {
    type: "website",
    title: "Australian Citizenship Test Practice & Mock Tests",
    description:
      "Prepare for the Australian Citizenship Test with realistic practice questions, mock tests, and study guides based on Our Common Bond.",
    siteName: "Australian Citizenship Test",
    locale: "en_AU",
  },

  twitter: {
    card: "summary_large_image",
    title: "Australian Citizenship Test Practice & Mock Tests",
    description:
      "Prepare for the Australian Citizenship Test with realistic practice questions, mock tests, and study guides.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}