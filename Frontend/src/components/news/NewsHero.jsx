import Link from 'next/link';
import Image from 'next/image';

const NewsHero = ({ article }) => {
  if (!article) return null;

  return (
    <Link href={`/news/${article.id}`} className="block group">
      <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent flex flex-col justify-end p-8">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-gray-900/80 rounded-full w-fit backdrop-blur-sm border border-cyan-500/30">
            {article.tag || 'Destacado'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
            {article.title}
          </h2>
          <p className="text-gray-300 text-lg md:w-3/4 line-clamp-2 md:line-clamp-3 mb-4">
            {article.description}
          </p>
          <div className="flex items-center text-sm text-gray-400 gap-4">
              <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                  {article.author}
              </span>
              <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  {article.date}
              </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsHero;
