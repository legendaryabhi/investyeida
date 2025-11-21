import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-12 px-6 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* COLUMN 1 */}
        <div className="space-y-6">
          {/* Row 1 */}
          <div>
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <p className="text-sm mt-1">Email: hello@investyeida.in</p>

          </div>

          {/* Row 2 */}
          

          {/* Row 3 */}
          <div>
            <h3 className="text-lg font-semibold">Last Updated On</h3>
            <p className="text-sm mt-1">21 November 2025</p>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="space-y-6">
          {/* Row 1 */}
          <div>
            <h3 className="text-lg font-semibold">Invest YEIDA</h3>
            <ul className="text-sm mt-2 space-y-1">
              <li><Link href="/">Home</Link></li>
              <h3 className="text-lg font-semibold pt-3 pb-1">Projects</h3>
              <li><Link href="/projects/residential">Residential Projects</Link></li>
              <li><Link href="/projects/commercial">Commercial Projects</Link></li>
              <li><Link href="/how-to-invest">How to Invest</Link></li>
            </ul>
          </div>

          {/* Row 2 */}
          <div>
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="text-sm mt-2 space-y-1">
              <li><Link href="/documents/termsandconditions.pdf">Terms & Conditions</Link></li>
              <li><Link href="/documents/privacypolicy.pdf">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Row 3 */}
          <div>
            <h3 className="text-lg font-semibold">Help</h3>
            <ul className="text-sm mt-2 space-y-1">
              <li><Link href="/contact-us">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* COLUMN 3 */}
        <div className="space-y-4">
          <Image
            src="/logobanner.png"
            alt="investyeida logo"
            width={160}
            height={160}
            className="rounded-xl object-cover border border-gray-700 shadow-xl"
          />
          <p className="text-sm leading-relaxed text-gray-300">
            All contents on this website are copyrighted and belong to Invest YEIDA.
            We are not affiliated with the Government of India or any of its branches.
          </p>
        </div>
      </div>
    </footer>
  );
}