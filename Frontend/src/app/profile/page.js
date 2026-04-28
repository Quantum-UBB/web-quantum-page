"use client";

import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

export default function ProfilePage() {
    const { user, isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen pt-56 bg-[#1D272E] text-white text-center">
                Iniciando sesión...
            </div>
        );
    }

    return (
        <main className="min-h-screen pb-20 relative bg-[#1D272E] -mt-[190px] md:-mt-[300px] z-10">
            {/* Background Overlay */}
            <div className="fixed inset-0 z-0 bg-[#1D272E]">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24 md:pt-32">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight uppercase">
                            MI <span className="text-cyan-400">PERFIL</span>
                        </h1>
                        <p className="text-slate-400">Información de tu cuenta en Quantum.</p>
                    </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                    <div className="flex items-center gap-6 mb-8">
                        <div className="w-24 h-24 rounded-full bg-slate-700 flex items-center justify-center border-2 border-cyan-500">
                            <svg className="w-12 h-12 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-1">{user?.name || 'Usuario'}</h2>
                            <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest rounded-full">
                                {user?.role || 'Miembro'}
                            </span>
                        </div>
                    </div>

                    <div className="space-y-6 border-t border-gray-800 pt-8">
                        <div>
                            <label className="block text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Nombre de Usuario</label>
                            <div className="text-white bg-slate-800/50 border border-slate-700 px-4 py-3 rounded-lg">
                                {user?.username || '-'}
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Rol</label>
                            <div className="text-white bg-slate-800/50 border border-slate-700 px-4 py-3 rounded-lg">
                                {user?.role || '-'}
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8 flex justify-end">
                        <Link href="/" className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2.5 px-6 rounded-lg transition-all text-sm uppercase tracking-widest">
                            Volver al Inicio
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
