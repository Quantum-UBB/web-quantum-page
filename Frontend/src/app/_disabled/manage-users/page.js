"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import { getAllUsers, updateUserRole } from '@/services/authService';
import Link from 'next/link';

export default function ManageUsersPage() {
    const router = useRouter();
    const { user, token, isAuthenticated } = useAuth();
    
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [actionLoading, setActionLoading] = useState(null); // track user ID being updated
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [viewUser, setViewUser] = useState(null); // track user being viewed

    // Protect route: Only admins can see this
    useEffect(() => {
        if (!isAuthenticated) return;
        if (user?.role !== 'Administrador') {
            router.push('/');
        }
    }, [isAuthenticated, user, router]);

    useEffect(() => {
        const fetchUsers = async () => {
            if (!token) return;
            try {
                const data = await getAllUsers(token);
                setUsers(data);
            } catch (err) {
                setError(err.message || 'Error al obtener los usuarios');
            } finally {
                setLoading(false);
            }
        };

        if (isAuthenticated && user?.role === 'Administrador') {
            fetchUsers();
        }
    }, [isAuthenticated, user, token]);

    if (!isAuthenticated || user?.role !== 'Administrador') return null;

    const handleToggleModerator = async (targetUser) => {
        setActionLoading(targetUser.id);
        setError('');
        setSuccess('');

        // Determine the action to take based on the current role.
        // We assume an admin toggles a user between 'Miembro Activo' and 'Moderador'.
        // If they are something else (like 'Invitado' or 'Administrador'), we don't allow toggling here to be safe.
        
        let newRole = '';
        if (targetUser.role === 'Moderador') {
            newRole = 'Miembro Activo';
        } else if (targetUser.role === 'Miembro Activo' || targetUser.role === 'Invitado') {
            newRole = 'Moderador';
        } else {
            setError(`No se puede modificar el rol de un ${targetUser.role}.`);
            setActionLoading(null);
            return;
        }

        try {
            await updateUserRole(targetUser.id, newRole, token);
            setSuccess(`Rol de ${targetUser.username} actualizado a ${newRole}.`);
            
            // Update local state
            setUsers(prevUsers => prevUsers.map(u => 
                u.id === targetUser.id ? { ...u, role: newRole } : u
            ));
        } catch (err) {
            setError(err.message || 'Error al actualizar el rol');
        } finally {
            setActionLoading(null);
        }
    };

    if (loading) {
        return <div className="min-h-screen pt-56 bg-[#1D272E] text-[#14E19D] text-center font-orbitron tracking-widest">OBTENIENDO DATOS DE SEGURIDAD...</div>;
    }

    return (
        <main className="min-h-screen pb-20 relative bg-[#1D272E] -mt-[190px] md:-mt-[300px] z-10 pt-24 md:pt-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 mb-2 font-orbitron">
                            GESTIÓN DE CUENTAS
                        </h1>
                        <p className="text-gray-400 text-lg">Administra los permisos y accesos de la plataforma.</p>
                    </div>
                    <div>
                         <Link
                            href="/create-user"
                            className="bg-[#1D262F] hover:bg-slate-800 text-[#14E19D] border border-[#14E19D]/50 font-bold py-3 px-8 rounded-none transition-all shadow-[0_0_15px_rgba(20,225,157,0.15)] hover:shadow-[0_0_20px_rgba(20,225,157,0.3)] flex items-center justify-center gap-2 font-orbitron"
                        >
                            CREAR NUEVO USUARIO
                        </Link>
                    </div>
                </div>

                <div className="bg-[#1D262F]/95 backdrop-blur-xl border border-[#14E19D] shadow-[0_0_30px_rgba(20,225,157,0.1)] p-6 md:p-8">
                    {error && (
                        <div className="mb-6 bg-red-500/10 border border-red-500/30 text-red-500 p-4 font-orbitron text-sm">
                            {error}
                        </div>
                    )}
                    {success && (
                        <div className="mb-6 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-4 font-orbitron text-sm">
                            {success}
                        </div>
                    )}

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-[#14E19D]/30 bg-slate-900/50">
                                    <th className="px-6 py-4 text-xs font-bold text-[#14E19D] uppercase tracking-widest font-orbitron">Usuario</th>
                                    <th className="px-6 py-4 text-xs font-bold text-[#14E19D] uppercase tracking-widest font-orbitron">Email</th>
                                    <th className="px-6 py-4 text-xs font-bold text-[#14E19D] uppercase tracking-widest font-orbitron text-center">Rol Actual</th>
                                    <th className="px-6 py-4 text-xs font-bold text-[#14E19D] uppercase tracking-widest font-orbitron text-right">Permisos</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800/50">
                                {users.map((u) => (
                                    <tr key={u.id} className="hover:bg-slate-800/50 transition-colors group">
                                        <td className="px-6 py-4 text-white font-medium">{u.username}</td>
                                        <td className="px-6 py-4 text-gray-400 text-sm">{u.email}</td>
                                        <td className="px-6 py-4 text-center">
                                            <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider border font-orbitron ${
                                                u.role === 'Administrador' ? 'bg-purple-900/30 text-purple-400 border-purple-500/50' :
                                                u.role === 'Moderador' ? 'bg-cyan-900/30 text-cyan-400 border-cyan-500/50' :
                                                u.role === 'Invitado' ? 'bg-gray-800 text-gray-400 border-gray-600' :
                                                'bg-[#14E19D]/10 text-[#14E19D] border-[#14E19D]/30'
                                            }`}>
                                                {u.role}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => setViewUser(u)}
                                                className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all border font-orbitron bg-slate-800 border-slate-600 text-white hover:bg-slate-700"
                                            >
                                                VER PERFIL
                                            </button>
                                             {(u.role === 'Miembro Activo' || u.role === 'Invitado' || u.role === 'Moderador') && (
                                                <button
                                                    onClick={() => handleToggleModerator(u)}
                                                    disabled={actionLoading === u.id}
                                                    className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all border font-orbitron disabled:opacity-50 ${
                                                        u.role === 'Moderador'
                                                        ? 'bg-red-900/20 border-red-500/50 text-red-500 hover:bg-red-900/40 hover:text-red-400'
                                                        : 'bg-cyan-900/20 border-cyan-500/50 text-cyan-500 hover:bg-cyan-900/40 hover:text-cyan-400'
                                                    }`}
                                                >
                                                    {actionLoading === u.id ? 'PROCESANDO...' : (u.role === 'Moderador' ? 'REVOCAR MODERADOR' : 'OTORGAR MODERADOR')}
                                                </button>
                                            )}
                                            {u.role === 'Administrador' && (
                                                <span className="text-gray-600 text-[10px] font-bold uppercase tracking-widest font-orbitron">NO MODIFICABLE</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                                {users.length === 0 && (
                                    <tr>
                                        <td colSpan="4" className="px-6 py-8 text-center text-gray-500 italic">No se han encontrado usuarios registrados.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modal de Ver Perfil */}
            {viewUser && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="bg-[#1D272E] border border-[#14E19D]/50 shadow-[0_0_30px_rgba(20,225,157,0.15)] max-w-lg w-full p-8 relative">
                        <button 
                            onClick={() => setViewUser(null)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>

                        <h2 className="text-2xl font-bold text-white mb-6 font-orbitron uppercase tracking-widest border-b border-gray-800 pb-4">
                            PERFIL DE USUARIO
                        </h2>

                        <div className="flex items-center gap-6 mb-8">
                            <div className="w-20 h-20 rounded-full bg-slate-700 flex items-center justify-center border-2 border-[#14E19D]">
                                <svg className="w-10 h-10 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">{viewUser.username}</h3>
                                <span className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider border font-orbitron ${
                                    viewUser.role === 'Administrador' ? 'bg-purple-900/30 text-purple-400 border-purple-500/50' :
                                    viewUser.role === 'Moderador' ? 'bg-cyan-900/30 text-cyan-400 border-cyan-500/50' :
                                    viewUser.role === 'Invitado' ? 'bg-gray-800 text-gray-400 border-gray-600' :
                                    'bg-[#14E19D]/10 text-[#14E19D] border-[#14E19D]/30'
                                }`}>
                                    {viewUser.role}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-500 text-xs font-bold uppercase tracking-widest mb-1 font-orbitron">Email</label>
                                <div className="text-white bg-slate-800/50 border border-slate-700 px-4 py-3 text-sm">
                                    {viewUser.email}
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-500 text-xs font-bold uppercase tracking-widest mb-1 font-orbitron">Fecha de Registro</label>
                                <div className="text-white bg-slate-800/50 border border-slate-700 px-4 py-3 text-sm">
                                    {viewUser.createdAt ? new Date(viewUser.createdAt).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Fecha no disponible'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
