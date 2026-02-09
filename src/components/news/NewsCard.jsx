import Link from 'next/link';
import Image from 'next/image';

const NewsCard = ({ article }) => {
  return (
    <Link href={`/news/${article.id}`} className="group flex flex-col gap-4 cursor-pointer block">
        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {article.title}
        </h3>
        
        <div className="relative w-full h-48 rounded-xl overflow-hidden mb-2">
            <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
        </div>

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
  );
};

export default NewsCard;
