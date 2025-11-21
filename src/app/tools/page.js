import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function ComingSoon() {
  return (
    <div className="min-h-screen  ">
      <Header />

      <main className="flex-1 min-h-screen flex items-center justify-center p-10">
        <h1 className="text-4xl my-auto font-bold text-gray-700">Coming Soon</h1>
      </main>

      <Footer />
    </div>
  );
}
