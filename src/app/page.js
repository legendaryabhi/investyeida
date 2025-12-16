import Banner from "@/components/Banner";
import BelowSection from "@/components/BelowSection";
import Footer from "@/components/Footer";
import GrowthTimeline from "@/components/GrowthTimeline";
import Header from "@/components/Header";
import MainSection from "@/components/MainSection";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <MainSection />
      <GrowthTimeline />
      <BelowSection />
<h1 className="sr-only">
  Yamuna Expressway Plots & YEIDA City Real Estate Investment Guide
</h1>



      <Footer />

      <h2 className="sr-only">
  YEIDA Master Plan 2041 – Future Growth & Development Zones
</h2>

<h2 className="sr-only">
  YEIDA Plot Scheme for Residential, Commercial & Industrial Investment
</h2>

<h2 className="sr-only">
  Invest in YEIDA City Near Noida International (Jewar) Airport
</h2>

<h2 className="sr-only">
  Best Sectors to Invest Along Yamuna Expressway
</h2>

<h2 className="sr-only">
  Yamuna Expressway Real Estate Opportunities Backed by YEIDA
</h2>

    </>
  );
}
