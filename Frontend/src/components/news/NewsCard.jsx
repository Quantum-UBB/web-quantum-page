import Link from 'next/link';
import Image from 'next/image';

const NewsCard = ({ article, onPin }) => {
  return (
    <div className="relative group block">
        {/* Admin Pin Button */}
        {onPin && (
            <button 
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onPin(article);
                }}
                className="absolute top-3 right-3 z-20 bg-white/10 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20 hover:scale-110 border border-white/20 shadow-lg text-white"
                title="Fijar como destacado"
            >
                <svg className="w-4 h-4 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
            </button>
        )}

    <Link href={`/news/${article.id}`} className="flex flex-col gap-4 cursor-pointer h-full">
        <div className="relative w-full h-48 rounded-xl overflow-hidden mb-2">
            <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
        </div>

        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {article.title}
        </h3>

        <p className="text-gray-400 line-clamp-3 leading-relaxed">
            {article.description}
        </p>
        
        <div className="flex items-center gap-3 pt-2 border-t border-gray-800">
             <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-xs font-bold text-white">
                {article.author ? article.author[0] : 'A'}
            </div>
            <div className="flex flex-col">
                <span className="text-xs text-gray-300 font-medium">{article.author || 'Autor'}</span>
                <span className="text-[10px] text-gray-500">{article.date}</span>
            </div>
        </div>
    </Link>
    </div>
  );
};

export default NewsCard;
