const siteUrl = 'https://quantumubb.cl';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/profile',
          '/manage-users',
          '/create-user',
          '/my-news',
          '/my-events',
          '/my-investigations',
          '/news/create',
          '/news/event/create',
        ],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
