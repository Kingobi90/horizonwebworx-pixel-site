import { useEffect } from 'react';

export default function SEOHead() {
  useEffect(() => {
    // Update meta tags
    const metaTags = {
      description:
        'HorizonWebWorX - Professional web design, SEO, and digital marketing services. Transform your business with custom websites, local SEO optimization, and automation solutions.',
      keywords:
        'web design, SEO services, local SEO, digital marketing, website development, business automation, Google My Business, responsive design',
      author: 'HorizonWebWorX',
      'og:title': 'HorizonWebWorX - Level Up Your Digital Presence',
      'og:description':
        'Professional web design and SEO services to transform your business online. Custom websites, local SEO, and automation solutions.',
      'og:type': 'website',
      'og:url': 'https://horizonwebworx.com',
      'og:image': 'https://horizonwebworx.com/og-image.png',
      'twitter:card': 'summary_large_image',
      'twitter:title': 'HorizonWebWorX - Level Up Your Digital Presence',
      'twitter:description':
        'Professional web design and SEO services to transform your business online.',
      'twitter:image': 'https://horizonwebworx.com/og-image.png',
    };

    Object.entries(metaTags).forEach(([name, content]) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.querySelector(`meta[property="${name}"]`);
      }
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

    // Add JSON-LD Schema for Local Business
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'HorizonWebWorX',
      description:
        'Professional web design, SEO, and digital marketing services',
      url: 'https://horizonwebworx.com',
      telephone: '+14385316242',
      email: 'admin@horizonwebworx.com',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
      priceRange: '$$',
      sameAs: [
        'https://www.facebook.com/horizonwebworx',
        'https://www.instagram.com/horizonwebworx',
        'https://www.linkedin.com/company/horizonwebworx',
        'https://twitter.com/horizonwebworx',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '50',
      },
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Web Design Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Website Design',
              description: 'Custom responsive website design and development',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'SEO Optimization',
              description: 'Local and organic SEO services',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Google My Business',
              description: 'Google My Business setup and optimization',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Business Automation',
              description: 'Workflow automation and integration services',
            },
          },
        ],
      },
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schema);
  }, []);

  return null;
}
