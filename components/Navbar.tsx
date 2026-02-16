import { Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image'; // Import Next.js Image component

const Navbar = () => {
    return (
        <nav className="w-full bg-[#f0edeb] border-b border-[#D9C9B8]">
            <div className="container mx-auto flex items-center p-4 md:p-6 relative" >
                <Link
                    href="/"
                    className="absolute left-1/2 transform -translate-x-1/2"
                >
                    <Image
                        src="/logo.png"
                        alt="Zara Curates Logo"
                        width={60} // Adjust width as needed
                        height={40} // Adjust height as needed
                        className="object-contain"
                        priority // Loads image immediately since it's above the fold
                    />
                </Link>

                {/* Hamburger Menu Icon - Pushed to the right using ml-auto */}
                <button className="p-2 ml-auto">
                    <Menu size={28} />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;