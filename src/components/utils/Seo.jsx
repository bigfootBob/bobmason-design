import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, image, url }) => {
  // Personalizing for Robert J. Mason
  const siteTitle = "Robert J. Mason | Design Technologist & Product Owner";
  const defaultDescription = "Senior Design Technologist & Accessibility Specialist | Building AI-Native UI (React/Antigravity/Claude) | Certified Scrum Product Owner and UX specialist with a background in front-end development, based in the Willamette Valley.";
  const siteUrl = "https://bobmason.design";
  const defaultImage = `${siteUrl}/portfolio-preview.jpg`;

  const finalTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const finalDesc = description || defaultDescription;
  const finalImage = image || defaultImage;
  const finalUrl = url || siteUrl;

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />
      <link rel="canonical" href={finalUrl} />

      {/* Open Graph / Facebook (Crucial for LinkedIn) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:image" content={finalImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDesc} />
      <meta name="twitter:image" content={finalImage} />
    </Helmet>
  );
};

export default SEO;