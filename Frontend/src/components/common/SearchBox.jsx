'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

/**
 * Todas las rutas del sitio con su configuración de acceso.
 * requiredRole: null = pública | 'authenticated' = cualquier usuario logueado
 *               | 'moderator' = moderador o admin | 'admin' = solo admin
 */
const ALL_PAGES = [
    { label: 'Inicio', href: '/', description: 'Página principal de Quantum Student', requiredRole: null },
    { label: 'Misión y Visión', href: '/mission_vision', description: 'Nuestro propósito y rumbo estratégico', requiredRole: null },
    { label: '¿Quiénes somos?', href: '/about_us', description: 'Identidad, misión, visión y valores del grupo', requiredRole: null },
    { label: 'Áreas de Interés', href: '/areas_of_interest', description: 'Fibra óptica, sensores, FPGA, robótica y más', requiredRole: null },
    { label: 'Investigaciones', href: '/investigations', description: 'Repositorio de investigaciones académicas', requiredRole: null },
    { label: 'Noticias y Eventos', href: '/news', description: 'Últimas noticias y próximos eventos', requiredRole: null },
    { label: 'Mis Investigaciones', href: '/my-investigations', description: 'Gestiona tus proyectos de investigación', requiredRole: 'authenticated' },
    { label: 'Mis Noticias', href: '/my-news', description: 'Gestiona tus publicaciones y noticias', requiredRole: 'moderator' },
    { label: 'Mis Eventos', href: '/my-events', description: 'Gestiona tus eventos organizados', requiredRole: 'moderator' },
    { label: 'Gestionar Usuarios', href: '/manage-users', description: 'Administrar roles y accesos de usuarios', requiredRole: 'admin' },
    { label: 'Crear Usuario', href: '/create-user', description: 'Registrar nuevos miembros del equipo', requiredRole: 'admin' },
];

const ROLE_HIERARCHY = {
    'admin': 3,
    'administrador': 3,
    'moderator': 2,
    'moderador': 2,
    'authenticated': 1,
    'miembro activo': 1,
    'null': 0
};

/**
 * Filtra las páginas según el estado de autenticación y rol del usuario.
 * @param {boolean} isAuthenticated
 * @param {object|null} user - objeto con propiedad `role`
 */
function getAccessiblePages(isAuthenticated, user) {
    const userLevel = isAuthenticated
        ? (ROLE_HIERARCHY[user?.role?.toLowerCase()] ?? 1)
        : 0;

    return ALL_PAGES.filter((page) => {
        if (!page.requiredRole) return true;
        const required = ROLE_HIERARCHY[page.requiredRole] ?? 1;
        return userLevel >= required;
    });
}

/**
 * Componente de buscador con autocompletado y portal.
 * El dropdown se renderiza en el body para evitar clipping por overflow-hidden.
 *
 * @param {string} placeholder - Placeholder del campo de texto.
 * @param {string} inputClassName - Clases CSS del input.
 * @param {function} onClose - Callback al navegar (para cerrar sidebar, etc.).
 */
export default function SearchBox({ placeholder = 'Buscar...', inputClassName = '', onClose }) {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);
    const [dropdownStyle, setDropdownStyle] = useState({});
    const [mounted, setMounted] = useState(false);

    const router = useRouter();
    const { isAuthenticated, user } = useAuth();
    const inputRef = useRef(null);
    const wrapperRef = useRef(null);

    // Ensure portal works only client-side
    useEffect(() => { setMounted(true); }, []);

    // Close on click outside or on scroll/wheel
    useEffect(() => {
        const handleClose = () => setIsOpen(false);
        
        const handleClickOutside = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                handleClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('scroll', handleClose, { passive: true });
        window.addEventListener('wheel', handleClose, { passive: true });

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleClose);
            window.removeEventListener('wheel', handleClose);
        };
    }, []);

    // Position dropdown under the input (needed because of portal)
    const updateDropdownPosition = () => {
        if (!inputRef.current) return;
        const rect = inputRef.current.getBoundingClientRect();
        setDropdownStyle({
            position: 'fixed',
            top: rect.bottom + 4,
            left: rect.left,
            width: Math.max(rect.width, 260),
            zIndex: 9999,
        });
    };

    // Build suggestions whenever query or auth state changes
    useEffect(() => {
        if (!query.trim()) {
            setSuggestions([]);
            setIsOpen(false);
            setActiveIndex(-1);
            return;
        }

        const normalize = (str) =>
            str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        const q = normalize(query);
        const accessible = getAccessiblePages(isAuthenticated, user);
        const matched = accessible.filter(
            (p) => normalize(p.label).includes(q) || normalize(p.description).includes(q)
        );

        setSuggestions(matched);
        setActiveIndex(-1);

        if (matched.length > 0) {
            updateDropdownPosition();
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [query, isAuthenticated, user]);

    const navigate = (href) => {
        router.push(href);
        setQuery('');
        setIsOpen(false);
        if (onClose) onClose();
    };

    // Keyboard navigation
    const handleKeyDown = (e) => {
        if (!isOpen) return;
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActiveIndex((prev) => Math.min(prev + 1, suggestions.length - 1));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActiveIndex((prev) => Math.max(prev - 1, 0));
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (activeIndex >= 0 && suggestions[activeIndex]) {
                navigate(suggestions[activeIndex].href);
            }
        } else if (e.key === 'Escape') {
            setIsOpen(false);
        }
    };

    const dropdown = isOpen && suggestions.length > 0 && (
        <div
            style={dropdownStyle}
            className="bg-[#1D262F] border border-[#14E19D]/30 shadow-2xl shadow-black/60 rounded-sm overflow-hidden"
        >
            {suggestions.map((s, i) => (
                <button
                    key={s.href}
                    onMouseDown={(e) => { e.preventDefault(); navigate(s.href); }}
                    onMouseEnter={() => setActiveIndex(i)}
                    className={`w-full text-left px-4 py-3 flex flex-col gap-0.5 transition-colors border-b border-slate-700/50 last:border-0 ${i === activeIndex
                        ? 'bg-[#14E19D]/10 text-[#14E19D]'
                        : 'text-white hover:bg-slate-700/40'
                        }`}
                >
                    <span className="text-sm font-bold font-[family-name:var(--font-orbitron)] tracking-wide">
                        {s.label}
                    </span>
                    <span className={`text-xs ${i === activeIndex ? 'text-[#14E19D]/70' : 'text-slate-400'}`}>
                        {s.description}
                    </span>
                </button>
            ))}
        </div>
    );

    return (
        <div ref={wrapperRef} className="relative w-full">
            <div className="relative">
                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onFocus={() => {
                        if (query && suggestions.length > 0) {
                            updateDropdownPosition();
                            setIsOpen(true);
                        }
                    }}
                    placeholder={placeholder}
                    autoComplete="off"
                    className={`w-full pr-9 ${inputClassName}`}
                />
                {/* Search icon */}
                <svg
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>

            {/* Portal: renders dropdown at document.body to escape overflow:hidden parents */}
            {mounted && createPortal(dropdown, document.body)}
        </div>
    );
}
