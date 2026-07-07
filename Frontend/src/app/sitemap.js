const siteUrl = 'https://quantumubb.cl';

export default function sitemap() {
  const routes = [
    '',
    '/about_us',
    '/mission_vision',
    '/areas_of_interest',
    '/investigations',
    '/news',
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/news' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
