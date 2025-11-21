import CommercialProjectscli from "./cli";

export const metadata = {
  title: "Commercial Projects in YEIDA - InvestYeida",
  description:
    "Explore top commercial real estate projects in the YEIDA region with InvestYeida. Get expert insights, master plans, and investment opportunities for retail, office, and mixed-use developments under the Yamuna Expressway Industrial Development Authority.",
  keywords: [
    "YEIDA Commercial Projects",
    "Yamuna Expressway Commercial Real Estate",
    "InvestYeida Commercial Advisory",
    "YEIDA Retail Spaces",
    "YEIDA Office Spaces",
    "Commercial Property Investment YEIDA",
    "Yamuna Expressway Development",
    "YEIDA Master Plan Commercial",
    "Real Estate Investment YEIDA",
    "Commercial Plots YEIDA",
  ],
    authors: [{ name: "InvestYeida Team", url: "https://investyeida.in" }],
    creator: "InvestYeida",
    publisher: "InvestYeida",
    metadataBase: new URL("https://investyeida.in"),

  openGraph: {
    title: "Commercial Projects in YEIDA - InvestYeida",
    description:
      "Discover premier commercial real estate projects in the YEIDA region with InvestYeida. Access expert guidance, master plans, and investment opportunities for retail, office, and mixed-use developments under YEIDA.",
    url: "https://investyeida.in/projects/commercial",
    siteName: "InvestYeida",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "InvestYeida Commercial Projects",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Commercial Projects in YEIDA - InvestYeida",
    description:
      "Explore top commercial real estate projects in the YEIDA region with InvestYeida. Get expert insights, master plans, and investment opportunities for retail, office, and mixed-use developments under YEIDA.",
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

export default function CommercialProjects() {
 
  return (
    <CommercialProjectscli />
  );
}
