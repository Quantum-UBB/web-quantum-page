"use client";
import React, { useEffect, useState } from 'react';

import { getNewsData } from '@/services/dataService';
import NewsHero from '@/components/news/NewsHero';
import RecentNewsList from '@/components/news/RecentNewsList';
import NewsCard from '@/components/news/NewsCard';
import CreateNewsWizard from '@/components/news/CreateNewsWizard';

export default function NewsPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [localNews, setLocalNews] = useState([]);

  const fetchData = async () => {
    try {
      const apiData = await getNewsData();
      setData(apiData);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadLocalNews = () => {
    const saved = localStorage.getItem('quantum_local_news');
    if (saved) {
      setLocalNews(JSON.parse(saved));
    }
  };

  useEffect(() => {
    fetchData();
    loadLocalNews();
  }, []);

  const handleNewsCreated = (newArticle) => {
    setLocalNews((prev) => [newArticle, ...prev]);
    setShowCreateForm(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-cyan-400 font-mono animate-pulse">Cargando noticias...</p>
        </div>
      </div>
    );
  }

  // Combinar noticias locales con las recientes y el grid
  // Estrategia: Las noticias locales más recientes van al principio de la lista de "Grid" o "Recientes" según se prefiera.
  // En este diseño, podemos inyectarlas en el grid principal (Tema 1, Tema 2...)
  
  const allGridNews = [...localNews, ...(data?.grid || [])];

  return (
    <div className="min-h-screen bg-[#1D272E]/90 backdrop-blur-[2px] text-gray-100 font-sans selection:bg-cyan-500/30">
        
      <main className="pt-48 md:pt-64 pb-20 px-6 max-w-7xl mx-auto">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-10 border-b border-gray-800 pb-6 gap-4">
            <div>
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent text-white mb-2">
                    Actualidad Cuántica
                </h1>
                <p className="text-gray-400 text-lg">Explora los eventos que moldean el futuro.</p>
            </div>
            <button 
                onClick={() => setShowCreateForm(true)}
                className="bg-gray-800 hover:bg-gray-700 text-cyan-400 border border-cyan-500/30 px-5 py-2 rounded-lg font-medium transition-all hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] flex items-center gap-2"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                Crear Noticia
            </button>
        </div>

        {/* Top Section: Hero + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Hero Article (Left 2/3) */}
            <div className="lg:col-span-2">
                {data?.featured && <NewsHero article={data.featured} />}
            </div>

            {/* Recent News Sidebar (Right 1/3) */}
            <div className="bg-gray-900/40 p-6 rounded-2xl border border-gray-800/50 backdrop-blur-sm h-fit">
                {/* Combinamos noticias locales y recientes para la sidebar también, o solo las recientes + locales nuevas */}
                <RecentNewsList news={[...localNews, ...(data?.recent || [])]} />
            </div>
        </div>

        {/* Grid Selection (Tema 1, Tema 2...) */}
        <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-4">
                Artículos Destacados y Comunidad
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allGridNews.map((newsItem) => (
                    <NewsCard key={newsItem.id} article={newsItem} />
                ))}
            </div>
            {allGridNews.length === 0 && (
                <p className="text-gray-500 italic">No hay más noticias disponibles.</p>
            )}
        </div>

      </main>

      {/* Create News Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity">
            <div className="w-full max-w-2xl animate-in fade-in zoom-in duration-300">
                <CreateNewsWizard 
                    onSuccess={handleNewsCreated} 
                    onClose={() => setShowCreateForm(false)} 
                />
            </div>
        </div>
      )}


    </div>
  );
}