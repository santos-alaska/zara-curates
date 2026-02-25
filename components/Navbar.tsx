// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu, X } from "lucide-react";
// import { VscMenu } from "react-icons/vsc";
// import { motion, AnimatePresence, Variants } from "framer-motion";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     // Toggle menu handler
//     const toggleMenu = () => setIsOpen(!isOpen);

//     // Desktop Links
//     const navLinks = [
//         { name: "PHILOSOPHY", href: "/about" },
//         { name: "EXPERIENCE", href: "/experience" },
//         { name: "CURATIONS", href: "/curations" },
//         { name: "CONTACT", href: "/contact" },
//     ];

//     // Mobile Menu Links
//     const mobileLinks = [
//         { name: "Philosophy", href: "/about" },
//         { name: "Experience", href: "/experience" },
//         { name: "Curations", href: "/curations" },
//         { name: "Contact", href: "/contact" },
//     ];

//     // Animation variants for the menu overlay with proper typing
//     const menuVariants: Variants = {
//         closed: {
//             opacity: 0,
//             y: "-100%",
//             transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
//         },
//         open: {
//             opacity: 1,
//             y: "0%",
//             transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
//         },
//     };

//     const linkVariants: Variants = {
//         closed: { opacity: 0, y: 20 },
//         open: (i: number) => ({
//             opacity: 1,
//             y: 0,
//             transition: { delay: 0.1 + i * 0.1, duration: 0.4 },
//         }),
//     };

//     return (
//         <>
//             {/* <nav className="fixed top-0 left-0 w-full bg-[#F8F5F1] z-50 transition-colors duration-300"> */}
//             <nav className="fixed top-0 left-0 w-full bg-transparent z-50 transition-colors duration-300">
//                 <div className="container mx-auto px-6 py-6 flex justify-between items-center relative">

//                     {/* --- LOGO --- */}
//                     <Link href="/" className="relative z-50">
//                         <div className="w-12 md:w-16">
//                             <Image
//                                 src="/white-logo.png"
//                                 alt="Zara Curates Logo"
//                                 width={80}
//                                 height={50}
//                                 className="object-contain"
//                                 priority
//                             />
//                         </div>
//                     </Link>

//                     {/* --- DESKTOP NAVIGATION --- */}
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

//                     {/* --- HAMBURGER BUTTON --- */}
//                     <button
//                         onClick={toggleMenu}
//                         className="p-2 z-50 text-neutral-800 md:hidden focus:outline-none"
//                         aria-label="Toggle menu"
//                     >
//                         {isOpen ? <X size={24} /> : <VscMenu size={20} color="white" />}
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
//                         {/* Overlay Header with Logo */}
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
//                                         onClick={toggleMenu}
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


// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu, X } from "lucide-react";
// import { VscMenu } from "react-icons/vsc";
// import { motion, AnimatePresence, Variants } from "framer-motion";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => setIsOpen(!isOpen);

//     const navLinks = [
//         { name: "PHILOSOPHY", href: "/about" },
//         { name: "EXPERIENCE", href: "/experience" },
//         { name: "CURATIONS", href: "/curations" },
//         { name: "CONTACT", href: "/contact" },
//     ];

//     const mobileLinks = [
//         { name: "Philosophy", href: "/about" },
//         { name: "Experience", href: "/experience" },
//         { name: "Curations", href: "/curations" },
//         { name: "Contact", href: "/contact" },
//     ];

//     const menuVariants: Variants = {
//         closed: {
//             opacity: 0,
//             y: "-100%",
//             transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
//         },
//         open: {
//             opacity: 1,
//             y: "0%",
//             transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
//         },
//     };

//     const linkVariants: Variants = {
//         closed: { opacity: 0, y: 20 },
//         open: (i: number) => ({
//             opacity: 1,
//             y: 0,
//             transition: { delay: 0.1 + i * 0.1, duration: 0.4 },
//         }),
//     };

//     return (
//         <>
//             <nav className="relative w-full bg-transparent z-50 transition-colors duration-300">
//                 <div className="container mx-auto px-6 py-6 flex justify-between items-center relative">

//                     {/* --- LOGO --- */}
//                     <Link href="/" className="relative z-50">
//                         <div className="w-12 md:w-16">
//                             <Image
//                                 src="/white-logo.png"
//                                 alt="Zara Curates Logo"
//                                 width={80}
//                                 height={50}
//                                 className="object-contain"
//                                 priority
//                             />
//                         </div>
//                     </Link>

//                     {/* --- DESKTOP NAVIGATION --- */}
//                     <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-12">
//                         {navLinks.map((link) => (
//                             <Link
//                                 key={link.name}
//                                 href={link.href}
//                                 className="text-xs tracking-[0.2em] text-white hover:text-#c9c8c8 transition-colors uppercase font-light"
//                             >
//                                 {link.name}
//                             </Link>
//                         ))}
//                     </div>

//                     {/* --- HAMBURGER BUTTON --- */}
//                     <button
//                         onClick={toggleMenu}
//                         className="p-2 z-50 text-neutral-800 md:hidden focus:outline-none"
//                         aria-label="Toggle menu"
//                     >
//                         {isOpen ? <X size={24} /> : <VscMenu size={20} color="white" />}
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
//                         <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center">
//                             <div className="absolute left-1/2 transform -translate-x-1/2 w-12">
//                                 <Image
//                                     src="/logo.png"
//                                     alt="Logo"
//                                     width={60}
//                                     height={40}
//                                     className="object-contain"
//                                 />
//                             </div>
//                         </div>

//                         <div className="flex flex-col items-start gap-8">
//                             {mobileLinks.map((link, i) => (
//                                 <motion.div
//                                     key={link.name}
//                                     custom={i}
//                                     variants={linkVariants}
//                                 >
//                                     <Link
//                                         href={link.href}
//                                         onClick={toggleMenu}
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
import { X } from "lucide-react";
import { VscMenu } from "react-icons/vsc";
import { motion, AnimatePresence, Variants } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "PHILOSOPHY", href: "/about" },
        { name: "EXPERIENCE", href: "/experience" },
        { name: "CURATIONS", href: "/curations" },
        { name: "CONTACT", href: "/contact" },
    ];

    const mobileLinks = [
        { name: "Philosophy", href: "/about" },
        { name: "Experience", href: "/experience" },
        { name: "Curations", href: "/curations" },
        { name: "Contact", href: "/contact" },
    ];

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
            <nav className="relative w-full bg-transparent z-50 transition-colors duration-300">
                <div className="container mx-auto px-6 py-6 flex justify-between items-center relative">

                    {/* --- LOGO --- */}
                    <Link href="/" className="relative z-50">
                        <div className="w-12 md:w-16">
                            <Image
                                src="/white-logo.png"
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
                                className="text-xs tracking-[0.2em] text-white hover:text-[#c9c8c8] transition-colors uppercase font-light"
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
                        <VscMenu size={20} color="white" />
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
                        {/* Overlay Header — logo perfectly centered, X pinned right */}
                        <div className="absolute top-0 left-0 w-full px-6 py-6 flex items-center justify-center">
                            <div className="w-12">
                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    width={60}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <button
                                onClick={toggleMenu}
                                className="absolute right-6 top-1/2 -translate-y-1/2 text-neutral-800 focus:outline-none"
                                aria-label="Close menu"
                            >
                                <X size={24} />
                            </button>
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