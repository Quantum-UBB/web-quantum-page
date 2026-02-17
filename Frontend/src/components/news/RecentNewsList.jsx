import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const RecentNewsList = ({ news }) => {
  // Show first 4 items by default
  const [visibleCount, setVisibleCount] = useState(4);
  const showMoreIncrement = 3;

  const handleShowMore = () => {
    setVisibleCount(prev => prev + showMoreIncrement);
  };

  const visibleNews = news.slice(0, visibleCount);
  const hasMore = visibleCount < news.length;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="h-8 w-1 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full"></div>
        <h3 className="text-2xl font-bold text-white">Recientes</h3>
      </div>
      
      <div className="flex flex-col gap-4">
        {visibleNews.map((item) => (
          <Link href={`/news/${item.id}`} key={item.id} className="flex gap-4 group cursor-pointer p-2 rounded-xl hover:bg-white/5 transition-colors duration-300">
            <div className="relative w-24 h-20 md:w-32 md:h-24 flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-gray-100 font-semibold text-sm md:text-base line-clamp-2 group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h4>
              <span className="text-xs text-gray-500 mt-1">{item.date}</span>
            </div>
          </Link>
        ))}
      </div>
      
      {hasMore && (
        <button 
            onClick={handleShowMore}
            className="mt-4 flex items-center justify-end text-cyan-400 hover:text-cyan-300 text-sm font-semibold group transition-all"
        >
            Ver más 
            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
      )}
    </div>
  );
};

export default RecentNewsList;
