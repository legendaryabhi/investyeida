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

export const metadata = {
  title: "InvestYeida | Real Estate Advisory for YEIDA Region",
  description:
    "InvestYeida is a leading private real estate investment advisory firm providing expert guidance on residential, industrial, and commercial projects under the Yamuna Expressway Industrial Development Authority (YEIDA). Get detailed insights, master plans, and investment strategies for India's fastest-growing growth zone.",
  keywords: [
    "YEIDA",
    "Yamuna Expressway",
    "InvestYeida",
    "Yamuna Authority",
    "Real Estate Advisory",
    "Noida International Airport",
    "Jewar Airport",
    "Yamuna City",
    "Industrial Plots",
    "Residential Plots",
    "Commercial Projects",
    "Greater Noida",
    "Property Investment",
    "YEIDA Plots",
    "YEIDA Master Plan",
    "Real Estate Growth Zone",
    "Noida Real Estate",
  ],
  authors: [{ name: "InvestYeida Team", url: "https://investyeida.in" }],
  creator: "InvestYeida",
  publisher: "InvestYeida",
  metadataBase: new URL("https://investyeida.in"),

  openGraph: {
    title: "InvestYeida — Expert Real Estate Advisory for YEIDA",
    description:
      "Professional guidance for real estate investments under YEIDA. Explore top residential, commercial, and industrial opportunities with trusted advisory.",
    url: "https://investyeida.in",
    siteName: "InvestYeida",
    images: [
      {
        url: "/og-image.png", // Change this if you have a custom OG image
        width: 1200,
        height: 630,
        alt: "InvestYeida Real Estate Advisory",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "InvestYeida — Real Estate Investment Advisory",
    description:
      "Guidance for residential & commercial investments under the Yamuna Expressway region (YEIDA). Premium insights, master plans, and advisory services.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },

  alternates: {
    canonical: "https://www.investyeida.in",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
