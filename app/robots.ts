import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://three-brothers-kad-n-kuaforu.vercel.app/sitemap.xml',
  };
}
