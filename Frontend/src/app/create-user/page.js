"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import { registerUser } from '../../services/dataService';

export default function CreateUserPage() {
    const router = useRouter();
    const { user, token, isAuthenticated } = useAuth();
    
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: 'Miembro Activo'
    });
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Protect route: Only admins can see this
    if (!isAuthenticated) return null;
    if (user?.role !== 'Administrador') {
        if (typeof window !== 'undefined') {
             router.push('/');
        }
        return null;
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            await registerUser(formData, token);
            setSuccess(`Usuario ${formData.username} creado exitosamente.`);
            setFormData({
                username: '',
                email: '',
                password: '',
                role: 'Miembro Activo'
            });
        } catch (err) {
            setError(err.message || 'Error al crear el usuario');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#1D272E] text-gray-100 font-sans selection:bg-cyan-500/30 -mt-[190px] md:-mt-[300px] relative z-10 pt-24 md:pt-32 pb-20 px-6">
            <div className="max-w-2xl mx-auto">
                <div className="mb-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4 font-[family-name:var(--font-orbitron)]">
                        NUEVO PERFIL
                    </h1>
                    <p className="text-gray-400 text-lg">Crea un nuevo acceso a la plataforma Quantum.</p>
                </div>

                <div className="bg-[#1D262F]/95 backdrop-blur-xl border border-[#14E19D] shadow-[0_0_30px_rgba(20,225,157,0.1)] p-8 md:p-12">
                    {error && (
                        <div className="mb-6 bg-red-500/10 border border-red-500/30 text-red-500 p-4 font-[family-name:var(--font-orbitron)] text-sm">
                            {error}
                        </div>
                    )}
                    {success && (
                        <div className="mb-6 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-4 font-[family-name:var(--font-orbitron)] text-sm">
                            {success}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-[#14E19D] text-xs font-bold mb-2 tracking-widest font-[family-name:var(--font-orbitron)]">
                                NOMBRE Y APELLIDO
                            </label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                                className="w-full bg-slate-800/50 border border-slate-600 rounded-none px-4 py-3 text-white focus:outline-none focus:border-[#14E19D] focus:ring-1 focus:ring-[#14E19D] transition-all placeholder-gray-500"
                                placeholder="Ej: Juan Pérez"
                            />
                        </div>

                        <div>
                            <label className="block text-[#14E19D] text-xs font-bold mb-2 tracking-widest font-[family-name:var(--font-orbitron)]">
                                CORREO ELECTRÓNICO
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-slate-800/50 border border-slate-600 rounded-none px-4 py-3 text-white focus:outline-none focus:border-[#14E19D] focus:ring-1 focus:ring-[#14E19D] transition-all placeholder-gray-500"
                                placeholder="Ej: usuario@quantum.com"
                            />
                        </div>

                        <div>
                            <label className="block text-[#14E19D] text-xs font-bold mb-2 tracking-widest font-[family-name:var(--font-orbitron)]">
                                CONTRASEÑA ASIGNADA
                            </label>
                            <input
                                type="text"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full bg-slate-800/50 border border-slate-600 rounded-none px-4 py-3 text-white focus:outline-none focus:border-[#14E19D] focus:ring-1 focus:ring-[#14E19D] transition-all placeholder-gray-500"
                                placeholder="Escribe la contraseña temporal..."
                            />
                        </div>

                        <div>
                            <label className="block text-[#14E19D] text-xs font-bold mb-2 tracking-widest font-[family-name:var(--font-orbitron)]">
                                ROL DE SISTEMA
                            </label>
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="w-full bg-slate-800/50 border border-slate-600 rounded-none px-4 py-3 text-white focus:outline-none focus:border-[#14E19D] focus:ring-1 focus:ring-[#14E19D] transition-all cursor-pointer"
                            >
                                <option value="Miembro Activo">Miembro Activo</option>
                                <option value="Moderador">Moderador</option>
                                <option value="Administrador">Administrador</option>
                            </select>
                        </div>

                        <div className="pt-6">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-4 rounded-none shadow-lg transition-all transform hover:scale-[1.02] active:scale-95 font-[family-name:var(--font-orbitron)] tracking-widest border border-white/10 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {loading ? 'CREANDO...' : 'REGISTRAR USUARIO'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
