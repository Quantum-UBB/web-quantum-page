'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';
import { useAuth } from '../../context/AuthContext';
import SearchBox from '../common/SearchBox';

/**
 * Componente de navegación principal (Navbar).
 * Gestiona el estado del scroll, la apertura del sidebar, la búsqueda 
 * y el dropdown de inicio de sesión/perfil.
 */
const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const pathname = usePathname();
    const isCompactRoute = pathname?.startsWith('/news') || pathname?.startsWith('/my-investigations') || pathname?.startsWith('/investigations') || pathname?.startsWith('/my-news') || pathname?.startsWith('/my-events') || pathname?.startsWith('/create-user') || pathname?.startsWith('/manage-users');

    // Force compact state if on compact routes, otherwise use scroll state
    const showCompactNav = isCompactRoute || isScrolled;

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

    // Scroll to top on page change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // Auth Context Hooks
    const { user, login, logout, isAuthenticated } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [loginError, setLoginError] = useState('');
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    // Toggle Handlers
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        if (isLoginOpen) setIsLoginOpen(false); // Close login if search opens
    };

    const toggleLogin = () => {
        setIsLoginOpen(!isLoginOpen);
        if (isSearchOpen) setIsSearchOpen(false); // Close search if login opens
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setLoginError('');
        setIsLoggingIn(true);

        const result = await login(email, password, rememberMe);

        if (result.success) {
            setIsLoginOpen(false);
            setEmail('');
            setPassword('');
        } else {
            setLoginError(result.message || 'Error al iniciar sesión');
        }
        setIsLoggingIn(false);
    };

    const handleLogout = () => {
        logout();
        setIsLoginOpen(false);
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

                    {isAuthenticated ? (
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-white mb-2 font-[family-name:var(--font-orbitron)] tracking-wider">Hola, {user.name}</h3>
                            <p className="text-xs text-[#14E19D] uppercase tracking-widest font-[family-name:var(--font-orbitron)] mb-6">Rol: {user.role}</p>

                            <Link href="/my-news" onClick={() => setIsLoginOpen(false)} className="block w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-2.5 rounded-none mb-3 border border-slate-600 transition-colors">
                                {user.role === 'Administrador' ? 'NOTICIAS' : 'MIS NOTICIAS'}
                            </Link>

                            <Link href="/my-events" onClick={() => setIsLoginOpen(false)} className="block w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-2.5 rounded-none mb-3 border border-slate-600 transition-colors">
                                {user.role === 'Administrador' ? 'EVENTOS' : 'MIS EVENTOS'}
                            </Link>

                            {user.role === 'Administrador' && (
                                <>
                                    <Link href="/manage-users" onClick={() => setIsLoginOpen(false)} className="block w-full bg-slate-800 hover:bg-slate-700 text-[#14E19D] font-bold py-2.5 rounded-none mb-3 border border-[#14E19D]/50 transition-colors">
                                        GESTIÓN DE CUENTAS
                                    </Link>
                                </>
                            )}

                            <Link href="/my-investigations" onClick={() => setIsLoginOpen(false)} className="block w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-2.5 rounded-none mb-3 border border-slate-600 transition-colors">
                                MIS INVESTIGACIONES
                            </Link>

                            <button onClick={handleLogout} className="w-full bg-[#BA1149] hover:bg-red-700 text-white font-bold py-2.5 rounded-none transition-colors border border-red-900">
                                CERRAR SESIÓN
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="text-center mb-6">
                                <h3 className="text-xl font-bold text-white mb-1 font-[family-name:var(--font-orbitron)] tracking-wider">Bienvenido</h3>
                                <p className="text-xs text-[#14E19D] uppercase tracking-widest font-[family-name:var(--font-orbitron)]">Acceso Plataforma</p>
                            </div>

                            <form onSubmit={handleLoginSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-gray-400 text-xs font-bold mb-1 ml-1 font-[family-name:var(--font-orbitron)] tracking-widest">EMAIL</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-slate-800/50 border border-slate-600 rounded-none px-4 py-2 text-white focus:outline-none focus:border-[#14E19D] focus:ring-1 focus:ring-[#14E19D] transition-all placeholder-gray-600 font-[family-name:var(--font-orbitron)] text-sm"
                                        placeholder="usuario@quantum.edu"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-400 text-xs font-bold mb-1 ml-1 font-[family-name:var(--font-orbitron)] tracking-widest">CONTRASEÑA</label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full bg-slate-800/50 border border-slate-600 rounded-none px-4 py-2 text-white focus:outline-none focus:border-[#14E19D] focus:ring-1 focus:ring-[#14E19D] transition-all placeholder-gray-600 font-[family-name:var(--font-orbitron)] text-sm"
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>

                                {loginError && (
                                    <div className="text-red-500 text-xs text-center border border-red-500/30 bg-red-500/10 p-2">
                                        {loginError}
                                    </div>
                                )}

                                <div className="flex items-center justify-between text-xs text-gray-400 font-[family-name:var(--font-orbitron)]">
                                    <label className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                                        <input
                                            type="checkbox"
                                            checked={rememberMe}
                                            onChange={(e) => setRememberMe(e.target.checked)}
                                            className="rounded-none bg-slate-800 border-slate-600 checked:bg-[#14E19D] checked:border-[#14E19D] focus:ring-0 transition-all"
                                        /> Recordarme
                                    </label>
                                    <a href="#" className="hover:text-[#14E19D] transition-colors">¿Olvidaste tu clave?</a>
                                </div>

                                <button type="submit" disabled={isLoggingIn} className={`w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-2.5 rounded-none shadow-lg shadow-emerald-900/20 transition-all transform hover:scale-[1.02] active:scale-95 font-[family-name:var(--font-orbitron)] tracking-widest border border-white/10 ${isLoggingIn ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                    {isLoggingIn ? 'INGRESANDO...' : 'INICIAR SESIÓN'}
                                </button>
                            </form>
                        </>
                    )}
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
                        <div className={`overflow-hidden transition-[width,opacity] duration-300 ease-in-out ${isSearchOpen ? 'w-72 opacity-100 mr-2' : 'w-0 opacity-0'
                            }`}>
                            <SearchBox
                                placeholder="Buscar en Quantum..."
                                inputClassName="w-full bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-white/50 focus:bg-white/20 placeholder-gray-400 font-[family-name:var(--font-orbitron)] tracking-wider"
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
                            className={`relative p-3 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer ${isLoginOpen ? 'bg-[#14E19D] text-[#1D262F]' : (isAuthenticated ? 'bg-[#14E19D] text-[#1D262F]' : 'bg-slate-800 hover:bg-slate-700 text-white')}`}
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            {isAuthenticated && <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-emerald-300 shadow-[0_0_10px_#14E19D] rounded-full"></span>}
                        </button>
                    </div>
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
                            {/* Row 1: Icons & Transitioning Logo (Hidden at top to avoid redundancy with Top Nav) */}
                            <div className={`items-center justify-between w-full transition-all duration-700 ${showCompactNav ? 'flex opacity-100 translate-y-0' : 'hidden opacity-0 -translate-y-8 pointer-events-none'}`}>
                                <div className="flex items-center gap-1">
                                    <button onClick={() => setIsSidebarOpen(true)} className="text-white p-2">
                                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                    </button>
                                    <button onClick={toggleSearch} className="text-white p-2">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    </button>
                                </div>
                                
                                <div className="relative w-24 h-8">
                                    <Image src="/quantum-logo.png" alt="Logo" fill className="object-contain" />
                                </div>

                                <button onClick={toggleLogin} className={`p-2 rounded-full ${isAuthenticated ? 'bg-white text-emerald-600' : 'bg-white/20 text-white'}`}>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                </button>
                            </div>
                            {/* Row 2: Links */}
                            <div className="flex items-center justify-center w-full">
                                <ul className="flex items-center justify-center space-x-4 font-bold text-white uppercase tracking-wider text-[10px]">
                                    <li><Link href="/" className="hover:opacity-70 transition">Inicio</Link></li>
                                    <li><Link href="/mission_vision" className="hover:opacity-70 transition">Misión</Link></li>
                                    <li><Link href="/news" className="hover:opacity-70 transition">Noticias</Link></li>
                                    <li><Link href="/investigations" className="hover:opacity-70 transition">Investigaciones</Link></li>
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
                                    <Link href="/news" className="text-white hover:text-black/50 transition font-bold text-[11px] tracking-wider">NOTICIAS</Link>
                                    <Link href="/investigations" className="text-white hover:text-black/50 transition font-bold text-[11px] tracking-wider">INVESTIGACIONES</Link>
                                </div>
                            </div>
                            {/* Desktop Horizontal Links (Not scrolled) */}
                            <div className={`flex items-center justify-center h-full transition-all duration-500 ${showCompactNav ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                                <ul className="flex items-center space-x-12 font-bold text-white uppercase tracking-wider text-xs lg:text-[13px]">
                                    <li><Link href="/" className="hover:text-black/50 transition px-1">Inicio</Link></li>
                                    <li><Link href="/mission_vision" className="hover:text-black/50 transition px-1">Misión</Link></li>
                                    <li><Link href="/news" className="hover:text-black/50 transition px-1">Noticias</Link></li>
                                    <li><Link href="/investigations" className="hover:text-black/50 transition px-1">Investigaciones</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="hidden md:flex flex-1 items-center justify-end">
                            <div className={`flex items-center gap-3 text-white transition-all duration-500 ${showCompactNav ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isSearchOpen ? 'w-40 md:w-64 opacity-100' : 'w-0 opacity-0'}`}>
                                    <SearchBox placeholder="Buscar..." inputClassName="w-full bg-black/20 border border-white/20 rounded-full px-4 py-2 text-sm text-white" />
                                </div>
                                <button onClick={toggleSearch} className={`p-2.5 rounded-full ${isSearchOpen ? 'bg-white text-emerald-600' : 'hover:bg-black/10'}`}>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </button>
                                <button onClick={toggleLogin} className={`p-2.5 rounded-full ${isAuthenticated ? 'bg-[#14E19D] text-[#1D262F]' : 'bg-white/20'}`}>
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
