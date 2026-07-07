"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getNewsData, getEventsData, toggleNewsPin, toggleEventPin } from '@/services/dataService';
import NewsHero from '@/components/news/NewsHero';
import RecentNewsList from '@/components/news/RecentNewsList';
import NewsCard from '@/components/news/NewsCard';
import EventsWidget from '@/components/news/EventsWidget';
import FutureEventsSection from '@/components/news/FutureEventsSection';
import EventCard from '@/components/news/EventCard';

  // ... (imports)

import { useAuth } from '@/context/AuthContext';

export default function NewsPage() {
  const { user, token } = useAuth();
  const [data, setData] = useState(null);
  const [currentFeatured, setCurrentFeatured] = useState(null); // State for the main pinned article
  const [secondaryFeatured, setSecondaryFeatured] = useState(null); // State for the second pinned article
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [localNews, setLocalNews] = useState([]);

  const fetchData = async () => {
    try {
      const [apiData, eventsData] = await Promise.all([
        getNewsData(),
        getEventsData()
      ]);
      
      setData(apiData);
      setEvents(eventsData);
      
      // Juntar todos los fijados (solo se permiten fijar noticias, no eventos)
      const pinnedNews = apiData.pinned || [];
      
      const allPinned = [...pinnedNews].sort((a,b) => new Date(b.updatedAt) - new Date(a.updatedAt));

      const first = allPinned.length > 0 ? allPinned[0] : apiData.featured;
      let second = null;
      if (allPinned.length > 1) {
          second = allPinned[1];
      } else {
          second = (apiData.grid && apiData.grid.length > 0) ? apiData.grid[0] : null;
      }

      setCurrentFeatured(first);
      setSecondaryFeatured(second);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, []);
  
  if (loading) {
    return (
      <div className="fixed inset-0 min-h-screen bg-[#1D272E] flex items-center justify-center z-50">
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
      ...(data?.grid || [])
  ];

  const handlePin = async (article) => {
      try {
          await toggleNewsPin(article.id, token);
          await fetchData();
          window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (error) {
          console.error("Error al fijar:", error);
      }
  };

  return (
    <>
      {/* Fixed Background Layer to prevent any 'black rectangle' or body bg show-through */}
      <div className="fixed inset-0 z-0 bg-[#1D272E]" aria-hidden="true" />

      <div className="min-h-screen bg-[#1D272E] text-gray-100 font-sans selection:bg-cyan-500/30 -mt-[144px] md:-mt-[176px] relative z-10">
          
        <main className="pt-20 md:pt-24 pb-20 px-6 max-w-7xl mx-auto">
          
          {/* Header & Controls */}
          <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-10 border-b border-gray-800 pb-6 gap-4">
              <div>
                  <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent text-white mb-2">
                      Actualidad Cuántica
                  </h1>
                  <p className="text-gray-400 text-lg">Explora los eventos que moldean el futuro.</p>
              </div>
              
              {/* Creation buttons were moved to private user sections */}
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
                  <RecentNewsList news={allNewsList} />
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
                  {allNewsList.map((item, index) => (
                      item.type === 'event' ? (
                          <EventCard 
                              key={`event-${item.id}-${index}`} 
                              event={item}
                              type="secondary"
                          />
                      ) : (
                          <NewsCard 
                              key={`news-${item.id}-${index}`} 
                              article={item} 
                              onPin={(user?.role === 'Administrador' || user?.role === 'Moderador') ? handlePin : null}
                          />
                      )
                  ))}
              </div>
              {allNewsList.length === 0 && (
                  <p className="text-gray-500 italic">No hay más noticias disponibles.</p>
              )}
          </div>

        </main>

      </div>
    </>
  );
}
