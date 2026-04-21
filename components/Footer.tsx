import Link from "next/link";
import { Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  return (
    <footer className="bg-[#1a1a1a] text-neutral-400 py-16 px-6">
      <div className="container mx-auto max-w-4xl flex flex-col items-center">

        {/* Logo/Signature */}
        <Link
          href="/"
          className="mb-20"
        >
          <Image
            src="/white-logo.png"
            alt="Zara Curates Logo"
            width={40} // Adjust width as needed
            height={30} // Adjust height as needed
            className="object-contain"
            priority
          />
        </Link>

        {/* Social Icons */}
        <div className="flex gap-6 mb-12">
          <Link
            href="https://instagram.com"
            target="_blank"
            className=" hover:border-neutral-400 transition-colors duration-300"
          >
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={24}
              height={24}
              className="object-contain"
            />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className=" hover:border-neutral-400 transition-colors duration-300"
          >
            <Image
              src="/linkedin.png"
              alt="Linkedin"
              width={24}
              height={24}
              className="object-contain"
            />
          </Link>
          <Link
            href="mailto:contact@zaracurates.com"
            className=" hover:border-neutral-400 transition-colors duration-300"
          >
            <Image
              src="/email.png"
              alt="Mail"
              width={24}
              height={24}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-neutral-500 text-[11px] md:text-sm mb-6 tracking-wider">
          © 2026 ZARA CURATES
        </div>

        {/* Policies Link */}
        <Link
          href="/policies"
          className="text-neutral-500 text-[11px] md:text-sm mb-6 hover:text-neutral-300 transition-colors duration-300 tracking-wider"
        >
          POLICIES
        </Link>

        {/* Back to Top */}
        <button
          // onClick={scrollToTop}
          className="text-neutral-500 text-[11px] md:text-sm hover:text-neutral-300 transition-colors duration-300 tracking-wider"
        >
          BACK TO TOP
        </button>

      </div>
    </footer>
  );
};

export default Footer;