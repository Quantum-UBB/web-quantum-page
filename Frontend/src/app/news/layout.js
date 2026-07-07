export const metadata = {
  title: 'Noticias y eventos',
  description: 'Noticias, actividades y eventos del Grupo Quantum UBB relacionados con investigacion, divulgacion, fotonica y tecnologias cuanticas.',
  alternates: { canonical: '/news' },
  openGraph: {
    url: '/news',
    title: 'Noticias y eventos | Quantum UBB',
    description: 'Actualidad, eventos y publicaciones del Grupo Quantum UBB.',
  },
};

export default function NewsLayout({ children }) {
  return children;
}
