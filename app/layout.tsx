import type { Metadata } from "next";
import "./globals.css";

import { Cormorant_Garamond, Plus_Jakarta_Sans, Geist } from "next/font/google";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import StickyContactWidget from "@/components/StickyContactWidget";
import Header from "@/components/layout/Header";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bbcreativeevent.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BB Creative Events | Event Decoration & Styling in Nigeria",
    template: "%s | BB Creative Events",
  },
  description:
    "BB Creative Events provides event decoration, styling, and setup for weddings, birthdays, traditional ceremonies, corporate events, proposals, and private celebrations in Nigeria.",
  keywords: [
    "event decoration Nigeria",
    "wedding decoration Nigeria",
    "birthday decoration",
    "traditional wedding decoration",
    "event planner Nigeria",
    "event styling Nigeria",
    "BB Creative Events",
  ],
  authors: [{ name: "BB Creative Events" }],
  creator: "BB Creative Events",
  openGraph: {
    title: "BB Creative Events | Event Decoration & Styling in Nigeria",
    description:
      "Event decoration and styling for weddings, birthdays, traditional ceremonies, corporate events, and private celebrations across Nigeria.",
    url: siteUrl,
    siteName: "BB Creative Events",
    images: [
      {
        url: "/assets/images/bbcreative.png",
        width: 1200,
        height: 630,
        alt: "BB Creative Events event decoration and styling",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BB Creative Events | Event Decoration & Styling in Nigeria",
    description:
      "Event decoration and styling for weddings, birthdays, corporate events, and celebrations across Nigeria.",
    images: ["/assets/images/bbcreative.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/assets/images/bbcreative.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", cormorantGaramond.variable, plusJakartaSans.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col font-body">
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              try {
                const storedTheme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const theme = storedTheme === 'dark' || storedTheme === 'light'
                  ? storedTheme
                  : prefersDark
                    ? 'dark'
                    : 'light';
                document.documentElement.classList.toggle('light', theme === 'light');
              } catch (error) {}
            })();`,
          }}
        /> */}

        <Header />
        {children}
        <StickyContactWidget />
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
