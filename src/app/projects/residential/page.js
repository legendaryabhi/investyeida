
import ResidentialProjectscli from "./cli";

export const metadata = {
  title: "Residential Projects in YEIDA - InvestYeida",
  description:
    "Explore top residential real estate projects in the YEIDA region with InvestYeida. Get expert insights, master plans, and investment opportunities for apartments, villas, and plots under the Yamuna Expressway Industrial Development Authority.",
  keywords: [
    "YEIDA Residential Projects",
    "Yamuna Expressway Residential Real Estate",
    "InvestYeida Residential Advisory",
    "YEIDA Apartments",
    "YEIDA Villas",
    "Residential Property Investment YEIDA",
    "Yamuna Expressway Development",
    "YEIDA Master Plan Residential",
    "Real Estate Investment YEIDA",
    "Residential Plots YEIDA",
  ],
    authors: [{ name: "InvestYeida Team", url: "https://investyeida.in" }],
    creator: "InvestYeida",
    publisher: "InvestYeida",
    metadataBase: new URL("https://investyeida.in"),

  openGraph: {
    title: "Residential Projects in YEIDA - InvestYeida",
    description:
      "Discover premier residential real estate projects in the YEIDA region with InvestYeida. Access expert guidance, master plans, and investment opportunities for apartments, villas, and plots under YEIDA.",
    url: "https://investyeida.in/projects/residential",
    siteName: "InvestYeida",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "InvestYeida Residential Projects",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Residential Projects in YEIDA - InvestYeida",
    description:
      "Explore top residential real estate projects in the YEIDA region with InvestYeida. Get expert insights, master plans, and investment opportunities for apartments, villas, and plots under the Yamuna Expressway Industrial Development Authority.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function ResidentialProjects() {

  
  return (
    <ResidentialProjectscli />
  );
}
