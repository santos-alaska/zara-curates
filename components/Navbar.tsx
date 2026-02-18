// import { Menu } from 'lucide-react';
// import Link from 'next/link';
// import Image from 'next/image'; // Import Next.js Image component

// const Navbar = () => {
//     return (
//         <nav className="w-full bg-[#f0edeb] border-b border-[#D9C9B8]">
//             <div className="container mx-auto flex items-center p-4 md:p-6 relative" >
//                 <Link
//                     href="/"
//                     className="absolute left-1/2 transform -translate-x-1/2"
//                 >
//                     <Image
//                         src="/logo.png"
//                         alt="Zara Curates Logo"
//                         width={60} // Adjust width as needed
//                         height={40} // Adjust height as needed
//                         className="object-contain"
//                         priority // Loads image immediately since it's above the fold
//                     />
//                 </Link>

//                 {/* Hamburger Menu Icon - Pushed to the right using ml-auto */}
//                 <button className="p-2 ml-auto">
//                     <Menu size={28} />
//                 </button>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;



// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     // Toggle menu handler
//     const toggleMenu = () => setIsOpen(!isOpen);

//     // Desktop Links
//     const navLinks = [
//         { name: "PHILOSOPHY", href: "/about" }, // Linking to the page we just built
//         { name: "EXPERIENCE", href: "/experience" },
//         { name: "CURATIONS", href: "/curations" },
//         { name: "CONTACT", href: "/contact" },
//         // { name: "ABOUT", href: "/about" },
//     ];

//     // Mobile Menu Links (Based on your screenshot)
//     const mobileLinks = [
//         { name: "Philosophy", href: "/about" },
//         { name: "Experience", href: "/experience" },
//         { name: "Curations", href: "/curations" },
//         { name: "Contact", href: "/contact" },
//     ];

//     // Animation variants for the menu overlay
//     const menuVariants = {
//         closed: {
//             opacity: 0,
//             y: "-100%", // Slide up
//             transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
//         },
//         open: {
//             opacity: 1,
//             y: "0%", // Slide down
//             transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
//         },
//     };

//     const linkVariants = {
//         closed: { opacity: 0, y: 20 },
//         open: (i: number) => ({
//             opacity: 1,
//             y: 0,
//             transition: { delay: 0.1 + i * 0.1, duration: 0.4 },
//         }),
//     };

//     return (
//         <>
//             <nav className="fixed top-0 left-0 w-full bg-[#F8F5F1] z-50 transition-colors duration-300">
//                 <div className="container mx-auto px-6 py-6 flex justify-between items-center relative">

//                     {/* --- LOGO (Visible on both, slightly different positioning logic) --- */}
//                     <Link href="/" className="relative z-50">
//                         <div className="w-12 md:w-16">
//                             <Image
//                                 src="/logo.png"
//                                 alt="Zara Curates Logo"
//                                 width={80}
//                                 height={50}
//                                 className="object-contain"
//                                 priority
//                             />
//                         </div>
//                     </Link>

//                     {/* --- DESKTOP NAVIGATION (Hidden on Mobile) --- */}
//                     <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-12">
//                         {navLinks.map((link) => (
//                             <Link
//                                 key={link.name}
//                                 href={link.href}
//                                 className="text-xs tracking-[0.2em] text-neutral-600 hover:text-black transition-colors uppercase font-light"
//                             >
//                                 {link.name}
//                             </Link>
//                         ))}
//                     </div>

//                     {/* --- HAMBURGER BUTTON (Visible on Mobile, Hidden on Desktop) --- */}
//                     {/* Note: Based on your screenshot, desktop usually has links, mobile has hamburger. 
//               If you want hamburger on desktop too, remove 'md:hidden' */}
//                     <button
//                         onClick={toggleMenu}
//                         className="p-2 z-50 text-neutral-800 md:hidden focus:outline-none"
//                     >
//                         {isOpen ? <X size={28} /> : <Menu size={28} />}
//                     </button>
//                 </div>
//             </nav>

//             {/* --- MOBILE FULL SCREEN OVERLAY --- */}
//             <AnimatePresence>
//                 {isOpen && (
//                     <motion.div
//                         initial="closed"
//                         animate="open"
//                         exit="closed"
//                         variants={menuVariants}
//                         className="fixed inset-0 bg-[#F8F5F1] z-40 flex flex-col items-center justify-center md:hidden"
//                     >
//                         {/* Overlay Header with Logo and Close Button */}
//                         <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center">
//                             {/* Logo Centered in Overlay Header */}
//                             <div className="absolute left-1/2 transform -translate-x-1/2 w-12">
//                                 <Image
//                                     src="/logo.png"
//                                     alt="Logo"
//                                     width={60}
//                                     height={40}
//                                     className="object-contain"
//                                 />
//                             </div>
//                             {/* Close Button is handled by the z-50 button in the main nav, 
//                      but visually it sits on top of this overlay */}
//                         </div>

//                         {/* Vertical Links List */}
//                         <div className="flex flex-col items-start gap-8">
//                             {mobileLinks.map((link, i) => (
//                                 <motion.div
//                                     key={link.name}
//                                     custom={i}
//                                     variants={linkVariants}
//                                 >
//                                     <Link
//                                         href={link.href}
//                                         onClick={toggleMenu} // Close menu when clicked
//                                         className="font-light text-3xl text-neutral-800 hover:text-neutral-500 transition-colors"
//                                     >
//                                         {link.name}
//                                     </Link>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </>
//     );
// };

// export default Navbar;


"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle menu handler
    const toggleMenu = () => setIsOpen(!isOpen);

    // Desktop Links
    const navLinks = [
        { name: "PHILOSOPHY", href: "/about" },
        { name: "EXPERIENCE", href: "/experience" },
        { name: "CURATIONS", href: "/curations" },
        { name: "CONTACT", href: "/contact" },
    ];

    // Mobile Menu Links
    const mobileLinks = [
        { name: "Philosophy", href: "/about" },
        { name: "Experience", href: "/experience" },
        { name: "Curations", href: "/curations" },
        { name: "Contact", href: "/contact" },
    ];

    // Animation variants for the menu overlay with proper typing
    const menuVariants: Variants = {
        closed: {
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
        },
        open: {
            opacity: 1,
            y: "0%",
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
        },
    };

    const linkVariants: Variants = {
        closed: { opacity: 0, y: 20 },
        open: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: 0.1 + i * 0.1, duration: 0.4 },
        }),
    };

    return (
        <>
            <nav className="fixed top-0 left-0 w-full bg-[#F8F5F1] z-50 transition-colors duration-300">
                <div className="container mx-auto px-6 py-6 flex justify-between items-center relative">

                    {/* --- LOGO --- */}
                    <Link href="/" className="relative z-50">
                        <div className="w-12 md:w-16">
                            <Image
                                src="/logo.png"
                                alt="Zara Curates Logo"
                                width={80}
                                height={50}
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* --- DESKTOP NAVIGATION --- */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-xs tracking-[0.2em] text-neutral-600 hover:text-black transition-colors uppercase font-light"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* --- HAMBURGER BUTTON --- */}
                    <button
                        onClick={toggleMenu}
                        className="p-2 z-50 text-neutral-800 md:hidden focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* --- MOBILE FULL SCREEN OVERLAY --- */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 bg-[#F8F5F1] z-40 flex flex-col items-center justify-center md:hidden"
                    >
                        {/* Overlay Header with Logo */}
                        <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center">
                            {/* Logo Centered in Overlay Header */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-12">
                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    width={60}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Vertical Links List */}
                        <div className="flex flex-col items-start gap-8">
                            {mobileLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    custom={i}
                                    variants={linkVariants}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={toggleMenu}
                                        className="font-light text-3xl text-neutral-800 hover:text-neutral-500 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;