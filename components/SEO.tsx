
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title = "KOLMarket - Tokenize Influence, Mint Digital Life", 
  description = "KOLMarket is the first Web3 platform that tokenizes creator influence, mints AI Digital Life agents, and connects them to embodied robots.",
  keywords = "KOL, Web3, Solana, AI Agent, Digital Life, Creator Economy, Tokenization, Embodied AI",
  image = "/og-image.png"
}) => {
  const fullTitle = title.includes("KOLMarket") ? title : `${title} | KOLMarket`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kolmarket.ai/" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://kolmarket.ai/" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
