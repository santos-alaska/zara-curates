import Link from "next/link";
import { Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  return (
    <footer className="bg-[#1a1a1a] text-neutral-400 py-16 px-6">
      <div className="container mx-auto max-w-4xl flex flex-col items-center">

        {/* Logo/Signature */}
        <div className="mb-12">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-neutral-300"
          >
            <path
              d="M15 35 Q20 30, 25 35 T35 35 Q40 30, 45 35"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mb-12">
          <Link
            href="https://instagram.com"
            target="_blank"
            className=" hover:border-neutral-400 transition-colors duration-300"
          >
            <Instagram size={28} className="text-neutral-400" />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className=" hover:border-neutral-400 transition-colors duration-300"
          >
            <Linkedin size={28} className="text-neutral-400" />
          </Link>
          <Link
            href="mailto:contact@zaracurates.com"
            className=" hover:border-neutral-400 transition-colors duration-300"
          >
            <Mail size={28} className="text-neutral-400" />
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-neutral-500 text-sm mb-6 tracking-wider">
          © 2026 ZARA CURATES
        </div>

        {/* Policies Link */}
        <Link
          href="/policies"
          className="text-neutral-500 text-sm mb-6 hover:text-neutral-300 transition-colors duration-300 tracking-wider"
        >
          POLICIES
        </Link>

        {/* Back to Top */}
        <button
          // onClick={scrollToTop}
          className="text-neutral-500 text-sm hover:text-neutral-300 transition-colors duration-300 tracking-wider"
        >
          BACK TO TOP
        </button>

      </div>
    </footer>
  );
};

export default Footer;