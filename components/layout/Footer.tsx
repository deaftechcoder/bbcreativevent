import Link from "next/link";
import Image from "next/image";
import {Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Wedding Decoration",
  "Birthday Setup",
  "Traditional Wedding",
  "Corporate Events",
  "Proposal Setup",
];

export default function Footer() {
  const whatsappNumber = "2348165392277";

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505]">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-pink-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/assets/images/bbcreative.png"
              alt="BB Creative Events"
              width={150}
              height={150}
              className="object-contain"
            />
          </Link>

          <p className="mt-5 max-w-sm leading-relaxed text-gray-400">
            Creating elegant event decorations for weddings, birthdays,
            corporate events, and unforgettable celebrations across Nigeria.
          </p>

          <div className="mt-6 flex gap-3">
            <Link
              href="https://www.instagram.com/blessedwithbeautycreative?igsh=NGpodXR5Z2wyd2Jj"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-pink-500/40 hover:bg-pink-500/20"
              aria-label="Instagram"
            >
              <FaInstagram className="h-5 w-5" />
            </Link>

            <Link
              href="https://www.facebook.com/share/1RwSmV4K4H/"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-pink-500/40 hover:bg-pink-500/20"
              aria-label="Facebook"
            >
              <FaFacebook className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">Quick Links</h3>

          <ul className="mt-6 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-400 transition hover:text-pink-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">Services</h3>

          <ul className="mt-6 space-y-3">
            {services.map((service) => (
              <li key={service} className="text-gray-400">
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">Contact</h3>

          <div className="mt-6 space-y-4">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-gray-400 transition hover:text-pink-300"
            >
              <Phone className="mt-1 h-5 w-5 text-pink-300" />
              <span>+234 816 539 2277</span>
            </a>

            <a
              href="mailto:hello@bbcreativeevents.com"
              className="flex items-start gap-3 text-gray-400 transition hover:text-pink-300"
            >
              <Mail className="mt-1 h-5 w-5 text-pink-300" />
              <span>bbcreativeevent@gmail.com</span>
            </a>

            <div className="flex items-start gap-3 text-gray-400">
              <MapPin className="mt-1 h-5 w-5 text-pink-300" />
              <span>Available for events across Nigeria</span>
            </div>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=Hello%20BB%20Creative%20Events%2C%20I%20want%20to%20book%20your%20event%20decoration%20service.`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 font-semibold text-white shadow-[0_0_25px_rgba(255,61,129,0.3)] transition hover:scale-105"
          >
            Book on WhatsApp
          </a>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} BB Creative Events. All rights
            reserved.
          </p>

          <p>Designed for elegant celebrations.</p>
        </div>
      </div>
    </footer>
  );
}