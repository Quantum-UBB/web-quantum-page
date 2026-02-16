"use client";
import React, { useEffect, useState } from 'react';

import { getNewsData, getEventsData } from '@/services/dataService';
import NewsHero from '@/components/news/NewsHero';
import RecentNewsList from '@/components/news/RecentNewsList';
import NewsCard from '@/components/news/NewsCard';
import CreateNewsWizard from '@/components/news/CreateNewsWizard';
import CreateEventWizard from '@/components/news/CreateEventWizard';
import EventsWidget from '@/components/news/EventsWidget';
import FutureEventsSection from '@/components/news/FutureEventsSection';

  // ... (imports)

  // ... (imports)

export default function NewsPage() {
  const [data, setData] = useState(null);
  const [currentFeatured, setCurrentFeatured] = useState(null); // State for the main pinned article
  const [secondaryFeatured, setSecondaryFeatured] = useState(null); // State for the second pinned article
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreateNewsForm, setShowCreateNewsForm] = useState(false);
  const [showCreateEventForm, setShowCreateEventForm] = useState(false);
  const [localNews, setLocalNews] = useState([]);

  const fetchData = async () => {
    try {
      const [apiData, eventsData] = await Promise.all([
        getNewsData(),
        getEventsData()
      ]);
      
      // Merge local events
      const savedEvents = JSON.parse(localStorage.getItem('quantum_local_events') || '[]');
      const allEvents = [...savedEvents, ...eventsData];
      
      setData(apiData);
      setCurrentFeatured(apiData.featured); // Initialize featured
      
      // Initialize secondary featured (first item from grid/local/recent that isn't the main one)
      // Since grid is loaded here, let's pick the first one from grid as default secondary
      const initialSecondary = (apiData.grid && apiData.grid.length > 0) ? apiData.grid[0] : null;
      setSecondaryFeatured(initialSecondary);

      setEvents(allEvents); 
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadLocalData = () => {
    const savedNews = localStorage.getItem('quantum_local_news');
    if (savedNews) {
      setLocalNews(JSON.parse(savedNews));
    }
  };

  useEffect(() => {
    fetchData();
    loadLocalData();
  }, []);

  const handleNewsCreated = (newArticle) => {
    setLocalNews((prev) => [newArticle, ...prev]);
    setShowCreateNewsForm(false);
  };

  const handleEventCreated = (newEvent) => {
      setEvents(prev => [newEvent, ...prev]);
      setShowCreateEventForm(false);
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
  
  // Aggregate ALL news for the bottom grid
  const allNewsList = [
      ...(data?.featured ? [data.featured] : []),
      ...(data?.recent || []),
      ...(data?.grid || []),
      ...localNews
  ];

  const handlePin = (article) => {
      // Prevent pinning the same article as main
      if (currentFeatured?.id === article.id) return;
      
      // If pinning the secondary article, they effectively swap places
      // If pinning a new article, the old main moves to secondary
      setSecondaryFeatured(currentFeatured);
      setCurrentFeatured(article);
      
      // Optional: Scroll to top? window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#1D272E] text-gray-100 font-sans selection:bg-cyan-500/30">
        
      <main className="pt-48 md:pt-64 pb-20 px-6 max-w-7xl mx-auto">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-10 border-b border-gray-800 pb-6 gap-4">
            <div>
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent text-white mb-2">
                    Actualidad Cuántica
                </h1>
                <p className="text-gray-400 text-lg">Explora los eventos que moldean el futuro.</p>
            </div>
            
            <div className="flex gap-3">
                <button 
                    onClick={() => setShowCreateEventForm(true)}
                    className="bg-gray-800 hover:bg-gray-700 text-purple-400 border border-purple-500/30 px-5 py-2 rounded-lg font-medium transition-all hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] flex items-center gap-2"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    Crear Evento
                </button>
                <button 
                    onClick={() => setShowCreateNewsForm(true)}
                    className="bg-gray-800 hover:bg-gray-700 text-cyan-400 border border-cyan-500/30 px-5 py-2 rounded-lg font-medium transition-all hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] flex items-center gap-2"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                    Crear Noticia
                </button>
            </div>
        </div>

        {/* Top Section: Hero + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Hero Article (Left 2/3) */}
            <div className="lg:col-span-2 space-y-8">
                {/* Main Featured (Pinned) */}
                {currentFeatured && <NewsHero article={currentFeatured} />}
                
                {/* Second Featured Article (Static or Dynamic) */}
                {secondaryFeatured && <NewsHero article={secondaryFeatured} />}
            </div>

            {/* Recent News Sidebar (Right 1/3) */}
            <div className="bg-gray-900/40 p-6 rounded-2xl border border-gray-800/50 h-fit">
                {/* Events Section (Active Only) */}
                <EventsWidget events={events} />
                
                {/* Combinamos noticias locales y recientes para la sidebar también, o solo las recientes + locales nuevas */}
                <RecentNewsList news={[...localNews, ...(data?.recent || [])]} />
            </div>
        </div>

        {/* Future Events Section */}
        <FutureEventsSection events={events} />

        {/* Grid Selection (Tema 1, Tema 2...) */}
        <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-4">
                Todos los Artículos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allNewsList.map((newsItem, index) => (
                    <NewsCard 
                        key={`${newsItem.id}-${index}`} 
                        article={newsItem} 
                        onPin={handlePin}
                    />
                ))}
            </div>
            {allNewsList.length === 0 && (
                <p className="text-gray-500 italic">No hay más noticias disponibles.</p>
            )}
        </div>

      </main>

      {/* Create News Modal */}
      {showCreateNewsForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity">
            <div className="w-full max-w-2xl animate-in fade-in zoom-in duration-300">
                <CreateNewsWizard 
                    onSuccess={handleNewsCreated} 
                    onClose={() => setShowCreateNewsForm(false)} 
                />
            </div>
        </div>
      )}

      {/* Create Event Modal */}
      {showCreateEventForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity">
            <div className="w-full max-w-2xl animate-in fade-in zoom-in duration-300">
                <CreateEventWizard 
                    onSuccess={handleEventCreated} 
                    onClose={() => setShowCreateEventForm(false)} 
                />
            </div>
        </div>
      )}

    </div>
  );
}