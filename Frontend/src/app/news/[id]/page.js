"use client";

import React, { useEffect, useState, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getNewsData } from '@/services/dataService';

export default function NewsDetailPage({ params }) {
  // Unwrap params using React.use()
  const { id } = use(params);
  
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        // 1. Fetch static data
        const apiData = await getNewsData();
        
        // 2. Fetch local data
        const localData = JSON.parse(localStorage.getItem('quantum_local_news') || '[]');

        // 3. Combine all potential sources
        const allNews = [
           apiData.featured,
           ...(apiData.recent || []),
           ...(apiData.grid || []),
           ...localData
        ].filter(Boolean); // Remove null/undefined

        // 4. Find valid article (flexible ID comparison)
        const found = allNews.find(item => String(item.id) === String(id));
        setArticle(found);

      } catch (error) {
        console.error("Error fetching article:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1D272E] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-[#1D272E] flex flex-col items-center justify-center text-gray-400">
        <h1 className="text-3xl font-bold mb-4 font-[family-name:var(--font-orbitron)]">Noticia no encontrada</h1>
        <Link href="/news" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Volver a Noticias
        </Link>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-[#1D272E]/95 backdrop-blur-sm text-gray-100 font-sans selection:bg-cyan-500/30 pt-50 pb-20">
      
      <main className="max-w-4xl mx-auto px-6">
        
        {/* Navigation */}
        <div className="mb-2">
             <Link 
                href="/news" 
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                Volver a Noticias
            </Link>
        </div>

        {/* Article Header (Title & Meta) */}
        <header className="mb-10 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight font-[family-name:var(--font-orbitron)]">
                {article.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-400 font-mono">
                <span className="bg-cyan-900/30 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20">
                    {article.tag || 'Noticia'}
                </span>
                <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    {article.date}
                </span>
                <span className="flex items-center gap-2">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                   {article.author || 'Redacción Quantum'}
                </span>
            </div>
        </header>

        {/* Main Image */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 shadow-2xl border border-gray-800">
            <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
            />
        </div>

        {/* Content Body */}
        <article className="prose prose-invert prose-lg max-w-none text-gray-300 mb-16">
            <p className="lead text-xl text-gray-200 mb-8 font-medium">
                {article.description}
            </p>
            
            {article.content ? (
                <div 
                    className="leading-relaxed [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-cyan-400 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-4 [&>li]:mb-2"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />
            ) : (
                <p className="text-gray-500 italic">
                    [Contenido completo de la noticia no disponible en esta vista previa.]
                </p>
            )}
        </article>

        {/* Secondary Images Gallery (If any) */}
        {article.secondaryImages && article.secondaryImages.length > 0 && (
            <section className="mb-16">
                <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-500 pl-4">Galería de Imágenes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {article.secondaryImages.map((img, index) => (
                        <div key={index} className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300 border border-gray-800">
                            <Image 
                                src={img} 
                                alt={`Imagen secundaria ${index + 1}`} 
                                fill 
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </section>
        )}

         {/* Share / Interaction */}
         <div className="pt-8 border-t border-gray-800 flex justify-between items-center">
            <p className="text-gray-500 text-sm">¿Te gustó este artículo?</p>
            <div className="flex gap-4">
                <button className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </button>
                <button className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                </button>
            </div>
         </div>

      </main>

    </div>
  );
}
