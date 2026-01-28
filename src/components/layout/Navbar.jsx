'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Sidebar from './Sidebar';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    // Close login when clicking outside (optional UX improvement)
    const loginRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
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


                {/* TOP BAR (Main Dark Header) */}
                <div className={`w-full bg-[#1D272E] flex items-center justify-between px-6 transition-all duration-700 ease-in-out overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-32 md:h-48 opacity-100'
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
                    <div className={`flex flex-col items-center transition-transform duration-700 delay-0 origin-top ${isScrolled ? 'scale-75 translate-y-10 opacity-0' : 'scale-100 translate-y-0 opacity-100'
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
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isSearchOpen ? 'w-64 opacity-100 mr-2' : 'w-0 opacity-0'
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
                <div className={`w-full bg-primary relative flex items-center justify-center transition-all duration-700 ease-in-out shadow-xl ${isScrolled ? 'h-16' : 'h-12'
                    }`}>

                    {/* Left Absolute: Hamburger (Scrolled) */}
                    <div className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 transition-opacity duration-300 ${!isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="text-white p-2 hover:bg-black/10 rounded-full transition-transform hover:scale-110 cursor-pointer"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                    </div>

                    {/* Right Absolute: Icons (Scrolled) */}
                    <div className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center gap-4 text-white transition-opacity duration-300 ${!isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>

                        {/* SEARCH INPUT (SCROLLED) - Uses same state, visual persistence */}
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isSearchOpen ? 'w-48 opacity-100 mr-1' : 'w-0 opacity-0'
                            }`}>
                            <input
                                type="text"
                                placeholder="Buscar..."
                                className="w-full bg-black/20 border border-white/20 rounded-full px-3 py-1.5 text-xs text-white focus:outline-none focus:border-white/50 focus:bg-black/30 placeholder-white/50 font-[family-name:var(--font-orbitron)]"
                            />
                        </div>

                        {/* Search Trigger (Scrolled) */}
                        <button
                            onClick={toggleSearch}
                            className={`p-2 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer ${isSearchOpen ? 'bg-white text-emerald-600' : 'hover:bg-black/10'}`}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </button>

                        {/* Login Trigger (Scrolled) */}
                        <button
                            onClick={toggleLogin}
                            className={`p-2 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer ${isLoginOpen ? 'bg-[#1D272E] text-white' : 'bg-white/20 hover:bg-white/30'}`}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        </button>
                    </div>

                    {/* Center Content: Links + Logo */}
                    <div className={`w-full max-w-7xl px-16 h-full items-center ${isScrolled ? 'grid grid-cols-[1fr_auto_1fr] hidden md:grid' : 'flex justify-center'}`}>
                        {/* SCROLLED STATE: LEFT GROUP */}
                        {isScrolled && (
                            <div className="flex justify-end gap-8 font-bold text-white uppercase tracking-wider text-sm pr-8 animate-fade-in-up">
                                <Link href="#" className="hover:text-black/50 transition whitespace-nowrap">Inicio</Link>
                                <Link href="#" className="hover:text-black/50 transition whitespace-nowrap">Misión y Visión</Link>
                            </div>
                        )}

                        {/* SCROLLED STATE: LOGO */}
                        {isScrolled && (
                            <div className="flex justify-center px-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                                <div className="relative w-32 h-10">
                                    <Image
                                        src="/quantum-logo.png"
                                        alt="Quantum Student Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        )}

                        {/* SCROLLED STATE: RIGHT GROUP */}
                        {isScrolled && (
                            <div className="flex justify-start gap-8 font-bold text-white uppercase tracking-wider text-sm pl-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                <Link href="#" className="hover:text-black/50 transition whitespace-nowrap">Noticias y Eventos</Link>
                                <Link href="#" className="hover:text-black/50 transition whitespace-nowrap">Áreas de Interés</Link>
                            </div>
                        )}

                        {/* NOT SCROLLED STATE: ALL LINKS */}
                        {!isScrolled && (
                            <ul className="flex items-center space-x-12 font-bold text-white uppercase tracking-wider text-sm">
                                <li><Link href="#" className="hover:text-black/50 transition">Inicio</Link></li>
                                <li><Link href="#" className="hover:text-black/50 transition">Misión y Visión</Link></li>
                                <li><Link href="#" className="hover:text-black/50 transition">Noticias y Eventos</Link></li>
                                <li><Link href="#" className="hover:text-black/50 transition">Áreas de Interés</Link></li>
                            </ul>
                        )}
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
