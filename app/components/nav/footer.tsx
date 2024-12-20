import { Button } from "@nextui-org/button";
import Link from "next/link";
import { FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-text-primary py-10 px-6 border-t border-border-primary bg-background-primary">
      <div className="container mx-auto">
        <div className="grid grid-cols-10 space-y-8 md:flex-row md:space-y-0 md:space-x-8 justify-between items-center md:items-start">
          {/* Left section */}
          <div className="col-span-4 text-left space-y-4 max-w-xs md:max-w-none w-full">
            <h1 className="text-2xl font-bold">LOGO</h1>
            <p className="text-text-secondary">Boucherie en ligne agréé pour le bœuf de Kobé et le Wagyu. Découvrez aussi notre sélection de viandes maturées, le bœuf de Galice, l'Angus, Salers, la Normande, ainsi que le porc Ibérique Bellota Pata Negra. Toutes nos viandes sont rigoureusement sélectionnées pour une expérience gustative exceptionnelle. Marbled Beef est également le fournisseur de choix pour tous les professionnels de la gastronomie à la recherche dune expertise de qualité.</p>


            <Button className="bg-gold text-background-primary rounded-lg px-4 py-2">
              Contactez-nous
            </Button>
          </div>

          {/* Center section */}
          <div className="col-span-2">
            <h3 className="font-bold pb-2">MARBLED BEEF VIANDES
              D’EXCELLENCE</h3>
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
          <div className="col-span-2">
            <h3 className="font-bold pb-2">NOS SERVICES</h3>
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
          <div className="col-span-2">
            <h3 className="font-bold pb-2">INFOS LÉGALES</h3>
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

        {/* Bottom section */}
        <div className="mt-8 border-t border-border-primary pt-8 flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-center text-text-secondary text-xs text-left">
          <p className="text-center md:text-left w-full md:w-auto">
            Buy This Template • Proudly Built In{" "}
            <Link
              href="https://framer.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Framer
            </Link>{" "}
            • Created by beef
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://twitter.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaTwitter className="text-text-primary" />
            </Link>
            <Link
              href="https://youtube.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaYoutube className="text-text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
