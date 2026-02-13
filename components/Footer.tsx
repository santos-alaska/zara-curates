import Link from "next/link";
// import { Instagram, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#151413] text-neutral-400 py-20 text-center">
      <div className="container mx-auto px-6 flex flex-col items-center gap-10">
        
        {/* Logo (Stylized 'a' or text) */}
        <div className="text-white font-serif italic text-4xl mb-4">
          ~ zc
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-8">
          {/* <Link href="#" className="hover:text-white transition-colors">
            <Instagram size={20} strokeWidth={1.5} />
          </Link> */}
          {/* <Link href="#" className="hover:text-white transition-colors">
            <Linkedin size={20} strokeWidth={1.5} />
          </Link> */}
          {/* <Link href="mailto:hello@zaracurates.com" className="hover:text-white transition-colors">
            <Mail size={20} strokeWidth={1.5} />
          </Link> */}
        </div>

        {/* Copyright & Info */}
        <div className="text-[10px] tracking-[0.2em] uppercase space-y-4">
          <p>© 2026 ZARA CURATES</p>
          <div className="flex flex-col gap-2">
            <Link href="/policies" className="hover:text-white transition-colors">
              Policies
            </Link>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-white transition-colors mt-4"
            >
              Back to Top
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;