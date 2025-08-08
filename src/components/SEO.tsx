import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  canonicalPath?: string;
}

const BASE_URL = "https://beta.sourcing.vn";

export const SEO = ({ title, description, image, canonicalPath }: SEOProps) => {
  const { pathname } = useLocation();
  const canonical = `${BASE_URL}${canonicalPath ?? pathname}`;
  const finalTitle = title.length > 60 ? `${title.slice(0, 57)}...` : title;
  const finalDesc = description.length > 160 ? `${description.slice(0, 157)}...` : description;

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};
