'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    
    const pathname = usePathname();
    const isNewsSection = pathname?.startsWith('/news');
    
    // Force compact state if on news section, otherwise use scroll state
    const showCompactNav = isNewsSection || isScrolled;

    // Close login when clicking outside (optional UX improvement)
    const loginRef = useRef(null);

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

    // Toggle Handlers
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        if (isLoginOpen) setIsLoginOpen(false); // Close login if search opens
    };

    const toggleLogin = () => {
        setIsLoginOpen(!isLoginOpen);
        if (isSearchOpen) setIsSearchOpen(false); // Close search if login opens
    };

    return (
        <>
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            <header className={`fixed top-0 left-0 w-full z-30 transition-all duration-700 ease-in-out`}>

                {/* LOGIN DROPDOWN (User Request Style) */}
                {/* 
                   Style: Quantum Tech
                   - BG: #1D262F
                   - Border: #14E19D
                   - Font: Quantum (Orbitron)
                   - Shape: Square (rounded-none)
                */}
                <div
                    className={`fixed top-24 right-6 w-80 bg-[#1D262F]/95 backdrop-blur-xl border border-[#14E19D] shadow-[0_0_30px_rgba(20,225,157,0.15)] rounded-none p-6 transition-all duration-300 z-50 transform origin-top-right ${isLoginOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
                        }`}
                >
                    {/* Close Button ("X") */}
                    <button
                        onClick={() => setIsLoginOpen(false)}
                        className="absolute top-3 right-3 text-gray-400 hover:text-white hover:bg-white/10 rounded-none p-1 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>

                    <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-white mb-1 font-[family-name:var(--font-orbitron)] tracking-wider">Bienvenido</h3>
                        <p className="text-xs text-[#14E19D] uppercase tracking-widest font-[family-name:var(--font-orbitron)]">Acceso Estudiantes</p>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-400 text-xs font-bold mb-1 ml-1 font-[family-name:var(--font-orbitron)] tracking-widest">USUARIO / EMAIL</label>
                            <input
                                type="text"
                                className="w-full bg-slate-800/50 border border-slate-600 rounded-none px-4 py-2 text-white focus:outline-none focus:border-[#14E19D] focus:ring-1 focus:ring-[#14E19D] transition-all placeholder-gray-600 font-[family-name:var(--font-orbitron)] text-sm"
                                placeholder="usuario@quantum.edu"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-400 text-xs font-bold mb-1 ml-1 font-[family-name:var(--font-orbitron)] tracking-widest">CONTRASEÑA</label>
                            <input
                                type="password"
                                className="w-full bg-slate-800/50 border border-slate-600 rounded-none px-4 py-2 text-white focus:outline-none focus:border-[#14E19D] focus:ring-1 focus:ring-[#14E19D] transition-all placeholder-gray-600 font-[family-name:var(--font-orbitron)] text-sm"
                                placeholder="••••••••"
                            />
                        </div>

                        <div className="flex items-center justify-between text-xs text-gray-400 font-[family-name:var(--font-orbitron)]">
                            <label className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                                <input type="checkbox" className="rounded-none bg-slate-800 border-slate-600 checked:bg-[#14E19D] checked:border-[#14E19D] focus:ring-0 transition-all" /> Recordarme
                            </label>
                            <a href="#" className="hover:text-[#14E19D] transition-colors">¿Olvidaste tu clave?</a>
                        </div>

                        <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-2.5 rounded-none shadow-lg shadow-emerald-900/20 transition-all transform hover:scale-[1.02] active:scale-95 font-[family-name:var(--font-orbitron)] tracking-widest border border-white/10">
                            INICIAR SESIÓN
                        </button>

                        <div className="text-center pt-2">
                            <span className="text-gray-500 text-xs font-[family-name:var(--font-orbitron)]">¿No tienes cuenta? </span>
                            <a href="#" className="text-[#14E19D] text-xs font-bold hover:underline font-[family-name:var(--font-orbitron)]">Regístrate aquí</a>
                        </div>
                    </div>
                </div>


                {/* TOP BAR (Main Header) - Completely hidden when scrolled OR on news section */}
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

                    {/* Right: Icons (Top Bar) */}
                    <div className="flex items-center gap-4 text-white relative">
                        {/* SEARCH INPUT - EXPANDING */}
                        <div className={`overflow-hidden transition-[width,opacity] duration-300 ease-in-out ${isSearchOpen ? 'w-64 opacity-100 mr-2' : 'w-0 opacity-0'
                            }`}>
                            <input
                                type="text"
                                placeholder="Buscar en Quantum..."
                                className="w-full bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-white/50 focus:bg-white/20 placeholder-gray-400 font-[family-name:var(--font-orbitron)] tracking-wider"
                            />
                        </div>

                        {/* Search Trigger */}
                        <button
                            onClick={toggleSearch}
                            className={`p-3 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer ${isSearchOpen ? 'bg-white text-[#1D272E]' : 'hover:bg-white/10'}`}
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </button>

                        {/* Login Trigger */}
                        <button
                            onClick={toggleLogin}
                            className={`p-3 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer ${isLoginOpen ? 'bg-[#14E19D] text-[#1D262F]' : 'bg-slate-800 hover:bg-slate-700'}`}
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        </button>
                    </div>
                </div>

                {/* BOTTOM BAR (Green Nav) */}
                <div className={`w-full bg-primary relative flex items-center justify-center transition-[height,box-shadow] duration-700 ease-in-out shadow-xl will-change-[height] ${showCompactNav ? 'h-16' : 'h-12'
                    }`}>

                    {/* Main Flex Container for Bottom Bar - Balanced for perfect centering */}
                    <div className={`w-full max-w-[1800px] px-4 md:px-8 h-full flex items-center transition-all duration-500`}>

                        {/* 1. Left Section: Balanced width (Reverted to stable flex-1) */}
                        <div className={`flex-1 flex items-center justify-start ${showCompactNav ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                            <button
                                onClick={() => setIsSidebarOpen(true)}
                                className="text-white p-2 hover:bg-black/10 rounded-full transition-transform hover:scale-110 cursor-pointer"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </button>
                        </div>

                        {/* 2. Center Section: Guaranteed absolute centering */}
                        <div className={`shrink-0 h-full relative z-10 ${showCompactNav ? 'w-[70%] md:w-[60%] lg:w-[50%]' : 'w-full'}`}>
                            {/* NOT SCROLLED STATE */}
                            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${showCompactNav ? 'opacity-0 scale-95 pointer-events-none -translate-y-2' : 'opacity-100 scale-100 translate-y-0'}`}>
                                <ul className="flex items-center space-x-6 md:space-x-12 font-bold text-white uppercase tracking-wider text-xs md:text-sm whitespace-nowrap">
                                    <li><Link href="/" className="hover:text-black/50 transition">Inicio</Link></li>
                                    <li><Link href="/mission_vision" className="hover:text-black/50 transition">Misión y Visión</Link></li>
                                    <li><Link href="/news" className="hover:text-black/50 transition">Noticias y Eventos</Link></li>
                                    <li><Link href="/investigations" className="hover:text-black/50 transition">Investigaciones</Link></li>
                                </ul>
                            </div>

                            {/* SCROLLED STATE - Balanced Flex for absolute logo centering */}
                            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${showCompactNav ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-105 pointer-events-none'}`}>
                                {/* MANUAL ADJUSTMENT: Change the -translate-x value below to manually control shift distance when search is open */}
                                <div className={`flex items-center w-full font-bold text-white uppercase tracking-widest text-xs lg:text-[13px] transition-transform duration-500 ${isSearchOpen ? '-translate-x-24 md:-translate-x-36 lg:-translate-x-48' : 'translate-x-0'}`}>

                                    {/* Left Links Group */}
                                    <div className="flex-1 flex justify-end gap-8 lg:gap-14">
                                        <Link href="/" className="hover:text-black/50 transition">Inicio</Link>
                                        <Link href="/mission_vision" className="hover:text-black/50 transition whitespace-nowrap">Misión y Visión</Link>
                                    </div>

                                    {/* Center Logo */}
                                    <div className="relative shrink-0 w-26 h-9 lg:w-30 lg:h-10 mx-6 lg:mx-14">
                                        <Image src="/quantum-logo.png" alt="Logo" fill className="object-contain" />
                                    </div>

                                    {/* Right Links Group */}
                                    <div className="flex-1 flex justify-start gap-8 lg:gap-14">
                                        <Link href="/news" className="hover:text-black/50 transition whitespace-nowrap">Noticias y Eventos</Link>
                                        <Link href="/investigations" className="hover:text-black/50 transition whitespace-nowrap">Investigaciones</Link>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Scrolled State (Just Logo/Title or similar) */}
                            <div className={`absolute inset-0 flex md:hidden items-center justify-center transition-all duration-500 ${showCompactNav ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                <span className="font-bold text-white tracking-widest text-lg font-[family-name:var(--font-orbitron)]">QUANTUM</span>
                            </div>
                        </div>

                        {/* 3. Right Section: Balanced width */}
                        <div className={`flex-1 flex items-center justify-end ${showCompactNav ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                            <div className="flex items-center gap-3 text-white">
                                {/* Search Input Container */}
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isSearchOpen ? 'w-40 md:w-64 opacity-100 mr-1' : 'w-0 opacity-0'}`}>
                                    <input
                                        type="text"
                                        placeholder="Buscar..."
                                        className="w-full bg-black/20 border border-white/20 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-white/50 focus:bg-black/30 placeholder-white/50 font-[family-name:var(--font-orbitron)]"
                                    />
                                </div>

                                <button
                                    onClick={toggleSearch}
                                    className={`p-2.5 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer ${isSearchOpen ? 'bg-white text-emerald-600' : 'hover:bg-black/10'}`}
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </button>

                                <button
                                    onClick={toggleLogin}
                                    className={`p-2.5 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer ${isLoginOpen ? 'bg-[#1D272E] text-white' : 'bg-white/20 hover:bg-white/30'}`}
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
