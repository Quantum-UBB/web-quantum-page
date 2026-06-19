'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import SidebarStatic from './SidebarStatic';

const NavbarStatic = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const pathname = usePathname();
    const isCompactRoute = pathname?.startsWith('/about_us') || pathname?.startsWith('/mission_vision') || pathname?.startsWith('/areas_of_interest');
    const showCompactNav = isCompactRoute || isScrolled;

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 50);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <SidebarStatic isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            <header className={`fixed top-0 left-0 w-full z-30 transition-all duration-700 ease-in-out`}>
                {/* TOP BAR (Main Header) */}
                <div className={`w-full bg-[#1D272E] flex items-center justify-between px-6 transition-[height,opacity,visibility] duration-500 ease-in-out overflow-hidden ${showCompactNav
                    ? 'h-0 opacity-0 pointer-events-none invisible'
                    : 'h-32 md:h-48 opacity-100'
                    }`}>
                    {/* Left: Hamburger */}
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="text-white p-3 hover:bg-white/10 rounded-full transition-transform hover:scale-110 cursor-pointer"
                        aria-label="Open Menu"
                    >
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>

                    {/* Center: Large Logo */}
                    <div className={`flex flex-col items-center transition-[transform,opacity] duration-700 ease-in-out origin-center will-change-transform ${showCompactNav ? 'scale-50 opacity-0' : 'scale-100 opacity-100'
                        }`}>
                        <div className="relative w-64 h-24 md:w-96 md:h-36">
                            <Image
                                src="/quantum-logo.png"
                                alt="Quantum Student Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right: empty placeholder to keep layout balanced */}
                    <div className="w-10 h-10 md:w-14 md:h-14" />
                </div>

                {/* BOTTOM BAR (Green Nav) */}
                <div className={`w-full bg-primary relative flex items-center justify-center transition-[height,box-shadow] duration-700 ease-in-out shadow-xl will-change-[height] ${showCompactNav
                    ? 'h-28 md:h-16'
                    : 'h-12 md:h-12'
                    }`}>

                    {/* Main Container */}
                    <div className="w-full max-w-[1800px] px-4 md:px-8 h-full flex flex-col md:flex-row items-center justify-center md:justify-between transition-all duration-500">

                        {/* MOBILE VIEW (Two Rows) */}
                        <div className={`flex md:hidden flex-col w-full h-full transition-all duration-500 ${showCompactNav ? 'justify-center gap-2' : 'justify-center'}`}>
                            {/* Row 1: Icons & Transitioning Logo */}
                            <div className={`items-center justify-between w-full transition-all duration-700 ${showCompactNav ? 'flex opacity-100 translate-y-0' : 'hidden opacity-0 -translate-y-8 pointer-events-none'}`}>
                                <div className="flex items-center gap-1">
                                    <button onClick={() => setIsSidebarOpen(true)} className="text-white p-2">
                                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                    </button>
                                </div>

                                <div className="relative w-24 h-8">
                                    <Image src="/quantum-logo.png" alt="Logo" fill className="object-contain" />
                                </div>

                                <div className="w-8" />
                            </div>
                            {/* Row 2: Links */}
                            <div className="flex items-center justify-center w-full">
                                <ul className="flex items-center justify-center space-x-4 font-bold text-white uppercase tracking-wider text-[10px]">
                                    <li><Link href="/" className="hover:opacity-70 transition">Inicio</Link></li>
                                    <li><Link href="/mission_vision" className="hover:opacity-70 transition">Misión</Link></li>
                                    <li><Link href="/about_us" className="hover:opacity-70 transition">Nosotros</Link></li>
                                    <li><Link href="/areas_of_interest" className="hover:opacity-70 transition">Áreas</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* DESKTOP VIEW */}
                        <div className="hidden md:flex flex-1 items-center justify-start">
                            <button onClick={() => setIsSidebarOpen(true)} className={`text-white p-2 hover:bg-black/10 rounded-full transition-all duration-500 ${showCompactNav ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </button>
                        </div>

                        <div className="hidden md:block shrink-0 h-full relative z-10 w-[60%] lg:w-[50%]">
                            {/* Desktop Logo that fades in on scroll */}
                            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${showCompactNav ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 -translate-y-8 pointer-events-none'}`}>
                                <div className="flex items-center gap-8 lg:gap-12">
                                    <Link href="/" className="text-white hover:text-black/50 transition font-bold text-[11px] tracking-wider">INICIO</Link>
                                    <Link href="/mission_vision" className="text-white hover:text-black/50 transition font-bold text-[11px] tracking-wider">MISIÓN</Link>
                                    <div className="relative w-24 h-8 mx-2">
                                        <Image src="/quantum-logo.png" alt="Logo" fill className="object-contain" />
                                    </div>
                                    <Link href="/about_us" className="text-white hover:text-black/50 transition font-bold text-[11px] tracking-wider">NOSOTROS</Link>
                                    <Link href="/areas_of_interest" className="text-white hover:text-black/50 transition font-bold text-[11px] tracking-wider">ÁREAS</Link>
                                </div>
                            </div>
                            {/* Desktop Horizontal Links (Not scrolled) */}
                            <div className={`flex items-center justify-center h-full transition-all duration-500 ${showCompactNav ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                                <ul className="flex items-center space-x-12 font-bold text-white uppercase tracking-wider text-xs lg:text-[13px]">
                                    <li><Link href="/" className="hover:text-black/50 transition px-1">Inicio</Link></li>
                                    <li><Link href="/mission_vision" className="hover:text-black/50 transition px-1">Misión</Link></li>
                                    <li><Link href="/about_us" className="hover:text-black/50 transition px-1">Nosotros</Link></li>
                                    <li><Link href="/areas_of_interest" className="hover:text-black/50 transition px-1">Áreas</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="hidden md:flex flex-1 items-center justify-end">
                            <div className="w-12" />
                        </div>

                    </div>
                </div>
            </header>
        </>
    );
};

export default NavbarStatic;
