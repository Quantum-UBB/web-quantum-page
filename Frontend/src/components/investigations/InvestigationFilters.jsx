'use client';

const InvestigationFilters = ({ activeFilter, onFilterChange }) => {
    return (
        <div className="flex flex-col items-center gap-4 w-full max-w-md mx-auto">
            <div className="relative w-full group">
                <input
                    type="text"
                    placeholder="Filtrar por tema..."
                    value={activeFilter === 'Todos' ? '' : activeFilter}
                    onChange={(e) => onFilterChange(e.target.value)}
                    className="w-full bg-[#0F172A] border border-[#14E19D]/50 rounded-full py-3 px-12 text-white placeholder-slate-500 focus:outline-none focus:border-[#14E19D] focus:ring-1 focus:ring-[#14E19D] focus:shadow-[0_0_20px_rgba(20,225,157,0.2)] transition-all duration-300 font-[family-name:var(--font-orbitron)] tracking-wide shadow-lg"
                />
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#14E19D] transition-transform duration-300 group-focus-within:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>

                {activeFilter && activeFilter !== 'Todos' && (
                    <button
                        onClick={() => onFilterChange('Todos')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                )}
            </div>
        </div>
    );
};

export default InvestigationFilters;
