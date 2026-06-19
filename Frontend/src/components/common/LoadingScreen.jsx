"use client";

/**
 * Componente de pantalla de carga animada compartida.
 * Muestra un spinner con el logo de Quantum Student y un mensaje opcional.
 *
 * @param {string} message - Texto opcional a mostrar bajo el spinner.
 */
export default function LoadingScreen({ message = "Cargando..." }) {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0b0f19]">
            {/* Outer glow ring */}
            <div className="relative flex items-center justify-center mb-8">
                <div className="absolute w-28 h-28 rounded-full border-2 border-[#14E19D]/10 animate-ping" style={{ animationDuration: '2s' }} />
                <div className="absolute w-20 h-20 rounded-full border border-[#14E19D]/20 animate-ping" style={{ animationDuration: '1.5s', animationDelay: '0.25s' }} />

                {/* Spinner ring */}
                <svg
                    className="w-20 h-20 animate-spin"
                    style={{ animationDuration: '1.2s' }}
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="40" cy="40" r="34"
                        stroke="#1e293b"
                        strokeWidth="6"
                    />
                    <path
                        d="M40 6 A34 34 0 0 1 74 40"
                        stroke="url(#spinGradient)"
                        strokeWidth="6"
                        strokeLinecap="round"
                    />
                    <defs>
                        <linearGradient id="spinGradient" x1="40" y1="6" x2="74" y2="40" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#14E19D" />
                            <stop offset="1" stopColor="#0ea5e9" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Center Q icon */}
                <span
                    className="absolute text-2xl font-bold text-[#14E19D] font-orbitron"
                    style={{ textShadow: '0 0 20px rgba(20,225,157,0.5)' }}
                >
                    Q
                </span>
            </div>

            {/* Message */}
            <p className="text-slate-400 text-xs uppercase tracking-[0.3em] font-orbitron animate-pulse">
                {message}
            </p>

            {/* Bottom accent bar */}
            <div className="mt-8 w-32 h-px bg-gradient-to-r from-transparent via-[#14E19D]/50 to-transparent" />
        </div>
    );
}
