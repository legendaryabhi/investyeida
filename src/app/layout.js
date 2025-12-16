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
  title: "InvestYeida | Yamuna Expressway Plots & YEIDA City Real Estate",
  description:
    "Explore Yamuna Expressway plots, YEIDA City real estate, and YEIDA Master Plan insights. InvestYeida helps you choose the best residential, commercial & industrial investments. Your trusted YEIDA real estate advisory.",
  keywords: [
  "YEIDA",
  "Yamuna Expressway",
  "InvestYeida",
  "Yamuna Authority",
  "YEIDA City",
  "Yamuna Expressway Plots",
  "YEIDA Plot Scheme",
  "YEIDA Master Plan 2041",
  "YEIDA Plots",
  "YEIDA Residential Plots",
  "YEIDA Commercial Plots",
  "YEIDA Industrial Plots",
  "Yamuna Expressway Real Estate",
  "Property Investment",
  "Real Estate Advisory",
  "Noida International Airport",
  "Jewar Airport",
  "Greater Noida",
  "Noida Real Estate",
  "Real Estate Growth Zone"
],

  authors: [{ name: "InvestYeida Team", url: "https://www.investyeida.in" }],
  creator: "InvestYeida",
  publisher: "InvestYeida",
  metadataBase: new URL("https://www.investyeida.in"),

  openGraph: {
    title: "InvestYeida | Yamuna Expressway Plots & YEIDA City Real Estate",
    description:
      "Explore Yamuna Expressway plots, YEIDA City real estate, and YEIDA Master Plan insights. InvestYeida helps you choose the best residential, commercial & industrial investments. Your trusted YEIDA real estate advisory.",
    url: "https://www.investyeida.in",
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
title : "InvestYeida | Yamuna Expressway Plots & YEIDA City Real Estate",
    description:
      "Explore Yamuna Expressway plots, YEIDA City real estate, and YEIDA Master Plan insights. InvestYeida helps you choose the best residential, commercial & industrial investments. Your trusted YEIDA real estate advisory.",
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
    <head>
        {/* Microsoft Clarity Script */}
        <link rel="icon" href="/favicon.ico" />
       
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            if (!window.location.host.includes('localhost')) {
               (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "u9itum58pn");
    }

            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "InvestYeida",
              url: "https://www.investyeida.in",
              logo: "https://www.investyeida.in/logo.png",
              
              description:
                "InvestYeida is a leading private real estate investment advisory firm providing expert guidance on residential, industrial, and commercial projects under the Yamuna Expressway Industrial Development Authority (YEIDA). Get detailed insights, master plans, and investment strategies for India's fastest-growing growth zone.",
              sameAs: [
                "https://www.facebook.com/investyeida",
                "https://www.linkedin.com/company/investyeida",
                "https://www.instagram.com/investyeida",
                "https://twitter.com/investyeida",
              ],  
              founder: {
                "@type": "Person",
                name: "Abhinav Sharma",
                url: "https://www.investyeida.in",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "hello@investyeida.in",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
