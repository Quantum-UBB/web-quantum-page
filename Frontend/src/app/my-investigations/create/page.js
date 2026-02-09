"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Orbitron, Inter, Roboto_Mono } from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });
const robotoMono = Roboto_Mono({ subsets: ['latin'] });

export default function CrearInvestigacionPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: '',
        status: 'En Curso',
        difficulty: 'Intermedio',
        abstract: '',
        arxiv: '',
        tags: '',
        progress: 0,
        coResearchers: '',
        mentors: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Nueva Investigación:', {
            ...formData,
            tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag !== ''),
            coResearchers: formData.coResearchers.split(',').map(r => r.trim()).filter(r => r !== ''),
            mentors: formData.mentors.split(',').map(m => m.trim()).filter(m => m !== ''),
            lastUpdate: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' }),
            researcher: "Dr. Roberto Leyva" // Simulamos el usuario actual
        });

        // Simulación de guardado exitoso
        alert('Investigación creada localmente (simulación)');
        router.push('/my-investigations');
    };

    return (
        <main className={`min-h-screen pb-20 relative bg-[#0b0f19] ${inter.className}`}>
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 bg-[#0b0f19]">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <Link href="/my-investigations" className="inline-flex items-center text-slate-400 hover:text-[#14E19D] transition-colors text-sm font-medium mb-8 group">
                    <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    Volver a Mis Investigaciones
                </Link>

                <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-xl p-8 shadow-2xl">
                    <h1 className={`text-3xl font-bold text-white mb-8 border-b border-slate-800 pb-4 ${orbitron.className}`}>
                        NUEVA <span className="text-[#14E19D]">INVESTIGACIÓN</span>
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Título */}
                        <div className="space-y-2">
                            <label className="text-[10px] text-slate-500 uppercase tracking-widest block">Título de la Investigación</label>
                            <input
                                required
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Ej: Optimización de sistemas cuánticos..."
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#14E19D] transition-colors"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Estado */}
                            <div className="space-y-2">
                                <label className="text-[10px] text-slate-500 uppercase tracking-widest block">Estado</label>
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#14E19D] transition-colors appearance-none"
                                >
                                    <option value="En Curso">En Curso</option>
                                    <option value="Finalizado">Finalizado</option>
                                </select>
                            </div>

                            {/* Dificultad */}
                            <div className="space-y-2">
                                <label className="text-[10px] text-slate-500 uppercase tracking-widest block">Dificultad</label>
                                <select
                                    name="difficulty"
                                    value={formData.difficulty}
                                    onChange={handleChange}
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#14E19D] transition-colors appearance-none"
                                >
                                    <option value="Principiante">Principiante</option>
                                    <option value="Intermedio">Intermedio</option>
                                    <option value="Avanzado">Avanzado</option>
                                </select>
                            </div>
                        </div>

                        {/* Progreso (Solo si está en curso) */}
                        {formData.status === 'En Curso' && (
                            <div className="space-y-6 pt-2">
                                <style jsx>{`
                                    .quantum-slider {
                                        -webkit-appearance: none;
                                        width: 100%;
                                        height: 4px;
                                        background: #1e293b;
                                        border-radius: 5px;
                                        outline: none;
                                        position: relative;
                                    }
                                    .quantum-slider::-webkit-slider-thumb {
                                        -webkit-appearance: none;
                                        appearance: none;
                                        width: 18px;
                                        height: 18px;
                                        background: #14E19D;
                                        cursor: pointer;
                                        border-radius: 2px;
                                        border: 2px solid #0b0f19;
                                        box-shadow: 0 0 10px rgba(20, 225, 157, 0.5);
                                    }
                                    .quantum-slider::-webkit-slider-thumb:hover {
                                        transform: scale(1.2);
                                        box-shadow: 0 0 15px rgba(20, 225, 157, 0.8);
                                    }
                                    .quantum-slider::-moz-range-thumb {
                                        width: 18px;
                                        height: 18px;
                                        background: #14E19D;
                                        cursor: pointer;
                                        border-radius: 2px;
                                        border: 2px solid #0b0f19;
                                        box-shadow: 0 0 10px rgba(20, 225, 157, 0.5);
                                    }
                                `}</style>
                                <div className="flex justify-between items-end">
                                    <label className="text-[10px] text-slate-500 uppercase tracking-widest block">Progreso del Proyecto</label>
                                    <span className="text-white font-mono text-sm px-2 py-0.5 bg-slate-800 rounded border border-slate-700 shadow-[0_0_10px_rgba(20,225,157,0.1)]">{formData.progress}%</span>
                                </div>
                                <div className="relative flex items-center h-6">
                                    {/* Filled Track background with glow */}
                                    <div
                                        className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-[#14E19D] rounded-full shadow-[0_0_10px_rgba(20,225,157,0.3)] pointer-events-none"
                                        style={{ width: `${formData.progress}%` }}
                                    ></div>
                                    <input
                                        type="range"
                                        name="progress"
                                        min="0"
                                        max="100"
                                        value={formData.progress}
                                        onChange={handleChange}
                                        className="quantum-slider z-10"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Resumen / Abstract */}
                        <div className="space-y-2">
                            <label className="text-[10px] text-slate-500 uppercase tracking-widest block">Resumen (Markdown soportado)</label>
                            <textarea
                                required
                                name="abstract"
                                rows="6"
                                value={formData.abstract}
                                onChange={handleChange}
                                placeholder="Describe los objetivos y hallazgos clave..."
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#14E19D] transition-colors resize-none"
                            />
                        </div>

                        {/* Archivo de Investigación */}
                        <div className="space-y-2">
                            <label className="text-[10px] text-slate-500 uppercase tracking-widest block">Documentación (PDF / DOCX)</label>
                            <div className="relative">
                                <input
                                    type="file"
                                    id="file-upload"
                                    className="hidden"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        if (file) {
                                            setFormData(prev => ({ ...prev, selectedFile: file.name }));
                                        }
                                    }}
                                />
                                <label
                                    htmlFor="file-upload"
                                    className="flex items-center justify-between w-full bg-slate-800/30 border border-slate-700 border-dashed rounded-lg px-4 py-4 cursor-pointer hover:border-[#14E19D] hover:bg-slate-800/50 transition-all group"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-[#14E19D]/10 transition-colors">
                                            <svg className="w-5 h-5 text-slate-400 group-hover:text-[#14E19D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-white font-medium">
                                                {formData.selectedFile || "Selecciona un archivo para subir"}
                                            </p>
                                            <p className="text-[10px] text-slate-500 uppercase">Máximo 25MB • PDF, DOCX</p>
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-bold text-[#14E19D] uppercase tracking-widest border border-[#14E19D]/30 px-3 py-1 rounded group-hover:bg-[#14E19D] group-hover:text-slate-900 transition-all">
                                        Examinar
                                    </span>
                                </label>
                            </div>
                        </div>

                        {/* Metadata grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] text-slate-500 uppercase tracking-widest block">ArXiv ID (Opcional)</label>
                                <input
                                    name="arxiv"
                                    value={formData.arxiv}
                                    onChange={handleChange}
                                    placeholder="2402.XXXXX"
                                    className={`w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-[#14E19D] focus:outline-none focus:border-[#14E19D] transition-colors font-mono text-sm ${robotoMono.className}`}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] text-slate-500 uppercase tracking-widest block">Etiquetas (separadas por coma)</label>
                                <input
                                    name="tags"
                                    value={formData.tags}
                                    onChange={handleChange}
                                    placeholder="Cuántica, Redes, Fibra..."
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#14E19D] transition-colors"
                                />
                            </div>
                        </div>

                        {/* Colaboradores y Mentores */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] text-slate-500 uppercase tracking-widest block">Co-investigadores</label>
                                <input
                                    name="coResearchers"
                                    value={formData.coResearchers}
                                    onChange={handleChange}
                                    placeholder="Nombres separados por coma"
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#14E19D] transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] text-slate-500 uppercase tracking-widest block">Mentores</label>
                                <input
                                    name="mentors"
                                    value={formData.mentors}
                                    onChange={handleChange}
                                    placeholder="Nombres separados por coma"
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#14E19D] transition-colors"
                                />
                            </div>
                        </div>

                        {/* Botones de acción */}
                        <div className="flex gap-4 pt-4">
                            <button
                                type="submit"
                                className="flex-1 bg-[#14E19D] hover:bg-emerald-400 text-slate-900 font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg shadow-emerald-500/20 active:scale-[0.98] uppercase tracking-widest text-xs"
                            >
                                Crear Investigación
                            </button>
                            <Link
                                href="/my-investigations"
                                className="flex-1 bg-transparent border border-slate-700 hover:border-white text-slate-400 hover:text-white font-bold py-4 rounded-lg transition-all text-center uppercase tracking-widest text-xs"
                            >
                                Cancelar
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
