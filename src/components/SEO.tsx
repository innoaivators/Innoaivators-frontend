

import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    ogType?: 'website' | 'article';
    ogImage?: string;
}

export function SEO({
    title,
    description,
    canonical,
    ogType = 'website',
    ogImage = 'https://innoaivators.com/logo.jpg' // Using absolute URL for OG image
}: SEOProps) {
    const siteTitle = 'InnoAivators';
    const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;
    const siteUrl = 'https://innoaivators.com';

    // Organization Structured Data
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "InnoAivators",
        "url": siteUrl,
        "logo": `${siteUrl}/logo.jpg`,
        "sameAs": [
            "https://instagram.com/innoaivators" // Placeholder - update with real social links
        ],
        "description": "Leading AI and digital transformation agency specializing in web development, app development, IoT solutions, and AI automations.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Near Thank U Bakery, Thiruparankundram Rd, pallivasal complex",
            "addressLocality": "Madurai",
            "addressRegion": "Tamil Nadu",
            "postalCode": "625011",
            "addressCountry": "IN"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-90877-86231",
            "contactType": "customer service"
        }
    };

    // WebSite Structured Data (helps with sitelinks search box)
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "InnoAivators",
        "url": siteUrl,
        "potentialAction": {
            "@type": "SearchAction",
            "target": `${siteUrl}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph */}
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={canonical || siteUrl} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={ogImage} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(websiteSchema)}
            </script>
        </Helmet>
    );
}
