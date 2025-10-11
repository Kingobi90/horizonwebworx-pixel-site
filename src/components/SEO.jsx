import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title = "HorizonWebWorx | Level Up Your Digital Presence",
  description = "Transform your business with legendary web solutions. Custom websites, SEO optimization, automation, and digital marketing services that dominate the competition.",
  keywords = "web design, website development, SEO services, local SEO, digital marketing, business automation, e-commerce development, custom websites, responsive design, Google My Business, web development agency, professional web design, website builder, online marketing, brand development",
  ogImage = "/og-image.png",
  ogType = "website"
}) => {
  const location = useLocation();
  const canonicalUrl = `https://horizonwebworx.com${location.pathname}`;

  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const metaTags = {
      'description': description,
      'keywords': keywords,
      'author': 'HorizonWebWorx',
      'robots': 'index, follow',
      'googlebot': 'index, follow',
      'viewport': 'width=device-width, initial-scale=1.0',
      'theme-color': '#ff0000',
      
      // Open Graph
      'og:title': title,
      'og:description': description,
      'og:type': ogType,
      'og:url': canonicalUrl,
      'og:image': `https://horizonwebworx.com${ogImage}`,
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:site_name': 'HorizonWebWorx',
      'og:locale': 'en_US',
      
      // Twitter Card
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': `https://horizonwebworx.com${ogImage}`,
      'twitter:site': '@horizonwebworx',
      'twitter:creator': '@horizonwebworx',
      
      // Additional SEO
      'application-name': 'HorizonWebWorx',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black',
      'apple-mobile-web-app-title': 'HorizonWebWorx',
      'format-detection': 'telephone=no',
    };

    Object.entries(metaTags).forEach(([name, content]) => {
      let meta = document.querySelector(`meta[name="${name}"]`) || 
                 document.querySelector(`meta[property="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Add structured data (JSON-LD)
    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "HorizonWebWorx",
      "description": description,
      "url": "https://horizonwebworx.com",
      "logo": "https://horizonwebworx.com/og-image.png",
      "image": "https://horizonwebworx.com/og-image.png",
      "telephone": "+1-438-531-6242",
      "email": "ogeniobinna@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "CA",
        "addressRegion": "QC"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "45.5017",
        "longitude": "-73.5673"
      },
      "priceRange": "$599-$9,999",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/horizonwebworx",
        "https://www.instagram.com/horizonwebworx",
        "https://www.linkedin.com/company/horizonwebworx",
        "https://twitter.com/horizonwebworx"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "150",
        "bestRating": "5",
        "worstRating": "1"
      },
      "offers": [
        {
          "@type": "Offer",
          "name": "Website Design",
          "description": "Custom responsive website design and development",
          "price": "599",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "name": "SEO Optimization",
          "description": "Local and organic SEO services",
          "price": "497",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "name": "Business Automation",
          "description": "Workflow automation and integration services",
          "price": "399",
          "priceCurrency": "USD"
        }
      ]
    };

    script.textContent = JSON.stringify(structuredData);
  }, [title, description, keywords, canonicalUrl, ogImage, ogType]);

  return null;
};

export default SEO;
