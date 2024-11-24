import Link from "next/link";
import { FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-text-primary py-10 px-6 border-t border-border-primary">
      <div className="container mx-auto">
        <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8 justify-between items-center md:items-start">
          {/* Left section */}
          <div className="text-left space-y-4 max-w-xs md:max-w-none w-full">
            <h1 className="text-2xl font-bold">LOGO</h1>
            <p className="text-text-secondary">Get 15% off your first order!</p>
            <p className="text-text-secondary">
              Sign up to our mailing list below to get 15% off your first order.
              Don&apos;t worry, we hate spam too.
            </p>
            <div className="flex mt-4 w-full">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full md:w-auto flex bg-background-secondary border border-border-primary rounded-l-lg p-2 text-text-primary focus:outline-none"
              />
              <button className="bg-text-primary text-background-primary rounded-r-lg px-4 py-2">
                Subscribe
              </button>
            </div>
          </div>

          {/* Center section */}
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 text-left md:flex md:justify-start md:space-x-8 text-sm w-full md:w-auto">
            <div>
              <h3 className="font-semibold">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/templates">Templates</Link>
                </li>
                <li>
                  <Link href="/backgrounds">Backgrounds</Link>
                </li>
                <li>
                  <Link href="/mockups">Mockups</Link>
                </li>
                <li>
                  <Link href="/fonts">Fonts</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">All-Access Pass</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/signup">Sign Up</Link>
                </li>
                <li>
                  <Link href="/activate-license">Activate License</Link>
                </li>
                <li>
                  <Link href="/signin">Sign In</Link>
                </li>
                <li>
                  <Link href="/reset-password">Reset Password</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Information</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact Us</Link>
                </li>
                <li>
                  <Link href="/license-agreement">License Agreement</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 border-t border-border-primary pt-8 flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-center text-text-secondary text-xs text-left">
          <p className="text-center md:text-left w-full md:w-auto">
            Buy This Template • Proudly Built In{" "}
            <Link
              href="https://framer.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Framer
            </Link>{" "}
            • Created by beef
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-text-primary" />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
