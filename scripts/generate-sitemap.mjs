import fs from 'fs'
import path from 'path'

const SITE_URL = 'https://horizonwebworx.com'

const routes = [
  {
    url: '/',
    changefreq: 'weekly',
    priority: '1.0',
    lastmod: new Date().toISOString().split('T')[0],
  },
  {
    url: '/pricing',
    changefreq: 'monthly',
    priority: '0.9',
    lastmod: new Date().toISOString().split('T')[0],
  },
  {
    url: '/booking',
    changefreq: 'weekly',
    priority: '0.9',
    lastmod: new Date().toISOString().split('T')[0],
  },
  {
    url: '/work',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0],
  },
  {
    url: '/about',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: new Date().toISOString().split('T')[0],
  },
  {
    url: '/ai-receptionist',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0],
  },
  {
    url: '/wholesale-portal',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0],
  },
]

function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  const publicDir = path.join(process.cwd(), 'public')
  
  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap)
  console.log('✅ Sitemap generated successfully at /public/sitemap.xml')
}

generateSitemap()
