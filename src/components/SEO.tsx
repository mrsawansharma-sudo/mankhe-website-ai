import { Helmet } from 'react-helmet-async';
import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  exactTitle?: boolean;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
  children?: React.ReactNode;
}

export default function SEO({ 
  title = "MANKHE | The Chhattisgarh Regeneration Project", 
  description = "Rewiring the carbon cycle from the soil up. Carbon removal through biochar and soil restoration in Chhattisgarh.",
  canonical = "https://mankhe.com",
  ogType = "website",
  ogTitle,
  ogDescription,
  ogImage = "https://mankhe.com/og-image.jpg",
  twitterCard = "summary_large_image",
  twitterTitle,
  twitterDescription,
  twitterImage,
  exactTitle = false,
  schema,
  children
}: SEOProps) {
  const fullTitle = exactTitle ? title : (title.includes("MANKHE") ? title : `${title} | MANKHE`);
  const resolvedOgTitle = ogTitle || fullTitle;
  const resolvedOgDesc = ogDescription || description;
  const resolvedTwitterTitle = twitterTitle || resolvedOgTitle;
  const resolvedTwitterDesc = twitterDescription || resolvedOgDesc;
  const resolvedTwitterImage = twitterImage || ogImage;

  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={resolvedOgTitle} />
      <meta property="og:description" content={resolvedOgDesc} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="MANKHE" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={resolvedTwitterTitle} />
      <meta name="twitter:description" content={resolvedTwitterDesc} />
      <meta name="twitter:image" content={resolvedTwitterImage} />

      {/* Schema.org JSON-LD structured data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}

      {children}
    </Helmet>
  );
}
